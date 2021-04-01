import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import useLocalStorage from './useLocalStorage'

const useFetch = (someUrl) => {
    const baseUrl = 'https://conduit.productionready.io/api'
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponce] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})
    const [token] = useLocalStorage('token')

    // doFetch не кэшируется React-ом
    // также, как и остальные кастомные хуки
    // useCallback в помощь

    const doFetch = useCallback((options = {}) => {
        setOptions(options)
        setIsLoading(true)
    }, [])

    useEffect(() => {
        if (!isLoading) return

        const requestOptions = {
            ...options,
            ...{
                headers: {
                    authorization: token ? `Token ${token}` : '',
                },
            },
        }

        axios(`${baseUrl}${someUrl}`, requestOptions)
            .then((response) => {
                setResponce(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                console.log(error)
                if (error.response?.data) {
                    setError(error.response.data)
                } else {
                    setError({ errors: ['Server error'] })
                }
            })
    }, [isLoading, options, someUrl, token])

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
