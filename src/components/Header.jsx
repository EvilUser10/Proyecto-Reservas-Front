import React from "react";
import "../styles/header.css";

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
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Hoteles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Nosotros
              </a>
            </li>
          </ul>
          <div className="align-items-center d-flex">
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success me-2" type="submit">
                Login
              </button>
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
