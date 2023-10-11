import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/user.css"
import { logout } from '../app/userSlice'
import { toastOptions } from '../utils/constants'

const User = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, user } = useSelector(state => state.user)
    const handleLogout = () => {
        dispatch(logout())
        
        toast.success('Logout Successfully', toastOptions);
        return <ToastContainer />
    }
    //convert the button after login
    return (
        <div className="user-container">
            {isAuthenticated ?
                <div className="user-btn">
                    <FontAwesomeIcon icon={faUser} style={{ color: "#2A9D8F", }} />
                    <span>{user?.name?.split(" ")[0]}</span>
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
                    {isAuthenticated ?
                        <li className='res-li uname'>{user?.name?.split(" ")[0]}</li> :
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
                        isAuthenticated && <Link to='/account/logout'>
                            <li onClick={handleLogout}>Logout</li>
                        </Link>
                    }
                </ul>
            </div>
        </div>
    )
}

export default User
