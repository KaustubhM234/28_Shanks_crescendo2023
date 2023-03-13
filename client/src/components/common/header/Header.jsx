import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [click, setClick] = useState(false)
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    navigate("/logins")
  }
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          {(!localStorage.getItem("authToken"))?
          <div style={{position:'inline',marginRight:'0px',padding:'0px'}}>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
          <li>
              <Link to='/logins'><h3>Login</h3></Link>
          </li>
          <li>
              <Link to='/signups'><h3>Signup</h3></Link>
          </li>
          </ul>
          </div>
          : <div className='start' onClick={handleLogout}>
            <h3>Logout</h3>
            </div>}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
