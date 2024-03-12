import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <span className="navbar-brand px-2" style={{ maxWidth: 'fit-content' }}>
          <img src={logo} alt="Hotel" style={{ width: '60px' }} />
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Inicio</Link>
            <Link className="nav-item nav-link active" to="/hotels">Hoteles</Link>
            <Link className="nav-item nav-link active" to="/about">Sobre Nosotros</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar