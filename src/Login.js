import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {  
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [mailcollect, setMailcollect]= useState([])
  const [error, setError]= useState("")
  const [pwerror, setPwerror]= useState("")
  let navigate= useNavigate()
  
  function validatefeilds(e){    
    e.preventDefault() 
    // validating email and password with regex
    var emailregex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    var pwregex= /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})$/
    if(emailregex.test(email)== false){
      setError("Please enter valid email format")
    }
    else if(pwregex.test(password)== false){
      setError("")      
      setPwerror("Password should contain atleast 6 characters and should include uppercase, lowercase and special characters")
    }
    else{
      setError("")
      setPwerror("")    
    // handling unique email id login case
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
  }
  return (
    <div className='loginpage'>
        <input type='text' placeholder='Enter your email here' onChange={e=> setEmail(e.target.value)} ></input><br></br><br></br>
        {error? <p className='loginerrormsg'>{error}</p>:<h1></h1>}
        <input type='password' placeholder='Enter your password here' onChange={e=> setPassword(e.target.value)} ></input><br></br><br></br>
        {pwerror? <p className='loginerrormsg'>{pwerror}</p>:<h1></h1>}
        <button onClick={validatefeilds}>Submit</button>
    </div>
  )
}

export default Login