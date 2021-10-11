import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosConfig';
import axios from 'axios'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // alert(axiosInstance)
    const source = axios.CancelToken.source();
    let isMounted = true;
    (async function () {
      try {
        setLoading(true)
        const response = await axiosInstance.get(url,{ cancelToken: source.token })
        if (isMounted) {
          setData(response.data)
        }
      } catch (error) {
        if (!isMounted) return // comp alresady unmounted, nothing to do
        if (axiosInstance.isCancel(error)) console.log(error)
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(error.response.data)
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
      } finally {
        setLoading(false)
      }
    })();

    //cancelando subscripciones
    return () => {
      isMounted = false
      source.cancel()
    }
  }, [url])
  return { data, error, loading }
}

