import React from 'react'
import '../styles/About.css'

function LeftCard({ title, information, img }) {
  return (
    <>
      <div className="row align-items-center mb-4 px-4">
        <div className="col-lg-5 px-5 mx-auto"><img src={img} alt="" className="img-fluid mb-4 mb-lg-0" /></div>
        <div className="col-lg-6 align-items-center"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
          <h2 className="font-weight-light">{title}</h2>
          <section className='d-flex flex-column justify-content-center align-items-center'>
            <p className="font-italic text-muted mb-4 mw-480px">{information}</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
          </section>
        </div>
      </div>
    </>
  )
}

export default LeftCard