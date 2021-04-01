import React from 'react'
import { NavLink } from 'react-router-dom'

function FeedToogler({ tagname }) {
    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <NavLink to="/feed" className="nav-link">
                        Your feed
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">
                        Global feed
                    </NavLink>
                </li>
                {tagname && (
                    <li className="nav-item">
                        <NavLink to={`/tags/${tagname}`} className="nav-link">
                            <i className="ion-pound"></i> {tagname}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FeedToogler
