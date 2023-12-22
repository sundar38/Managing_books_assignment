import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {
  const [name, setName]=useState("")
  const [email, setEmail]= useState("")
  let navigate= useNavigate()
  function validatefeilds(e){    
    e.preventDefault()
    console.log(name, email)
    navigate("/dashboard")
  }
  return (
    <div className='loginpage'>
        <input type='text' placeholder='Enter your email here' onChange={e=> setName(e.target.value)} ></input><br></br><br></br>
        <input type='password' placeholder='Enter your password here' onChange={e=> setEmail(e.target.value)} ></input><br></br><br></br>
        <button onClick={validatefeilds}>Submit</button>
    </div>
  )
}

export default Login