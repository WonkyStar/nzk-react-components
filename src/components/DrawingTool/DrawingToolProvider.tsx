/* eslint-env browser */
import { useRef, useState, useCallback, useEffect } from 'react'
import { createContainer } from 'unstated-next'
import Sketch, { BrushType } from './lib/sketch/Sketch'
import SketchCut from './lib/SketchCut'

export const BrushSize = {
  small: 7,
  medium: 21,
  large: 42
}

export const Colours = [
  { rgb: [53,162,218], hex: '#35a2da' },
  { rgb: [0,156,149], hex: '#009c95' },
  { rgb: [0,137,54], hex: '#008936' },
  { rgb: [147,192,31], hex: '#93c01f' },
  { rgb: [201,216,0], hex: '#c9d800' },
  { rgb: [255,236,0], hex: '#ffec00' },
  { rgb: [255,145,0], hex: '#ff9100' },
  { rgb: [255,0,25], hex: '#ff0019' },
  { rgb: [255,0,164], hex: '#ff00a4' },
  { rgb: [186,13,108], hex: '#ba0d6c' },
  { rgb: [135,0,198], hex: '#8700c6' },
  { rgb: [104,59,17], hex: '#683b11' },
  { rgb: [29,29,27], hex: '#1d1d1b' },
  { rgb: [134,134,134], hex: '#868686' },
  { rgb: [255,255,255], hex: '#FFFFFF' },
]

export interface Colour {
  rgb: number[],
  hex: string
}

type ToolMode = 'DRAW' | 'CUT' | 'PLACE'

export interface Props {
  cache?: string
}

const DrawingToolState = (props?: Props) => {
  const sketchRef = useRef<Sketch>()
  const sketchCutRef = useRef<SketchCut>()

  const [autoCache, setAutoCache] = useState(true)
  const [cacheKey, setCacheKey] = useState('nzk-sketch-cache')

  const [brushSize, setBrushSize] = useState(BrushSize.small)
  const [brushType, setBrushType] = useState<BrushType>('MultiLine')
  const [currentColour, setCurrentColour] = useState(Colours[0])
  const [brushOpacity, setBruchOpacity] = useState(1)
  
  const [toolMode, setToolMode] = useState<ToolMode>('DRAW')

  const setSketchRef = useCallback(node => {
    sketchRef.current = node
    if (sketchRef.current) {
      sketchRef.current.selectedLineSize = brushSize
      sketchRef.current.selectedBrushType = brushType
      sketchRef.current.selectedColor = {
        r: currentColour.rgb[0],
        g: currentColour.rgb[1],
        b: currentColour.rgb[2]
      }
      sketchRef.current.selectedOpacity = 1
    }
  }, [])

  const setSketchCutRef = useCallback(node => {
    sketchCutRef.current = node
  }, [])

  // Sketch tool brush changes
  useEffect(() => {
    if (sketchRef && sketchRef.current) {
      sketchRef.current.selectedLineSize = brushSize
      sketchRef.current.selectedBrushType = brushType
      sketchRef.current.selectedColor = {
        r: currentColour.rgb[0],
        g: currentColour.rgb[1],
        b: currentColour.rgb[2]
      }
      sketchRef.current.selectedOpacity = brushType === 'Eraser' ? 1 : brushOpacity
    }
  }, [sketchRef.current, brushSize, currentColour, brushOpacity, brushType])

  const onSketchChange = () => {
    if (!autoCache || !sketchRef.current) return
    window.localStorage.setItem(cacheKey, JSON.stringify(sketchRef.current.serialize()))
  }

  const clearCache = () => {
    window.localStorage.removeItem(cacheKey)
  }

  const getCache = () => {
    return (props && props.cache) || window.localStorage.getItem(cacheKey)
  }

  const initSketch = (containerEl) => {
    // let data

    if (sketchRef.current) {
      // data = sketchRef.current.serialize()
    } else {
      const cachedRawData = getCache()
      if (cachedRawData) {
        // data = JSON.parse(cachedRawData)
      }
    }

    setSketchRef(new Sketch({
      containerEl,
      onChange: onSketchChange
    }))
  }

  const initSketchCut = (containerEl, imageToCut: HTMLImageElement, onImageCut: () => void) => {
    setSketchCutRef(new SketchCut({
      containerEl,
      imageToCut,
      onImageCut
    }))
  }

  const resetCut = () => {
    if (sketchCutRef && sketchCutRef.current) {
      sketchCutRef.current.resetCut()
    }
  }

  const exportSketch = (options = { crop: true }) => {
    if (sketchRef.current) {
      return sketchRef.current.export(options) as string
    } 
    return ''
  }

  const exportSketchCut = () => {
    if (sketchCutRef.current) {
      return sketchCutRef.current.export({crop: true}) as string
    } 
    return ''
  }

  const exportCache = () => {
    if (sketchRef.current) {
      return JSON.stringify(sketchRef.current.serialize())
    }
    return null
  }

  // const mergeImage = (data: SketchActionMergeData) => {
  //   if (sketchRef.current) {
  //     return sketchRef.current.mergeImage(data)
  //   }
  //   return null
  // }


  // const undo = () => {
  //   if (sketchRef.current) sketchRef.current.undo()
  // }

  // const redo = () => {
  //   if (sketchRef.current) sketchRef.current.redo()
  // }

  const restart = () => {
    if (sketchRef.current) sketchRef.current.restart()
  }

  return {
    initSketch,
    initSketchCut,
    exportSketch,
    exportSketchCut,
    currentColour,
    setCurrentColour,
    brushOpacity,
    setBruchOpacity,
    brushSize,
    setBrushSize,
    brushType,
    setBrushType,
    // undo,
    // redo,
    restart,
    onSketchChange,
    setCacheKey,
    setAutoCache,
    clearCache,
    resetCut,
    // mergeImage,
    setToolMode,
    toolMode,
    exportCache
  }
}

const DrawingToolProviderContainer = createContainer(DrawingToolState)
export const DrawingToolProvider = DrawingToolProviderContainer.Provider
export const useDrawingTool = DrawingToolProviderContainer.useContainer