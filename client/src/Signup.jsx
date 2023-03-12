import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Register() {
  const [credentials,setcredentials] = useState({name:"",email:"",password:""})

  const navigate = useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password })
    });
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials")
        }

        if(json.success){
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
          {/* <FaUser />  */}
          Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form1'>
        <form onSubmit={handleSubmit}>
          <div className='form1-group'>
            <input
              type='text'
              className='form1-control'
              id='name'
              name='name'
              value={credentials.name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form1-group'>
            <input
              type='email'
              className='form1-control'
              id='email'
              name='email'
              value={credentials.email}
              placeholder='Enter your email'
              onChange={onChange}
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
            <Link to='/logins' className='btn1 btn1-block'>Login</Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register