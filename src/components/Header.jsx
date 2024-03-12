import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar py-0 navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="./logo.jpeg"
            alt="Logo"
            width="64"
            className="d-inline-block align-text-top"
          />
        </a>
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
              <Link className="nav-link" to="/hoteles">
                Hoteles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contactar
              </Link>
            </li>
          </ul>
          <div className="align-items-center d-flex">
            <form className="d-flex" role="search">
              <Link className="btn btn-outline-success me-2" to="signin">
                Login
              </Link>
              <Link className="btn btn-outline-primary" to="register">
                Registrar
              </Link>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
