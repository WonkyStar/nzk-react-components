import { useEffect, useLayoutEffect, useRef } from 'react'

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (!delay) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    // eslint-disable-next-line consistent-return
    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
