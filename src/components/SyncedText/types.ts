import { Howl } from 'howler'

export interface ISequence {
  text: string
  time: [number, number]
}

export interface IAudioSync {
  audio: string
  sequences: ISequence[]
}

export interface ISyncedTextRef {
  play: () => void
  pause: () => void
  stop: () => void
  isPlaying: () => void
  getHowl: () => Howl | null
}

export interface ISyncedTextProps {
  value: IAudioSync
  setRef?: (ref: ISyncedTextRef) => void
  autoPlay?: boolean
  onComplete?: () => void
  timeoutMs?: number
  onTimeout?: () => void
  onError?: (err: any) => void
}