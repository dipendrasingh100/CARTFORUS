import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../app/userSlice'
import { verifyEmail } from '../utils/email_pass_verify'
import { ToastContainer, toast } from 'react-toastify';

import { toastOptions } from '../utils/constants'
import Loader from './Loader'
import { clearError } from '../app/userSlice'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passRef = useRef()
  const [inputdata, setInput] = useState({ email: "", password: "" })
  const [errordata, setError] = useState({ email: "", password: "" })

  const [showToast, setShowToast] = useState(false)
  const { user, isLoading, isAuthenticated, error } = useSelector(state => state.user)

  const from = location.state?.from?.pathname || "/"

  const handleSubmit = (e) => {
    e.preventDefault()
    const checkEmail = verifyEmail(inputdata.email)

    if (checkEmail) {
      dispatch(login(inputdata))
      console.log(error);
    } else {
      setError({ ...errordata, email: "please provide a valid email address" })
    }
    
  }

  useEffect(()=>{
    if (error) {
      toast.error(error, toastOptions);
      setShowToast(true)
      // dispatch(clearError())
    }

    if (isAuthenticated) {
      navigate(from)
    }
  },[dispatch, error, from, isAuthenticated, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    //to remove the warnings
    setError({ ...errordata, [name]: "" })

    const data = { ...inputdata, [name]: value }
    setInput(data)
  }

  return (
    <>
      {isLoading
        ? <Loader />
        : <div className='login-form'>
          <form onSubmit={handleSubmit}>
            <div className="inp-container">
              <input type="email" name='email' value={inputdata.email} onChange={handleChange} ref={emailRef} required />
              <label>Email</label>
              <p>{errordata.email}</p>
            </div>
            <div className="inp-container">
              <input type="password" name='password' value={inputdata.password} onChange={handleChange} ref={passRef} required />
              <label>Password</label>
              <p>{errordata.password}</p>
            </div>
            <div className="footer flex">
              <Link to="/password/forget">Forgot Password?</Link>
              <button type="submit" className='btn'>Login</button>
            </div>
          </form>

          {showToast && <ToastContainer />}
        </div>}
    </>
  )
}

export default Login
