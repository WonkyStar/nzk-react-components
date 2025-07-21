
// eslint-disable-next-line import/no-unresolved
import type { Howl } from 'howler'
import type { ReactElement } from 'react'

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
  Howl: typeof Howl
  showPlayButton?: boolean
  playButton?: ReactElement
  setRef?: (ref: ISyncedTextRef) => void
  autoPlay?: boolean
  onComplete?: () => void
  timeoutMs?: number
  onTimeout?: () => void
  onError?: (err: any) => void
}
