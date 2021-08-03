import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * A hook to fetch async data.
 * @class useAsync
 * @borrows useAsyncObject
 * @param {object} _                props
 * @param {async} _.asyncFunc         Promise like async function
 * @param {bool} _.immediate=false    Invoke the function immediately
 * @param {object} _.funcParams       Function initial parameters
 * @param {object} _.initialData      Initial data
 * @returns {useAsyncObject}        Async object
 * @example
 *   const { execute, loading, data, error } = useAync({
 *    asyncFunc: async () => { return 'data' },
 *    immediate: false,
 *    funcParams: { data: '1' },
 *    initialData: 'Hello'
 *  })
 */

interface IProps {
  asyncFunc: (params: any) => any
  immediate: boolean
  funcParams?: any,
  initialData?: any
}

interface IAsyncHook {
  loading: boolean,
  data: any,
  execute: (params?: any) => any,
  error: any
}

const initialProps = {
  asyncFunc: () => {},
  immediate: false,
  funcParams: {},
  initialData: null
}

const useAsync = (props: IProps = initialProps): IAsyncHook => {
  const {
    asyncFunc, immediate, funcParams, initialData
  } = {
    ...props
  }
  const [loading, setLoading] = useState(immediate)
  const [data, setData] = useState(initialData)
  const [error, setError] = useState(null)
  const mountedRef = useRef(true)

  const execute = useCallback(params => {
    setLoading(true)
    return asyncFunc({ ...funcParams, ...params })
      .then((res: any) => {
        if (!mountedRef.current) return null
        setData(res)
        setError(null)
        setLoading(false)
        return res
      })
      .catch((err: any) => {
        if (!mountedRef.current) return null
        setError(err)
        setLoading(false)
        throw err
      })
  }, [asyncFunc, funcParams])

  useEffect(() => {
    if (immediate) {
      execute(funcParams)
    }
    return () => {
      mountedRef.current = false
    }
  }, [])

  return {
    execute,
    loading,
    data,
    error
  }
}

export default useAsync
