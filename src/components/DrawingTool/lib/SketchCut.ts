import Sketch, { SketchProps } from "./Sketch"
import SketchCutModel from "./SketchCutModel"
import SketchLayer from "./SketchLayer"
import SketchStrokeModel from "./SketchStrokeModel"
import trace from "./trace"

export interface SketchCutProps extends SketchProps {
  model: SketchCutModel
  imageToCut: string
}
export default class SketchCut extends Sketch {
  readonly model: SketchCutModel

  readonly imageToCut: string

  cutLayer: SketchLayer

  uiLayer: SketchLayer

  constructor(props: SketchCutProps) {
    super(props)
  
    this.model = new SketchCutModel({
      pixelRatioScale: this.pixelRatioScale
    })
  
    this.imageToCut = props.imageToCut
    this.drawingLayer.drawImageToFit(this.imageToCut)

    const defaultLayerProps = {
      width: props.containerEl.offsetWidth,
      height: props.containerEl.offsetHeight
    }

    this.cutLayer = new SketchLayer(defaultLayerProps)
    this.cutLayer.canvas.style.zIndex = '1'
    this.containerEl.appendChild(this.cutLayer.canvas)

    this.uiLayer = new SketchLayer(defaultLayerProps)
    this.uiLayer.canvas.style.zIndex = '4'
    this.containerEl.appendChild(this.uiLayer.canvas)
  }

  initDrawAnimations() {
    super.initDrawAnimations()
		this.drawFinished.cut = this.drawCutFinal
		this.drawAnimation.cut = this.drawCutStroke
  }

  setDrawingStyle (style, ctx) {
    const colour = 'rgba(0, 0, 0, 1)'
		ctx.strokeStyle = colour
		ctx.fillStyle = colour
		ctx.lineWidth = 7 * this.pixelRatioScale
		ctx.lineJoin = "round"
    ctx.lineCap = "round"
  }

  drawCutStroke(stroke) {
    this.bufferLayer.clear()
    trace(stroke, this.bufferLayer.ctx)
    this.bufferLayer.ctx.closePath()
    this.bufferLayer.ctx.stroke()
  }

  drawCutFinal(stroke) {
    this.bufferLayer.clear()
    this.drawingLayer.ctx.globalCompositeOperation = 'copy'
    this.drawingLayer.drawImageToFit(this.imageToCut)
    this.drawingLayer.ctx.globalCompositeOperation = 'destination-in'
    trace(stroke, this.drawingLayer.ctx)
    this.drawingLayer.ctx.closePath()
    this.drawingLayer.ctx.fill()
    this.cutLayer.hide()

    const box = this.findBoundingBox(this.drawingLayer.ctx)

    // If the cut is too small, get rid of it and broadcast an event
    if(box.width < 0 || box.height < 0 || (box.width * box.height) < ((this.width * this.height) * 0.001)) {
      this.uiLayer.clear()
      this.drawingLayer.ctx.globalCompositeOperation = 'copy'
      this.drawingLayer.drawImageToFit(this.imageToCut)
    } else {
      this.drawOutline(stroke)
      this.cutLayer.clear()
      this.cutLayer.ctx.drawImage(this.drawingLayer.ctx.canvas, box.topLeftX, box.topLeftY, box.width, box.height, 0, 0, box.width, box.height)
    }
  }

  drawOutline (stroke: SketchStrokeModel) {
    this.uiLayer.ctx.strokeStyle = "rgba(0, 0, 0, 0.7)"
    this.uiLayer.ctx.lineWidth = 7 * this.pixelRatioScale
    this.uiLayer.ctx.lineJoin = "round"
    this.uiLayer.ctx.lineCap = "round"

    if (this.uiLayer.ctx.setLineDash) {
      this.uiLayer.ctx.setLineDash([15])
      // @ts-ignore
    } else if(this.uiLayer.ctx.webkitLineDash) {
      // @ts-ignore
      this.uiLayer.ctx.webkitLineDash = [15, 15]
    } else {
      // @ts-ignore
      this.uiLayer.ctx.mozDash = [15, 15]
    }

    this.uiLayer.clear()
    trace(stroke, this.uiLayer.ctx)
    this.uiLayer.ctx.closePath()
    this.uiLayer.ctx.stroke()
  }

  getLayerToExport () {
    return this.cutLayer
  }
}