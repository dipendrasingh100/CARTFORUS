import React from 'react'
import "../css/user.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const User = () => {
    return (
        <div className="user-container">
            <div className="user-btn">
                <span>Login</span>
                <FontAwesomeIcon icon={faAngleRight} size="xs" style={{color: "#ffffff",}} />
            </div>
            <div className="dropdown-cont">
                <ul>
                    <li>New User?
                        <div className="signup-btn">
                            Register
                        </div>
                    </li>
                    <hr />
                    <li>Profile</li>
                    <li>Wishlist</li>
                </ul>
            </div>
        </div>
    )
}

export default User
