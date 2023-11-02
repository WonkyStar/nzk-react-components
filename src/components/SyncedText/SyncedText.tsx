import React, { useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { ISyncedTextProps } from './types'

export const SyncedText = (props: ISyncedTextProps) => {
  const { value } = props
  const howlRef = useRef<Howl | null>(null)
  const updateRaf = useRef<any>()
  const textRef = useRef<HTMLDivElement | null>(null)
  const hasStartedRef = useRef(false)
  const remainingElementsRef = useRef<HTMLSpanElement[]>([])
  const elementsRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    if (value.audio) {
      howlRef.current = new Howl({
        src: value.audio,
        autoplay: props.autoPlay
      })

      if (props.setRef) {
        props.setRef({
          play: () => {
            if (howlRef.current?.playing()) return
            howlRef.current?.play()
          },
          isPlaying: () => {
            return howlRef.current?.playing()
          },
          pause: () => howlRef.current?.pause(),
          stop: () => howlRef.current?.stop()
        })
      }
    }
    return () => {
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

    const onAnimationFrame = () => {
      // If the howl is still playing
      if (howlRef.current?.playing()) {
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
    }
  }, [props.value])



  if (!value) return null

  return <div ref={textRef} className='synced-text'>
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