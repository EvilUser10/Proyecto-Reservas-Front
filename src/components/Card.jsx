import React from 'react'
import '../styles/Card.css';


function Card({ title, img, description }) {
  return (
    <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
  )
}

export default Card