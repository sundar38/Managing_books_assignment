import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {  
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [mailcollect, setMailcollect]= useState([])
  let navigate= useNavigate()
  
  function validatefeilds(e){    
    e.preventDefault()  
    let matchmail= mailcollect.filter(eachmail=> eachmail==email)    
      if(matchmail==""){   
        mailcollect.push(email)
        setMailcollect(mailcollect)
        navigate("/dashboard")
      }
      else{
        alert("Email already exists. Try with different email");
      }    
  }
  return (
    <div className='loginpage'>
        <input type='text' placeholder='Enter your email here' onChange={e=> setEmail(e.target.value)} ></input><br></br><br></br>
        <input type='password' placeholder='Enter your password here' onChange={e=> setPassword(e.target.value)} ></input><br></br><br></br>
        <button onClick={validatefeilds}>Submit</button>
    </div>
  )
}

export default Login