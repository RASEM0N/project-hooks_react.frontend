import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CurrentUserContext } from '../contexts/currentUser'

const Navbar = () => {
    const [{ isLoggedIn, currentUser }] = useContext(CurrentUserContext)

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Medium
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-link" exact>
                            Home
                        </NavLink>
                    </li>
                    {isLoggedIn === false && (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" exact>
                                    Sign in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/register"
                                    className="nav-link"
                                    exact
                                >
                                    Sign up
                                </NavLink>
                            </li>
                        </React.Fragment>
                    )}
                    {isLoggedIn === true && (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink
                                    to="/create/article"
                                    className="nav-link"
                                    exact
                                >
                                    <i className="ion-compose" /> New Post
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/profiles/${currentUser.username}`}
                                    className="nav-link"
                                    exact
                                >
                                    <img
                                        src={currentUser.image}
                                        alt=""
                                        className="user-pic"
                                    />

                                    {currentUser.username}
                                </NavLink>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
