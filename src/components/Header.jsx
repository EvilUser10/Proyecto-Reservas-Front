import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import "../styles/header.css";

function Header() {
  return (
    <nav className="navbar py-0 navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="64"
            className="d-inline-block align-text-top logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-items-stretch"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-5 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotels">
                Hoteles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
          <div className="align-items-center d-flex">
              <Link className="btn btn-outline-success me-2" to="login">
                Iniciar Sesion
              </Link>
              <Link className="btn btn-outline-primary" to="register">
                Registrarse
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
