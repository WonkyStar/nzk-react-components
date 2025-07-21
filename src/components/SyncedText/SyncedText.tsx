import React, { useEffect, useMemo, useRef, useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import type { Howl } from 'howler'
import { ISyncedTextProps } from './types'
import { useAudioTimeout } from './hooks/useTimeout'
import Button from '../Button'
import { PurpleMegaphone, Megaphone } from '../../icons'

export const SyncedText = (props: ISyncedTextProps) => {
  const { value } = props
  const howlRef = useRef<Howl | null>(null)
  const updateRaf = useRef<any>()
  const textRef = useRef<HTMLDivElement | null>(null)
  const hasStartedRef = useRef(false)
  const remainingElementsRef = useRef<HTMLSpanElement[]>([])
  const elementsRef = useRef<HTMLSpanElement[]>([])
  const [playing, setPlaying] = useState(false)

  const [startTimeout, stopTimeout] = useAudioTimeout({
    timeoutMs: props.timeoutMs
  })

  const onHowlPlayError = (err) => {
    stopTimeout()
    setPlaying(false)
    if (props.onError) {
      return props.onError({ type: 'PLAY_ERROR', error: err })
    }
    return null
  }

  const onHowlLoadError = (err) => {
    stopTimeout()
    setPlaying(false)
    if (props.onError) {
      return props.onError({ type: 'LOAD_ERROR', error: err })
    }
    return null
  }

  const onTimeout = () => {
    howlRef.current?.stop()
    setPlaying(false)
    if (props.onError) {
      return props.onError({ type: 'TIMEOUT' })
    }
    return null
  }

  const play = () => {
    if (howlRef.current?.playing()) return
    startTimeout(onTimeout)
    howlRef.current?.play()
  }


  useEffect(() => {
    if (value.audio && props.Howl) {
      howlRef.current = new props.Howl({
        src: value.audio,
        autoplay: props.autoPlay
      })
      if (props.autoPlay) {
        startTimeout(onTimeout)
      }

      if (props.setRef) {
        props.setRef({
          play,
          getHowl: () => howlRef.current,
          isPlaying: () => {
            return howlRef.current?.playing()
          },
          pause: () => howlRef.current?.pause(),
          stop: () => howlRef.current?.stop()
        })
      }
    }
    return () => {
      stopTimeout()
      howlRef.current?.stop()
    }
  }, [])

  const updateHighlights = () => {
    elementsRef.current.forEach(e => {
      if (e.classList.contains('highlighted')) {
        e.classList.remove('highlighted')
        e.classList.add('has-highlighted')
      }
    })
  }

  const updateText = (time: number) => {
    if (!howlRef.current) return
    if (!textRef.current) return
    if (!remainingElementsRef.current[0]) return
    if (time > parseFloat(remainingElementsRef.current[0].getAttribute('data-start') || '0')) {
      updateHighlights()
      remainingElementsRef.current[0].classList.add('highlighted')
      remainingElementsRef.current = remainingElementsRef.current.slice(1, remainingElementsRef.current.length)
    }
  }

  const onPlay = () => {
    hasStartedRef.current = true
    remainingElementsRef.current = elementsRef.current
    setPlaying(true)

    const onAnimationFrame = () => {
      // If the howl is still playing
      if (howlRef.current?.playing()) {
        stopTimeout() // Deregister timeout if we managed to start playing
        const time = howlRef.current.seek()
        updateText(time)
        updateRaf.current = requestAnimationFrame(onAnimationFrame);
      }
      // If the howl is no longer playing
      else if (updateRaf) {
        cancelAnimationFrame(updateRaf.current);
      }
    };
    // Start processing updates
    updateRaf.current = requestAnimationFrame(onAnimationFrame);
  }

  const resetHighlights = () => {
    elementsRef.current.forEach(e => {
      e.classList.remove('highlighted')
      e.classList.remove('has-highlighted')
    })
  }

  const onEnd = () => {
    cancelAnimationFrame(updateRaf.current);
    setPlaying(false)
    if (hasStartedRef.current) {
      resetHighlights()
      if (props.onComplete) {
        props.onComplete()
      }
    }
  }

  useEffect(() => {
    howlRef.current?.on('play', onPlay)
    howlRef.current?.on('end', onEnd)
    howlRef.current?.on('stop', onEnd)

    howlRef.current?.on('playerror', onHowlPlayError)
    howlRef.current?.on('loaderror', onHowlLoadError)

    if (elementsRef.current) {
      const els = textRef.current?.querySelectorAll('span.synced-test--part')
      if (els) {
        elementsRef.current = Array.from(els) as HTMLSpanElement[]
        remainingElementsRef.current = elementsRef.current
      }
    }
    return () => {
      onEnd()
      howlRef.current?.off('play', onPlay)
      howlRef.current?.off('end', onEnd)
      howlRef.current?.off('stop', onEnd)

      howlRef.current?.off('playerror', onHowlPlayError)
      howlRef.current?.off('loaderror', onHowlLoadError)
    }
  }, [props.value])

  const playButton = useMemo(() => {
    if (!props.showPlayButton) return null
    const buttonProps = {
      className: 'synced-text--play',
      onClick: play,
      style: { marginRight: '10px' }
    }

    if (props.playButton) {
      return <div {...buttonProps} data-playing={playing}>
        {props.playButton}
      </div>
    }
    return <Button
      theme={playing ? 'purple' : 'primary'}
      {...buttonProps}
      size='x-small'
      round
    >
      {playing ? <Megaphone /> : <PurpleMegaphone />}
    </Button>

  }, [props.showPlayButton, playing])



  if (!value) return null

  return <div ref={textRef} className='synced-text'>
    {playButton}
    {value.sequences.map((s, i) => <span
      className='synced-test--part'
      style={{
        display: 'inline-block'
      }}
      data-start={s.time[0]}
      data-end={s.time[1]}
      key={s.time[0]}
    >
      <span
        className='synced-text--word'
        dangerouslySetInnerHTML={{
          __html: `${s.text}`
        }}
      />
      {i < value.sequences.length && <span className='synced-text--space' style={{
        whiteSpace: 'pre-wrap'
      }}> </span>}
    </span>)}
  </div>
}
