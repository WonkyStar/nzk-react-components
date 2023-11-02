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
}

export interface ISyncedTextProps {
  value: IAudioSync
  setRef?: (ref: ISyncedTextRef) => void
  autoPlay?: boolean
  onComplete?: () => void
}