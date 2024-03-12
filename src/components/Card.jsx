import React from 'react'


function Card({ title, img, description }) {
  return (
    <div className='col' >
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Reserva</a>
        </div>
      </div>
    </div>
  )
}

export default Card