import { useContext, useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { CurrentUserContext } from '../contexts/currentUser'
import useLocalStorage from '../../Hooks/useLocalStorage'

function UserChecker({ children }) {
    const [{ response }, doFetch] = useFetch('/user')
    const [, dispatch] = useContext(CurrentUserContext)
    const [token] = useLocalStorage('token')

    // doFetch не кэшируется React-ом
    // также, как и остальные кастомные хуки

    useEffect(() => {
        if (!token) {
            dispatch({
                type: 'SET_UNAUTHORIZED',
            })
            return
        }

        doFetch()
        dispatch({
            type: 'LOADING',
        })
    }, [dispatch, token, doFetch])

    useEffect(() => {
        if (!response) return
        dispatch({
            type: 'SET_AUTHORIZED',
            payload: response.user,
        })
    }, [response, dispatch])

    return children
}

export default UserChecker
