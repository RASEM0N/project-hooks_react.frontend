import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Authorization() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmiting, setIsSubmiting] = useState(false)

    useEffect(() => {
        if (!isSubmiting) return
        axios
            .post('https://conduit.productionready.io/api/users/login', {
                method: 'POST',
                data: {
                    user: {
                        email: 'email',
                        password: 'password',
                    },
                },
            })
            .then((response) => {
                console.log(response)
                setIsSubmiting(false)
            })
            .catch((error) => {
                console.error(error)
                setIsSubmiting(false)
            })
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmiting(true)
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <div
                            className="text-xs-center m-b-1"
                            style={{ fontSize: 20 }}
                        >
                            LOGIN
                        </div>

                        <form onSubmit={handleSubmit}>
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
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </fieldset>
                                <button
                                    className="btn bnt-lg btn-primary pull-xs-right m-b-1"
                                    type="submit"
                                    disabled={isSubmiting}
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>

                        <p className="text-xs-center">
                            <Link to="/register">Need an account?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authorization
