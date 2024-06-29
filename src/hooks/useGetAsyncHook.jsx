import { useEffect } from "react";
import { useState } from "react";
import api from "../api"

export default function useGetAsync(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get(url).then(resp => {
      setIsLoading(false)
      setData(resp);
    }).catch(err => {
      console.log('useAsync Err:', err)
      setIsLoading(false);
      setError(err)
    })
  }, [url])

  return { data, error, isLoading }
}
