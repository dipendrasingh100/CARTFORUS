import React, { useEffect, useState } from 'react'
import "../css/forget_password.css"
import { verifyPass } from '../utils/email_pass_verify'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, resetPassword } from '../app/forgotPasswordSlice'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader'
import { ToastContainer, toast } from 'react-toastify'
import { toastOptions } from '../utils/constants'


const ResetPassword = () => {
    const [pobj, setpobj] = useState({ password: "", confirmPassword: "" })
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useParams()
    const { isLoading, success, error } = useSelector(state => state.forgotPassword)

    const handleSubmit = (e) => {
        e.preventDefault()
        const passwordCheck = verifyPass(pobj.password)
        if (passwordCheck) {
            if (pobj.password === pobj.confirmPassword) {
                dispatch(resetPassword({ password: pobj.password, confirmPassword: pobj.confirmPassword, token }))
                setErr("")
                setpobj({ password: "", confirmPassword: "" })
            } else {
                setErr("New Password and Confirm password must be same")
            }
        } else {
            setErr("password must contain minimum eight characters, at least one letter and one number")
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(error, toastOptions)
            dispatch(clearError())
        }
        if (success) {
            toast.success("Password Updated Successfully", toastOptions)
            setTimeout(() => {
                navigate('/account/login')
            }, 3000)
        }
    }, [dispatch, error, success, navigate])

    const handleChange = (e) => {
        const { name, value } = e.target

        setpobj({ ...pobj, [name]: value })
    }
    return (
        <>
            {isLoading ? <Loader /> :
                <div className='flex center h-100'>
                    <div className="container email">
                        <div className="header center ft-2">Reset Password</div>
                        <form onSubmit={handleSubmit}>
                            <div className="inp-container">
                                <input type="password" name="password" required onChange={handleChange} value={pobj.password} />
                                <label>New Password</label>
                            </div>
                            <div className="inp-container">
                                <input type="password" name="confirmPassword" required onChange={handleChange} value={pobj.confirmPassword} />
                                <label>Confirm Password</label>
                            </div>
                            <div className="footer flex">
                                <p>{err}</p>
                                <button type="submit" className='btn-primary'>Update</button>
                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            }
        </>
    )
}

export default ResetPassword
