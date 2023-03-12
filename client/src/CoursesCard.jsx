import React from "react"
import "./courses.css"
// import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src="" alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>fsdhsdfhj</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src="" alt='' />
                          </div>
                          <div className='para'>
                            <h4>sdhjfshfb</h4>
                          </div>
                        </div>
                        <span>dfsjhsdjhfs</span>
                      </>
                    
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                 dfjskjdfs
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          
        </div>
      </section>
    </>
  )
}

export default CoursesCard
