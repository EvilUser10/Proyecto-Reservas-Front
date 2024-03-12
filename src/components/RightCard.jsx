import React from 'react'
import '../styles/About.css'

function RightCard({ title, information, img }) {
  return (
    <>
      <div className="row align-items-center mb-5 px-4">
        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h2 className="font-weight-light">{title}</h2>
          <section className='d-flex flex-column justify-content-center align-items-center'>
            <p className="font-italic text-muted mb-4 mw-480px">
              {information}
            </p>
          </section>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={img} alt="" className="img-fluid mb-4 mb-lg-0" /></div>
      </div>
    </>
  )
}

export default RightCard