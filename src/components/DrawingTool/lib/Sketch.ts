/* eslint-env browser */

import SketchLayer from './SketchLayer'
import createInteractionSurface, { Point } from './createInteractionSurface'
import SketchModel, { SketchActionMergeData, SketchModelData } from './SketchModel'
import { SketchStrokeStyle } from './SketchStrokeModel'
import trace from './trace'
import trimCanvas from './trimCanvas'

export interface SketchProps {
  containerEl: HTMLDivElement
  template?: string
  onChange?: Function
  sketchData?: SketchModelData
}

interface ExportProps {
  crop?: boolean
}

const setDrawingStyle = (style: undefined | SketchStrokeStyle, ctx: CanvasRenderingContext2D) => {
  if (style) {
    const colour = `rgba(${style.colour[0]}, ${style.colour[1]}, ${style.colour[2]}, ${style.opacity})`
    ctx.strokeStyle = colour
    ctx.fillStyle = colour
    ctx.lineWidth = style.size
  }
  ctx.lineJoin = "round"
  ctx.lineCap = "round"
}

export default class Sketch {
  readonly containerEl: HTMLDivElement

  readonly width: number

  readonly height: number

  readonly naturalWidth: number

  readonly naturalHeight: number

  readonly pixelRatioScale: number

  readonly model: SketchModel

  readonly drawingLayer: SketchLayer

  readonly bufferLayer: SketchLayer

  readonly cacheLayer: SketchLayer

  readonly templateLayer?: SketchLayer

  template?: string

  interactionSurface: HTMLDivElement

  isDrawing: boolean = false

  onChange?: Function

  sketchData?: SketchModelData

  drawUndo?: any

  drawFinished?: any

  drawAnimation?: any

  reqStroke?: any

  constructor(props: SketchProps) {
    this.containerEl = props.containerEl
    this.naturalWidth = props.containerEl.offsetWidth
    this.naturalHeight = props.containerEl.offsetHeight
    this.pixelRatioScale = window.devicePixelRatio > 1.5 ? 2 : 1
    this.width = this.naturalWidth * this.pixelRatioScale
    this.height = this.naturalHeight * this.pixelRatioScale
    this.template = props.template

    this.model = new SketchModel({
      pixelRatioScale: this.pixelRatioScale
    })

    const defaultLayerProps = {
      pixelRatioScale: this.pixelRatioScale,
      width: props.containerEl.offsetWidth,
      height: props.containerEl.offsetHeight
    }

    if (this.template) {
      this.templateLayer = new SketchLayer(defaultLayerProps)
      this.templateLayer.drawImageToFill(this.template)
      this.containerEl.appendChild(this.templateLayer.canvas)
    }

    // The main drawing layer, that will be used to export the full image
    this.drawingLayer = new SketchLayer(defaultLayerProps)
    this.drawingLayer.canvas.style.zIndex = '1'
    this.containerEl.appendChild(this.drawingLayer.canvas)

    // The buffer & cache layers are used during drawing
    this.bufferLayer = new SketchLayer(defaultLayerProps)
    this.bufferLayer.canvas.style.zIndex = '2'
    this.containerEl.appendChild(this.bufferLayer.canvas)

    this.cacheLayer = new SketchLayer(defaultLayerProps)
    this.cacheLayer.hide()
    this.containerEl.appendChild(this.cacheLayer.canvas)

    // Interaction surface
    this.interactionSurface = createInteractionSurface({
      width: this.containerEl.offsetWidth,
      height: this.containerEl.offsetHeight,
      scale: this.pixelRatioScale,
      onTouchStart: this.startDraw.bind(this),
      onTouchMove: this.continueDraw.bind(this),
      onTouchEnd: this.endDraw.bind(this),
      onTouchLeave: this.endDraw.bind(this),
      onTouchEnter: this.startDraw.bind(this)
    })
    this.interactionSurface.style.zIndex = '100'
    this.containerEl.appendChild(this.interactionSurface)

    // Drawing settings
    this.initDrawAnimations()

    if (this.bufferLayer.ctx) {
      setDrawingStyle(this.model.getStyle(), this.bufferLayer.ctx)
    }
  
    if (props.onChange) this.onChange = props.onChange
  
    if(props.sketchData) {
      this.deserialize(props.sketchData)
      this.drawExistingSketch()
    }
  }

