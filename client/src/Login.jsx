import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {

  const [credentials,setcredentials] = useState({email:"",password:""})

  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/loginuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password})
    });
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials")
        }

        if(json.success){
            localStorage.setItem("authToken",json.auth);
            console.log(localStorage.getItem("authToken"));
            navigate("/")
        }
  }

  const onChange = (event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <>
      <section className='heading1'>
        <h1>
          {/* <FaSignInAlt /> */}
           Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className='form1'>
        <form onSubmit={handleSubmit}>
          <div className='form1-group'>
            <input
              type='email'
              className='form1-control'
              id='email'
              name='email'
              value={credentials.email}
              onChange={onChange}
              placeholder='Enter your email'
    
            />
          </div>
          <div className='form1-group'>
            <input
              type='password'
              className='form1-control'
              id='password'
              name='password'
              value={credentials.password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form1-group'>
            <button type='submit' className='btn1 btn1-block'>
              Submit
            </button>
            <Link to='/signups' className='btn1 btn1-block'>Signup</Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login