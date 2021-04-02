import React, { useState, useEffect, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import useLocalStorage from '../../Hooks/useLocalStorage'
import { CurrentUserContext } from '../contexts/currentUser'
import ErrorMessage from './ErrorMessage'

function Register() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthorize, setIsAuthorize] = useState(false)
    const [{ response, isLoading, error }, doFetch] = useFetch('/users')
    const [token, setToken] = useLocalStorage('token')
    const [, dispatch] = useContext(CurrentUserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        doFetch({
            method: 'POST',
            data: {
                user: {
                    email: email,
                    password: password,
                    username: username,
                },
            },
        })
    }

    useEffect(() => {
        if (!response) return
        setToken(response.user?.token)
        setIsAuthorize(true)
        dispatch({
            type: 'SET_AUTHORIZED',
            payload: response.user,
        })
    }, [response, setToken, dispatch])

    if (isAuthorize || token) return <Redirect to="/" />

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">REGISTER</h1>
                        <p className="text-xs-center">
                            <Link to="/login">Have an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            {error && <ErrorMessage errors={error.errors} />}
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="name"
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </fieldset>
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
                                        autoComplete="on"
                                        value={password}
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
                                    Sign up
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
