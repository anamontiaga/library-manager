import { useCallback, useState } from 'react'
import sendRequest from './apiClient'

export default function useFetch() {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null
  })

  const fetchData = useCallback(async function ({ url, method, body }) {
    try {
      setFetchState({
        isLoading: true,
        isSuccess: false,
        isFailed: false,
        data: null,
        error: null
      })
      const result = await sendRequest({ url, method, body })
      setFetchState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        data: result,
        error: null
      })
      return result;
    } catch (error) {
      setFetchState({
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        data: null,
        error,
      })
    }
  }, [])
  return [fetchState, fetchData]
}