import React from 'react'
import '../styles/About.css'

function LeftCard({ title, information, img }) {
  return (
    <>
      <div className="row align-items-center py-5">
        <div className="col-lg-5 px-5 mx-auto">
          <img src={img} alt="" className="img-fluid mb-4 mb-lg-0" />
          </div>
        <div className="col-lg-6 align-items-center">
          <h2 className="display-4">{title}</h2>
          <section className='d-flex flex-column justify-content-center align-items-center'>
            <p className="lead text-muted">{information}</p>
            {/* <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a> */}
          </section>
        </div>
      </div>
    </>
  )
}

export default LeftCard