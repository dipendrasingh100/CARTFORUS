import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../app/userSlice'
import { verifyEmail, verifyPass } from '../utils/email_pass_verify'
import server from '../host'
import validateToken from '../utils/decodeToken'

const Register = () => {
  const [inputdata, setInput] = useState({ name: "", phone: "", email: "", password: "" })
  const [errordata, setError] = useState({ email: "", password: "", other: "" })
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const checkEmail = verifyEmail(inputdata.email)
    const passwordCheck = verifyPass(inputdata.password)

    if (checkEmail && passwordCheck) {
      try {
        const { data } = await server.post('/api/signup', inputdata)
        window.localStorage.setItem("token", data.token)
        // Successful response
        setInput({ name: "", phone: "", email: "", password: "" })
        const decodePayload = validateToken()

        dispatch(login(decodePayload.username))
        navigate("/")

      } catch (err) {
        if (err.response) {
          if (err.response.status === 409) {
            setError({ ...errordata, email: err.response.data.message, other: "Please Login" })
          } else {
            setError({ ...errordata, other: err.response.data.message })
          }
        }
      }
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

  const handleChange = (e) => {
    const { name, value } = e.target
    //to remove the warnings
    setError({ ...errordata, [name]: "", other: "" })

    const data = { ...inputdata, [name]: value }
    setInput(data)
  }

  return (
    <div className='register-form'>
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
    </div>
  )
}

export default Register
