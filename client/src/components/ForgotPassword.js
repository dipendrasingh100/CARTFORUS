import React, { useEffect, useState } from 'react'
import { verifyEmail } from '../utils/email_pass_verify'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, forgotPassword, clearMessage } from '../app/forgotPasswordSlice'
import { ToastContainer, toast } from 'react-toastify'
import { toastOptions } from '../utils/constants'
import "../css/forget_password.css"

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [err, setErr] = useState("")
    const dispatch = useDispatch()

    const { isLoading, message, error } = useSelector(state => state.forgotPassword)

    const handleChange = (e) => {
        const { value } = e.target
        setEmail(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const checkEmail = verifyEmail(email)
        if (checkEmail) {
            dispatch(forgotPassword(email))
            setEmail("")
            setErr("")
        } else {
            setErr("Please Enter a valid Email")
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(error, toastOptions)
            dispatch(clearError())
        }
        if(message){
            toast.success(message, toastOptions)
            dispatch(clearMessage())
        }
    },[dispatch, error, message])

    return (
        <>
            {isLoading ? <Loader /> : <div className='flex center h-100'>
                <div className="container email">
                    <div className="header center ft-2">Forgot Password</div>
                    <form onSubmit={handleSubmit}>
                        <label>Enter your registered email</label>
                        <div className="inp-container">
                            <input type="email" name="email" required onChange={handleChange} value={email} />
                            <label>Email</label>
                        </div>
                        <div className="footer flex">
                            <p>{err}</p>
                            <button type="submit" className='btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>}
        </>
    )
}

export default ForgotPassword
