import React, { useState, useEffect } from 'react'
import Register from './Register'
import Login from "./Login"
import "../css/auth.css"
import { useNavigate, useParams } from 'react-router-dom'
import NotFound from '../pages/NotFound'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import host from './host'


const AuthLandingPage = () => {
    const [status, setStatus] = useState(true)

    // const navigate = useNavigate()
    const { auth } = useParams()

    useEffect(() => {
        if (auth === "login") {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }, [auth]);
    
    if (!auth || (auth !== "login" && auth !== "signup")) {
        return <NotFound />
    }

    // useEffect(() => {
    //     const token = localStorage.getItem("token")

    //     const checkToken = async () => {
    //         try {
    //             const res = await axios.get(`${host}/dashboard`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             })
    //             if (res.status === 200) {
    //                 navigate("/dashboard")
    //             }
    //         } catch (err) {
    //             console.error(err.response.data.message);
    //         }
    //     }
    //     if (token) {
    //         checkToken()
    //     }
    // }, [navigate])

    return (
        <div className="main-container flex center h-100">
            <div className="m-container">
                <div className='banner'></div>
                <div >
                    <div className="header">
                        <div className={`login ${status ? "wh" : ""}`} onClick={() => setStatus(true)}>
                            Login
                        </div>
                        <div className={`register ${status ? "" : "wh"}`} onClick={() => setStatus(false)}>
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