  setBrush({ colour, size, opacity, fill, eraser }) {
    if(colour !== undefined) {
      this.model.colour = colour
    }

    if(size !== undefined) {
      this.model.size = size 
    }

    if(opacity !== undefined) {
      this.model.opacity = opacity
    }

    if(fill !== undefined) {
      this.model.fill = fill
    }

    if(eraser !== undefined) {
      this.model.eraser = eraser
    }
  }

  mergeImage(data: SketchActionMergeData, saveAction = true) {
    const doMerge = (img: HTMLImageElement) => {
      const scale = (data.width / img.width) * this.pixelRatioScale
      this.drawingLayer.ctx.save()
      this.drawingLayer.ctx.translate(data.origin[0], data.origin[1])
      this.drawingLayer.ctx.rotate(data.rotation * Math.PI / 180)
      this.drawingLayer.ctx.translate(- data.x - img.width * scale / 2, - data.y - img.height * scale / 2)
      this.drawingLayer.ctx.drawImage(img, data.x, data.y, img.width * scale, img.height * scale)
      this.drawingLayer.ctx.restore()
      if (saveAction) {
        this.model.saveMergeImage(data)
        if (this.onChange) {
          this.onChange()
        }
      }
    }
  
    if (data.image) {
      doMerge(data.image)
    } else if (data.imageSrc) {
      const img = new Image
      img.onload = () => { doMerge(img) }
      img.src = data.imageSrc
    }
  }

  export(props?: ExportProps) {
    if (this.templateLayer) {
      this.templateLayer.drawImageToFit(this.drawingLayer.canvas)
    } 

    const layerToExport = this.getLayerToExport()

    const exportCanvas = (props && props.crop) ? trimCanvas(layerToExport.canvas) : layerToExport.canvas

    return exportCanvas.toDataURL()
  }

  undo() {
    if(!this.model.canUndo()) return

    this.model.lastActionIndex -= 1
    this.drawingLayer.clear()

    for(let i = 0; i <= this.model.lastActionIndex; i += 1) {
      if (this.model.actions[i].type === 'STROKE' && this.model.actions[i].model) {
        this.drawUndoStroke(this.model.actions[i].model)
      } else if (this.model.actions[i].type === 'IMAGE_MERGE' && this.model.actions[i]) {
        this.mergeImage(this.model.actions[i].data as SketchActionMergeData, false)
      }
    }
  }

	redo() {
    if(!this.model.canRedo()) return 

		this.model.lastActionIndex += 1

    const action = this.model.actions[this.model.lastActionIndex]
    
    if (action.type === 'STROKE' && action.model) {
      this.drawUndoStroke(action.model)
    } else if (action.type === 'IMAGE_MERGE' && action.data) {
      this.mergeImage(action.data as SketchActionMergeData, false)
    }
  }

  canUndo() {
    return this.model.canUndo()
  }

  canRedo() {
    return this.model.canRedo()
  }
  
  restart() {
    this.model.reset()
    this.drawingLayer.clear()
    if (this.onChange) {
      this.onChange()
    }
  }

  serialize() {
    return this.model.serialize()
  }

  deserialize(serialized) {
    this.model.deserialize(serialized)
  }

  getNumberOfActions() {
    return this.model.lastActionIndex + 1
  }

  //
  // Internal helpers
  //

