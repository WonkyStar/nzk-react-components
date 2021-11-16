/* eslint-env browser */

import createInteractionSurface, { Point } from '../createInteractionSurface'
import trimCanvas from '../trimCanvas'
import Action from './actions/Action'
import BrushAction from './actions/BrushAction'
import * as Actions from './actions/index'
import Layer from './Layer'
import { Color } from './types'

export type BrushType = 'Line' | 'Fill'

const ActionForBrushType = {
  [`Line`]: Actions.LineBrush,
  [`Fill`]: Actions.FillBrush
}

export interface SketchProps {
  containerEl: HTMLDivElement
  template?: string
  onChange?: Function
}

interface ExportProps {
  crop?: boolean
}

export default class Sketch {
  selectedColor: Color = { r: 0, g: 0, b: 0 }

  selectedLineSize: number = 7

  selectedOpacity: number = 1

  selectedBrushType: BrushType | null = 'Line'

  readonly containerEl: HTMLDivElement

  readonly width: number

  readonly height: number

  readonly naturalWidth: number

  readonly naturalHeight: number

  readonly pixelRatioScale: number

  readonly drawingLayer: Layer

  readonly bufferLayer: Layer

  readonly templateLayer?: Layer

  readonly interactionSurface: HTMLDivElement

  template?: string

  currentDrawingAction: BrushAction | null = null

  actions: Action[] = []

  lastActionIndex: number = -1

  reqAnimationFrameID: number = 0

  onChange?: Function

  constructor(props: SketchProps) {
    this.containerEl = props.containerEl
    this.naturalWidth = props.containerEl.offsetWidth
    this.naturalHeight = props.containerEl.offsetHeight
    this.pixelRatioScale = window.devicePixelRatio > 1.5 ? 2 : 1
    this.width = this.naturalWidth * this.pixelRatioScale
    this.height = this.naturalHeight * this.pixelRatioScale
    this.template = props.template

    const defaultLayerProps = {
      pixelRatioScale: this.pixelRatioScale,
      width: props.containerEl.offsetWidth,
      height: props.containerEl.offsetHeight
    }

    if (this.template) {
      this.templateLayer = new Layer(defaultLayerProps)
      this.templateLayer.drawImageToFill(this.template)
      this.containerEl.appendChild(this.templateLayer.canvas)
    }

    // The main drawing layer, that will be used to export the full image
    this.drawingLayer = new Layer(defaultLayerProps)
    this.drawingLayer.canvas.style.zIndex = '1'
    this.containerEl.appendChild(this.drawingLayer.canvas)

    // A buffer layer to be used when drawing
    this.bufferLayer = new Layer(defaultLayerProps)
    this.bufferLayer.canvas.style.zIndex = '2'
    this.containerEl.appendChild(this.bufferLayer.canvas)

    // Interaction surface
    this.interactionSurface = createInteractionSurface({
      width: this.containerEl.offsetWidth,
      height: this.containerEl.offsetHeight,
      scale: this.pixelRatioScale,
      onTouchStart: this.startTouch.bind(this),
      onTouchMove: this.moveTouch.bind(this),
      onTouchEnd: this.endTouch.bind(this),
      onTouchLeave: this.endTouch.bind(this),
      onTouchEnter: this.startTouch.bind(this)
    })
    this.interactionSurface.style.zIndex = '100'
    this.containerEl.appendChild(this.interactionSurface)

    if (props.onChange) this.onChange = props.onChange
  
    // if(props.sketchData) {
    //   this.deserialize(props.sketchData)
    //   this.drawExistingSketch()
    // }
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
    if(!this.canUndo()) return

    this.lastActionIndex -= 1
    this.drawingLayer.clear()

    // for(let i = 0; i <= this.lastActionIndex; i += 1) {
    //   if (this.actions[i].type === 'STROKE' && this.model.actions[i].model) {
    //     this.drawUndoStroke(this.model.actions[i].model)
    //   } else if (this.model.actions[i].type === 'IMAGE_MERGE' && this.model.actions[i]) {
    //     this.mergeImage(this.model.actions[i].data as SketchActionMergeData, false)
    //   }
    // }
  }

	redo() {
    // if(!this.model.canRedo()) return 

		// this.model.lastActionIndex += 1

    // const action = this.model.actions[this.model.lastActionIndex]
    
    // if (action.type === 'STROKE' && action.model) {
    //   this.drawUndoStroke(action.model)
    // } else if (action.type === 'IMAGE_MERGE' && action.data) {
    //   this.mergeImage(action.data as SketchActionMergeData, false)
    // }
  }

  canUndo() {
    //
  }

  canRedo() {
    //
  }
  
  restart() {
    // this.model.reset()
    this.drawingLayer.clear()
    if (this.onChange) {
      this.onChange()
    }
  }

  startTouch(point: Point) {
    if (!this.selectedBrushType) return

    const SelectedBrushAction = ActionForBrushType[this.selectedBrushType]

    if (!SelectedBrushAction) return

    const action = new SelectedBrushAction({
      sketch: this
    })

    action.startDraw(point)

    this.actions.push(action)
    this.lastActionIndex += 1
    this.currentDrawingAction = action

    this.reqAnimationFrameID = window.requestAnimationFrame(() => {
      if (this.currentDrawingAction) {
        this.currentDrawingAction.onAnimationFrame()
      } else {
        window.cancelAnimationFrame(this.reqAnimationFrameID)
      }
    })
  }

  moveTouch(point: Point) {
    if (!this.currentDrawingAction) return
    this.currentDrawingAction.continueDraw(point)
  }

  endTouch() {
    if (!this.currentDrawingAction) return
    window.cancelAnimationFrame(this.reqAnimationFrameID)
    this.reqAnimationFrameID = 0
    this.currentDrawingAction.endDraw()
    this.currentDrawingAction = null
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

	drawEraserUndoingFinal(stroke) {
    this.drawingLayer.ctx.globalCompositeOperation = "destination-out"
    trace(stroke, this.drawingLayer.ctx)
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
