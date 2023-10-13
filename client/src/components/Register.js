import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { clearError, register } from '../app/userSlice'
import { verifyEmail, verifyPass } from '../utils/email_pass_verify'
import { toastOptions } from '../utils/constants';
import Loader from './Loader';

const Register = () => {
  const [inputdata, setInput] = useState({ name: "", phone: "", email: "", password: "" })
  const [errordata, setError] = useState({ email: "", password: "", other: "" })

  const { isLoading, isAuthenticated, error } = useSelector(state => state.user)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const checkEmail = verifyEmail(inputdata.email)
    const passwordCheck = verifyPass(inputdata.password)

    if (checkEmail && passwordCheck) {
      dispatch(register(inputdata))

    } else {
      //Minimum eight characters, at least one letter and one number:
      if (!passwordCheck) {
        setError({ ...errordata, password: "password must contain minimum eight characters, at least one letter and one number" })
      }
      if (!checkEmail) {
        setError({ ...errordata, email: "please provide a valid email address" })
      }
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error, toastOptions);
      dispatch(clearError())
    }

    if (isAuthenticated) {
      navigate('/')
    }

  }, [dispatch, error, isAuthenticated, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    //to remove the warnings
    setError({ ...errordata, [name]: "", other: "" })

    const data = { ...inputdata, [name]: value }
    setInput(data)
  }

  return (
    <>
      {isLoading
        ? <Loader />
        : <div className='register-form'>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="inp-container">
              <input type="text" name='name' required onChange={handleChange} value={inputdata.name} />
              <label>Name</label>
              <p></p>
            </div>
            <div className="inp-container">
              <input type="text" name='phone' required onChange={handleChange} value={inputdata.phone} />
              <label>Mobile Number</label>
              <p></p>
            </div>
            <div className="inp-container">
              <input type="email" name='email' required onChange={handleChange} value={inputdata.email} />
              <label>Email</label>
              <p>{errordata.email}</p>
            </div>
            <div className="inp-container">
              <input type="password" name='password' required onChange={handleChange} value={inputdata.password} />
              <label>Password</label>
              <p>{errordata.password}</p>
            </div>
            <div className='footer flex'>
              <p>{errordata.other}</p>
              <button type='submit' className='btn'>Register</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      }
    </>
  )
}

export default Register
