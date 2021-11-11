/* eslint-env browser */

export interface Point {
  x: number,
  y: number
}

interface Props {
  width: number,
  height: number,
  scale: number,
  onTouchStart?: (point : Point) => void,
  onTouchMove?: (point : Point) => void,
  onTouchEnd?: (point : Point) => void,
  onTouchLeave?: (point : Point) => void,
  onTouchEnter?: (point : Point)=> void
}

export default (props: Props) => { 
  const el = document.createElement('div')
  el.style.width = `${props.width}px`
  el.style.height = `${props.height}px`
  el.style.position = 'absolute'
  el.style.left = '0px'
  el.style.top = '0px'

  const getMousePoint = (ev) => {
    const rect = el.getBoundingClientRect()
    return {
      x: (ev.clientX - rect.left) * props.scale,
      y: (ev.clientY - rect.top) * props.scale
    }
  }

  const getTouchPoint = (ev) => {
    const rect = el.getBoundingClientRect()
    return {
      x: (ev.touches[0].clientX - rect.left) * props.scale,
      y: (ev.touches[0].clientY - rect.top) * props.scale
    }
  }

  const wrapMouseEvent = (ev, handler) => {
    ev.preventDefault()
    ev.stopPropagation()
    handler(getMousePoint(ev))
  }

  const wrapTouchEvent = (ev, handler) => {
    ev.preventDefault()
    ev.stopPropagation()
    if (ev.touches[0]) {
      handler(getTouchPoint(ev))
    } else {
      handler()
    }
  }

  el.addEventListener("mousedown", (ev) => wrapMouseEvent(ev, props.onTouchStart))
  el.addEventListener("mousemove", (ev) => wrapMouseEvent(ev, props.onTouchMove))
  el.addEventListener("mouseup", (ev) => wrapMouseEvent(ev, props.onTouchEnd))
  el.addEventListener("mouseleave", (ev) => wrapMouseEvent(ev, props.onTouchLeave))
  el.addEventListener("mouseenter", (ev) => {
    if (ev.buttons > 0) {
      wrapMouseEvent(ev, props.onTouchStart)
    }
  })
  el.addEventListener("touchstart", (ev) => wrapTouchEvent(ev, props.onTouchStart))
  el.addEventListener("touchmove", (ev) => wrapTouchEvent(ev, props.onTouchMove))
  el.addEventListener("touchend", (ev) => wrapTouchEvent(ev, props.onTouchEnd, true))
  el.addEventListener("touchcancel", (ev) => wrapTouchEvent(ev, props.onTouchEnd))

  return el
}