  initDrawAnimations(){
    this.drawUndo = {
			transparentEraserFill: this.drawTransparentFillFinal,
			transparentEraserStroke: this.drawStrokeFinal,
			transparentColourFill: this.drawTransparentFillFinal,
			transparentColourStroke: this.drawStrokeFinal,
			opaqueEraserFill: this.drawEraserUndoingFillFinal,
			opaqueEraserStroke: this.drawEraserUndoingFinal,
			opaqueColourFill: this.drawFillFinal,
      opaqueColourStroke: this.drawStrokeFinal
    }

		this.drawFinished = {
			transparentEraserFill: this.drawTransparentFillFinal,
			transparentEraserStroke: this.drawStrokeFinal,
			transparentColourFill: this.drawTransparentFillFinal,
			transparentColourStroke: this.drawStrokeFinal,
			opaqueEraserFill: this.drawEraserFillFinal,
			opaqueEraserStroke: this.drawEraser,
			opaqueColourFill: this.drawFillFinal,
      opaqueColourStroke: this.drawStrokeFinal
    }

		this.drawAnimation = {
			transparentEraserFill: this.drawFillAndStroke,
			transparentEraserStroke: this.drawFillAndStroke,
			transparentColourFill: this.drawFillAndStroke,
			transparentColourStroke: this.drawFillAndStroke,
			opaqueEraserFill: this.drawEraser,
			opaqueEraserStroke: this.drawEraser,
			opaqueColourFill: this.drawFillAndStroke,
      opaqueColourStroke: this.drawFillAndStroke
    }
  }

  startDraw(point: Point) {
    this.isDrawing = true

    this.model.initStroke(point)

    if(this.model.currentStroke && this.model.currentStroke.style && this.cacheLayer.ctx && this.drawingLayer.ctx) {
      if (this.model.currentStroke.style.eraser && this.model.currentStroke.style.opacity === 1.0) {
        this.cacheLayer.ctx.globalCompositeOperation = "copy"
        this.cacheLayer.ctx.drawImage(this.drawingLayer.ctx.canvas, 0, 0, this.width, this.height)
        setDrawingStyle(this.model.currentStroke.style, this.drawingLayer.ctx)
      }
    }

    if (this.model.currentStroke && this.bufferLayer.ctx) {
      setDrawingStyle(this.model.currentStroke.style, this.bufferLayer.ctx)
    }

    this.strokeAnimation()
  }

  continueDraw (point: Point) {
    if(!this.isDrawing) return false
    this.model.continueStroke(point)
    return false
  }

  endDraw() {
    if(!(this.model.currentStroke && this.model.currentStroke.style)) return
    this.isDrawing = false
    this.endStrokeAnimation()
    this.bufferLayer.clear()
    this.drawFinishedStroke(this.model.currentStroke)
    this.model.saveStroke()
    if (this.onChange) {
      this.onChange()
    }
  }

	drawExistingSketch() {
    if(this.model.lastActionIndex > -1){
      this.model.actions.forEach(action => {
        if (action.type === 'STROKE' && action.model){
          this.drawExistingStroke(action.model)
        } else if (action.type === 'IMAGE_MERGE') {
          this.mergeImage(action.data as SketchActionMergeData, false)
        }
      })
    }
  }

	strokeAnimation() {
    this.drawAnimationStroke(this.model.currentStroke)
		this.reqStroke = window.requestAnimationFrame(() => this.strokeAnimation.apply(this))
  }

	drawAnimationStroke(stroke) {
    this.drawAnimation[stroke.style.type].apply(this, [stroke])
  }

	endStrokeAnimation() {
		window.cancelAnimationFrame(this.reqStroke)
    this.reqStroke = 0
  }

  drawUndoStroke(stroke) {
    setDrawingStyle(stroke.style, this.drawingLayer.ctx)
    this.drawUndo[stroke.style.type].apply(this, [stroke])
  }

	drawFinishedStroke(stroke) {
    setDrawingStyle(stroke.style, this.drawingLayer.ctx)
    this.drawFinished[stroke.style.type].apply(this, [stroke])
  }

	drawExistingStroke (stroke) {
    setDrawingStyle(stroke.style, this.drawingLayer.ctx)
    this.drawFinished[stroke.style.type].apply(this, [stroke, false])
  }

