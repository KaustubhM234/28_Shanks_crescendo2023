import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import { useState } from "react"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9834629561587!2d72.83367151482177!3d19.06446468709453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1678595998367!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const [contact, setContact] = useState({ name: "", email: "", subject: "", messagetext: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: contact.name, email: contact.email, subject: contact.subject, messagetext: contact.messagetext })
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Message not sent")
    }

  }
  const onChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value })
  }
  return (
    <>
      <Header />
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>C 18th Avenue, Mumbai Metropolitan Region, Kalyan,Maharashtra,421204</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> infoedtech@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> 34345324</p>
              </div>
            </div>

            <form action='' onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input type='text'
                  className='form1-control'
                  id='name'
                  name='name'
                  value={contact.name}
                  placeholder='Enter your name'
                  onChange={onChange} />
                <input type='email'
                  className='form1-control'
                  id='email'
                  name='email'
                  value={contact.email}
                  placeholder='Enter your email'
                  onChange={onChange} />
              </div>
              <input type='text'
                className='form1-control'
                id='subject'
                name='subject'
                value={contact.subject}
                placeholder='Enter the subject'
                onChange={onChange} />
              <input  type='text'
                className='form1-control'
                id='messagetext'
                name='messagetext'
                value={contact.messagetext}
                placeholder='Enter the message'
                onChange={onChange} />
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
