import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerification, setPasswordVerification] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
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
                            REGISTER
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
                                        type="name"
                                        className="form-control form-control-lg"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
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

                                <fieldset className="form-group">
                                    <input
                                        type="passwordVerification"
                                        className="form-control form-control-lg"
                                        placeholder="Verification password"
                                        value={passwordVerification}
                                        onChange={(e) =>
                                            setPasswordVerification(
                                                e.target.value
                                            )
                                        }
                                    />
                                </fieldset>
                                <button
                                    className="btn bnt-lg btn-primary pull-xs-right m-b-1"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>

                        <p className="text-xs-center">
                            <Link to="/login">Have you an account?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
