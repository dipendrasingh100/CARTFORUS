import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { logout } from '../app/userSlice'
import NotFound from '../pages/NotFound'
import Register from './Register'
import Login from "./Login"
import validateToken from '../utils/decodeToken'
import "../css/auth.css"
import MetaData from './MetaData'
import { logout } from '../app/userSlice'


const AuthLandingPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { auth } = useParams()
    const [status, setStatus] = useState(true)

    useEffect(() => {
        const { loggedin, } = validateToken()

        if (auth === 'logout') {
            localStorage.removeItem('token');
            dispatch(logout())
            // navigate('/')
        } else if (loggedin === 1) {
            navigate('/');
        } else {
            setStatus(auth === 'login');
        }
    }, [auth, navigate, dispatch]);

    if (!auth || (auth !== "login" && auth !== "signup" && auth !== "logout")) {
        return <NotFound />
    }

    return (
        <div className="main-container flex center h-100">
            <MetaData title='Authentication || CARTFORUS' />

            <div className="m-container">
                <div className='banner'></div>
                <div >
                    <div className="header">
                        <div className={`login ${status ? "wh" : ""}`} onClick={() => navigate("/account/login")}>
                            Login
                        </div>
                        <div className={`register ${status ? "" : "wh"}`} onClick={() => navigate("/account/signup")}>
                            Register
                        </div>
                    </div>
                    {
                        status ?
                            <Login /> :
                            <Register />
                    }
                </div>
            </div>
        </div>
    )
}

export default AuthLandingPage
