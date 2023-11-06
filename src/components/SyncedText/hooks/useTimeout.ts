import { useRef } from 'react'

interface IProps {
  timeoutMs?: number
}

export const useAudioTimeout = (props: IProps) => {
  const timeoutRef = useRef<any>(0)

  const start = (cb: () => void) => {
    if (!props.timeoutMs) return
    timeoutRef.current = setTimeout(() => {
      cb()
    }, props.timeoutMs)
  }

  const stop = () => {
    clearTimeout(timeoutRef.current)
  }

  return [start, stop] as [
    typeof start,
    typeof stop
  ]

}