import React, { createContext, useReducer } from 'react'

const initialState = {
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
}

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'LOADING': {
            return { ...state, isLoading: true }
        }
        case 'SET_AUTHORIZED': {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                currentUser: payload,
            }
        }
        case 'SET_UNAUTHORIZED': {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
            }
        }
        default: {
            return state
        }
    }
}

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
    // const [state, setState] = useState({
    //     isLoading: false,
    //     isLoggedIn: null,
    //     currentUser: null,
    // })

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CurrentUserContext.Provider value={[state, dispatch]}>
            {children}
        </CurrentUserContext.Provider>
    )
}
