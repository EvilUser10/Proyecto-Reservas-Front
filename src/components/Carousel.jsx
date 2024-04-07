import React from "react";
import "../styles/Carousel.css";
import BookingForm from "./BookingForm";

function Carousel({ photos, estilo, carouselContent = false }) {
  //maxWidth: '800px', maxHeight: '500px', margin: '0 auto'
  //El estyle lo pasaremos como props como una clase
  //por defecto lo dejamos con un alchura de 100%
  return (
    <>
    <div id="carouselExampleControls" className={`carousel slide ${estilo}`}>
      <div className="carousel-indicators">
        {photos.map((foto, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
            aria-current={index === 0 ? "true" : "false"}
          ></button>
        ))}
      </div>
      <div className="carousel-overlay"></div>
      <div className="carousel-inner">
        {photos.map((foto, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={foto}
              className="d-block w-100"
              alt={`Hotel ${index + 1}`}
            />
            {/* mostrar contenido el carousel si lo haya */}
            {carouselContent && (
              <BookingForm />
            )}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
}

export default Carousel;
