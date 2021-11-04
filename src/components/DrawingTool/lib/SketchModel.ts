import SketchStrokeModel, { SketchPoint, SketchStrokeModelData, SketchStrokeType } from './SketchStrokeModel'

export type SketchActionType = 'STROKE' | 'IMAGE_MERGE'

export interface SketchActionMergeData {
  image: string
  x: number
  y: number
}

export interface SketchAction {
  type: SketchActionType
  data?: SketchStrokeModelData | SketchActionMergeData
  model?: SketchStrokeModel
}

export interface SketchModelData {
  colour: number[]
  opacity: number
  size: number
  lastActionIndex: number
  actions: SketchAction[]
  currentStroke: null | SketchStrokeModelData
}

interface Props {
  pixelRatioScale: number
}

export default class SketchModel {
  colour: number[] = [0, 0, 0]

  eraser: boolean = false

  fill: boolean = false

  opacity: number = 1.0

  size: number = 7

  pixelRatioScale: number = 1

  actions: SketchAction[] = []

  lastActionIndex: number = -1

  currentStroke: null | SketchStrokeModel = null

  constructor(props: Props) {
    this.pixelRatioScale = props.pixelRatioScale
  }

  generateStyleType() {
    return `${this.eraser || this.opacity === 1.0 ? 'opaque' : 'transparent'}${this.eraser ? 'Eraser' : 'Colour'}${this.fill ? 'Fill' : 'Stroke'}` as SketchStrokeType
  }

  getStyle() {
    return {
      opacity: this.opacity,
      colour: this.colour,
      eraser: this.eraser,
      size: this.size * this.pixelRatioScale,
      type: this.generateStyleType()
    }
  }

  initStroke(newPoint: SketchPoint) {
    if(this.canRedo()){
      if(this.lastActionIndex === -1){
        this.actions = []
      } else {
        this.actions = this.actions.slice(0, this.lastActionIndex + 1)
      }
    }

    this.currentStroke = new SketchStrokeModel(this.getStyle(), newPoint)
  }

  continueStroke(newPoint: SketchPoint) {
    if (this.currentStroke) {
      this.currentStroke.addPoint(newPoint)
    }
  }

	saveStroke() {
    if (this.currentStroke) {
      this.actions.push({
        type: 'STROKE',
        model: this.currentStroke
      })
      this.currentStroke = null
      this.lastActionIndex += 1
    }
  }

  saveMergeImage(mergeParams: SketchActionMergeData) {
    this.actions.push({
      type: 'IMAGE_MERGE',
      data: mergeParams
    })
  }

  canUndo() {
    return this.lastActionIndex > -1
  }

  canRedo() {
    return this.lastActionIndex < this.actions.length - 1
  }

  reset() {
    this.actions = []
    this.lastActionIndex = -1
    if (this.currentStroke) {
      this.currentStroke = null
    }
  }

  serialize(){
    const serialized = {
      colour: this.colour,
      opacity: this.opacity,
      size: this.size,
      lastActionIndex: this.lastActionIndex,
      actions: [] as SketchAction[],
      currentStroke: null as null | SketchStrokeModelData
    }

    this.actions.forEach(action => {
      let serializedObject
      if (action.type === 'STROKE' && action.model) {
        serializedObject = action.model.serialize()
      }
      serialized.actions.push({
        type: action.type,
        data: serializedObject
      })
    })

    if (this.currentStroke) {
      serialized.currentStroke = this.currentStroke.serialize()
    }

    return serialized
  }

  deserialize(serialized: SketchModelData) {
    this.colour = serialized.colour
    this.opacity = serialized.opacity
    this.size = serialized.size
    this.lastActionIndex = serialized.lastActionIndex
    this.actions = [] as SketchAction[]
    serialized.actions.forEach(action => {
      const deserializedAction = {
        type: action.type,
        data: action.data,
        model: null as null | SketchStrokeModel
      } as SketchAction
  
      if (action.type === 'STROKE' && action.data) {
        const stroke = new SketchStrokeModel()
        stroke.deserialize(action.data)
        deserializedAction.model = stroke
      }
  
      this.actions.push(deserializedAction)
    })

    if(serialized.currentStroke !== undefined ){
      this.currentStroke = new SketchStrokeModel()
      this.currentStroke.deserialize(serialized.currentStroke)
    }
  }
}