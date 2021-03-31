import { useContext, useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { CurrentUserContext } from '../contexts/currentUser'
import useLocalStorage from '../../Hooks/useLocalStorage'

function UserChecker({ children }) {
    const [{ response }, doFetch] = useFetch('/user')
    const [, setCurrentUserState] = useContext(CurrentUserContext)
    const [token] = useLocalStorage('token')

    useEffect(() => {
        if (!token) {
            setCurrentUserState((state) => ({
                ...state,
                isLoading: false,
            }))
            return
        }

        doFetch()
        setCurrentUserState((state) => ({
            ...state,
            isLoading: true,
        }))
    }, [])

    useEffect(() => {
        if (!response) return
        setCurrentUserState((state) => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user,
        }))
    }, [response])

    return children
}

export default UserChecker
