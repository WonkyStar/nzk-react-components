export interface SketchPoint {
  x: number
  y: number
}

export type SketchStrokeType = 'transparentEraserFill' 
  | 'transparentEraserStroke'
  | 'transparentColourFill'
  | 'transparentColourStroke' 
  | 'opaqueEraserFill'
  | 'opaqueEraserStroke'
  | 'opaqueColourFill'
  | 'opaqueColourStroke'
  | 'cut'

export interface SketchStrokeStyle {
  opacity: number
  colour: number[]
  eraser: boolean
  size: number
  type: SketchStrokeType
}

export interface SketchStrokeModelPoint {
  s: SketchPoint
  h: SketchPoint | null
}

export interface SketchStrokeModelData {
  style?: SketchStrokeStyle
  points: SketchStrokeModelPoint[]
}

export default class SketchStrokeModel {
  style?: SketchStrokeStyle

  points: SketchStrokeModelPoint[]

  constructor(style?: SketchStrokeStyle, firstPoint?: SketchPoint) {
    if (style) {
      this.style = style
    }

    this.points = []

    if (firstPoint) {
      this.points.push({
        s: firstPoint,
        h: null
      })
    }
  }

  length() {
    return this.points.length
  }

  lastPoint() {
    return this.points[this.points.length - 1].s
  }

  addPoint(newPoint) {
    this.points[this.points.length - 1].h = {
      x: (this.points[this.points.length - 1].s.x + newPoint.x) / 2,
      y: (this.points[this.points.length - 1].s.y + newPoint.y) / 2
    }
    return this.points.push({
      s: newPoint,
      h: null
    })
  }

  serialize() {
    return {
      points: this.points,
      style: this.style
    }
  }

  deserialize (serialized) {
    if (!serialized) return
    this.style = serialized.style
    this.points = serialized.points || []
  }
}
