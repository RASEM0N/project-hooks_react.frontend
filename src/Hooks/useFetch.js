import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (someUrl) => {
    const baseUrl = 'https://conduit.productionready.io/api'
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponce] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = (options = {}) => {
        setOptions(options)
        setIsLoading(true)
    }

    useEffect(() => {
        if (!isLoading) return

        axios(`${baseUrl}${someUrl}`, options)
            .then((response) => {
                setResponce(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error.response.data)
            })
    }, [isLoading])

    return [
        {
            isLoading,
            response,
            error,
        },
        doFetch,
    ]
}

export default useFetch
