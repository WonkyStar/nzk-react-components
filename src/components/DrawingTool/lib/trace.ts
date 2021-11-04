/* eslint-env browser */

import SketchStrokeModel from "./SketchStrokeModel"

export default (stroke: SketchStrokeModel, ctx: CanvasRenderingContext2D) => {
  const nbPoints = stroke.length()
  
  ctx.beginPath()
  
  if(nbPoints < 3) {
    ctx.moveTo(stroke.points[0].s.x, stroke.points[0].s.y)
    ctx.lineTo(stroke.points[nbPoints-1].s.x + 0.001, stroke.points[nbPoints-1].s.y + 0.001)
  } else {
    ctx.moveTo(stroke.points[0].s.x, stroke.points[0].s.y)
    
    let i
    let len
    let move
  
    const ref = stroke.points.slice(1, +(nbPoints - 2) + 1 || 9e9)
    for (i = 0, len = ref.length; i < len; i += 1) {
      move = ref[i]
      ctx.quadraticCurveTo(move.s.x, move.s.y, move.h.x, move.h.y)
    }
  }
}