import { useEffect, useRef } from 'react'

const useMountState = () => {
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  return mountedRef.current
}

export default useMountState
