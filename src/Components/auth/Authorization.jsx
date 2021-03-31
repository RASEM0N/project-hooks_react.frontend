import React, { useEffect, useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import useLocalStorage from '../../Hooks/useLocalStorage'
import { CurrentUserContext } from '../contexts/currentUser'
import ErrorMessage from './ErrorMessage'

// user: {email: "sadhsjd@gmail.com", password: "sadhsjdsadhsjd", username: "sadhsjd"}

function Authorization() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthorize, setIsAuthorize] = useState(false)
    const [{ response, isLoading, error }, doFetch] = useFetch('/users/login')
    const [token, setToken] = useLocalStorage('token')
    const [, setCurrentUserState] = useContext(CurrentUserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        doFetch({
            method: 'POST',
            data: {
                user: {
                    email: email,
                    password: password,
                },
            },
        })
    }

    useEffect(() => {
        if (!response) return
        setToken(response.user?.token)
        setIsAuthorize(true)
        setCurrentUserState((state) => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user,
        }))
    }, [response, setToken, setCurrentUserState])

    if (isAuthorize || token) return <Redirect to="/" />

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">LOGIN</h1>
                        <p className="text-xs-center">
                            <Link to="/register">Need an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            {error && <ErrorMessage errors={error.errors} />}
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={password}
                                        autoComplete="on"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </fieldset>
                                <button
                                    className="btn bnt-lg btn-primary pull-xs-right"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    Sign in
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authorization
