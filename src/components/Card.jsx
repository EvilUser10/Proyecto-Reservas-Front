import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Card.css';


function Card({ title, img, description, link }) {
  return (
    <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={link} className="icon-link gap-1 icon-link-hover stretched-link">
          </Link>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
  )
}

export default Card