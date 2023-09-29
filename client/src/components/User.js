import React from 'react'
import "../css/user.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className="user-container">
            <Link to='/account/login'>
                <div className="user-btn">
                    <FontAwesomeIcon icon={faUser} style={{ color: "#2A9D8F", }} />
                    <span>Login</span>
                    <FontAwesomeIcon icon={faAngleRight} size="xs" style={{ color: "#2A9D8F", }} />
                </div>
            </Link>
            <div className="dropdown-cont">
                <ul>

                    <Link to='/account/signup'>
                        <li>
                            New User?
                            <div className="signup-btn">
                                Register
                            </div>
                        </li>
                    </Link>
                    <li>Profile</li>
                    <li>Wishlist</li>
                </ul>
            </div>
        </div>
    )
}

export default User
