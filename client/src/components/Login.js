import React, { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../app/userSlice'
import { verifyEmail } from '../utils/email_pass_verify'
import validateToken from '../utils/decodeToken'
import server from '../host'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passRef = useRef()
  const [inputdata, setInput] = useState({ email: "", password: "" })
  const [errordata, setError] = useState({ email: "", password: "" })

  const from = location.state?.from?.pathname || "/"

  const handleSubmit = async (e) => {
    e.preventDefault()
    const checkEmail = verifyEmail(inputdata.email)

    if (checkEmail) {
      try {
        const { data } = await server.post('/api/login', inputdata, {
          headers: { "Content-Type": "application/json", }
        })
        localStorage.setItem("token", data.token)
        const decodePayload = validateToken()

        dispatch(login(decodePayload.username))
        //can set user details in redux state
        navigate(from)

      } catch (err) {
        // You can still access error responses if available
        if (err.response) {
          switch (err.response.status) {
            case 401:
              passRef.current.focus()
              setError({ ...errordata, password: err.response.data.message })
              break;
            case 404:
              emailRef.current.focus()
              setError({
                ...errordata, email: err.response.data.message
              })
              break;
            default:
              console.log("Error Response Data:", err.response.data.message);
              break;
          }
        }
      }
    } else {
      setError({ ...errordata, email: "please provide a valid email address" })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    //to remove the warnings
    setError({ ...errordata, [name]: "" })

    const data = { ...inputdata, [name]: value }
    setInput(data)
  }

  return (
    <div className='login-form'>
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
          <Link to="/forgot_password">Forgot Password</Link>
          <button type="submit" className='btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