  drawTransparentFillFinal(stroke) {
    this.cacheLayer.clear()
    this.cacheLayer.ctx.globalCompositeOperation = "source-over"
    setDrawingStyle({ ...stroke.style, opacity: 1 }, this.cacheLayer.ctx)
    trace(stroke, this.cacheLayer.ctx)
    this.cacheLayer.ctx.closePath()
    this.cacheLayer.ctx.stroke()
    this.cacheLayer.ctx.fill()

    this.drawingLayer.ctx.globalCompositeOperation = "source-over"
    this.drawingLayer.ctx.globalAlpha = stroke.style.opacity
    this.drawingLayer.ctx.drawImage(this.cacheLayer.ctx.canvas, 0, 0, this.width, this.height)
    this.drawingLayer.ctx.globalAlpha = 1.0
  }

  drawStrokeFinal(stroke) {
    this.drawingLayer.ctx.globalCompositeOperation = "source-over"
    trace(stroke, this.drawingLayer.ctx)
    this.drawingLayer.ctx.stroke()
  }

  drawFillFinal(stroke) {
    this.drawingLayer.ctx.globalCompositeOperation = "source-over"
    trace(stroke, this.drawingLayer.ctx)
    this.drawingLayer.ctx.closePath()
    this.drawingLayer.ctx.fill()
    this.drawingLayer.ctx.stroke()
  }

	drawFillAndStroke(stroke) {
    this.bufferLayer.clear()
    trace(stroke, this.bufferLayer.ctx)
    setDrawingStyle({ ...stroke.style, opacity: 1 }, this.bufferLayer.ctx)
    this.bufferLayer.ctx.globalAlpha = stroke.style.opacity
    if(this.model.fill) {
      this.bufferLayer.ctx.closePath()
      this.bufferLayer.ctx.fill()
    }
    this.bufferLayer.ctx.stroke()
  }

	drawEraserUndoingFinal(stroke) {
    this.drawingLayer.ctx.globalCompositeOperation = "destination-out"
    trace(stroke, this.drawingLayer.ctx)
    this.drawingLayer.ctx.stroke()
  }

	drawEraserUndoingFillFinal(stroke) {
    this.drawingLayer.ctx.globalCompositeOperation = "destination-out"
    trace(stroke, this.drawingLayer.ctx)
    this.drawingLayer.ctx.closePath()
    this.drawingLayer.ctx.fill()
    this.drawingLayer.ctx.stroke()
  }

	drawEraser(stroke, copy = true) {
    if (copy) {
      this.drawingLayer.ctx.globalCompositeOperation = "copy"
      this.drawingLayer.ctx.drawImage(this.cacheLayer.ctx.canvas, 0, 0, this.width, this.height)
    }
    this.drawingLayer.ctx.globalCompositeOperation = "destination-out"
    trace(stroke, this.drawingLayer.ctx)
    this.drawingLayer.ctx.stroke()
  }

	drawEraserFillFinal(stroke, copy = true){
    if(copy) {
      this.drawingLayer.ctx.globalCompositeOperation = "copy"
      this.drawingLayer.ctx.drawImage(this.cacheLayer.ctx.canvas, 0, 0, this.width, this.height)
    }

    this.drawingLayer.ctx.globalCompositeOperation = "destination-out"
    trace(stroke, this.drawingLayer.ctx)
    this.drawingLayer.ctx.closePath()
    this.drawingLayer.ctx.fill()
    this.drawingLayer.ctx.stroke()
  }

  findBoundingBox(ctx) {
    const imageData = ctx.getImageData(0, 0, this.width, this.height)

    const box = {
      topLeftX: this.width,
      topLeftY: this.height,
      bottomRightX: 0,
      bottomRightY: 0,
      width: 0,
      height: 0
    }

    for(let x = 0; x < this.width; x+=1){
      for(let y = 0; y < this.height; y+=1){
        const pixelPosition = (((y * this.width) + x) * 4) + 3

        if(imageData.data[pixelPosition] > 0){
          if(x < box.topLeftX) box.topLeftX = x
          if(y < box.topLeftY) box.topLeftY = y
          if(x > box.bottomRightX) box.bottomRightX = x
          if(y > box.bottomRightY) box.bottomRightY = y
        }
      }
    }

    box.width = box.bottomRightX - box.topLeftX
    box.height = box.bottomRightY - box.topLeftY

    return box
  }

  getLayerToExport () {
    return this.templateLayer || this.drawingLayer
  }
}
