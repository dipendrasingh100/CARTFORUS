import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons'
import "../css/user.css"

const User = () => {
    const { loggedin, username } = useSelector(state => state.user)

    //convert the button after login
    return (
        <div className="user-container">
            {loggedin === 1 ?
                <div className="user-btn">
                    <FontAwesomeIcon icon={faUser} style={{ color: "#2A9D8F", }} />
                    <span>{username.split(" ")[0]}</span>
                    <FontAwesomeIcon icon={faAngleRight} size="xs" style={{ color: "#2A9D8F", }} />
                </div> :
                <Link to='/account/login'>
                    <div className="user-btn">
                        <FontAwesomeIcon icon={faUser} style={{ color: "#2A9D8F", }} />
                        <span>Login</span>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" style={{ color: "#2A9D8F", }} />
                    </div>
                </Link>
            }
            <div className="dropdown-cont">
                <ul>
                    {loggedin ?
                        <li className='res-li uname'>{username.split(" ")[0]}</li> :
                        <Link to='/account/signup'>
                            <li className='res-li'>
                                New User?
                                <div className="signup-btn">
                                    Register
                                </div>
                            </li>
                        </Link>
                    }
                    <Link to='/user/whishlist'>
                        <li>Wishlist</li>
                    </Link>
                    {
                        loggedin === 1 && <Link to='/account/logout'>
                            <li>Logout</li>
                        </Link>
                    }
                </ul>
            </div>
        </div>
    )
}

export default User
