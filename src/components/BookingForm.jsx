import React from 'react';
import { useState } from "react";

function BookingForm() {
    
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");

  const handleFechaEntradaChange = (event) => {
    setFechaEntrada(event.target.value);
  };

  const handleFechaSalidaChange = (event) => {
    setFechaSalida(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Fecha de entrada:", fechaEntrada);
    console.log("Fecha de salida:", fechaSalida);
  };

  return (
    <div className="carousel-caption">
              <div className="hero-content">
                <h1>Encuentra tu hotel perfecto</h1>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" type="date"
                      value={fechaEntrada}
                      onChange={handleFechaEntradaChange}
                       required />
                        <span className="form-label">Fecha de entrada</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" type="date"
                      value={fechaSalida}
                      onChange={handleFechaSalidaChange}
                       required />
                        <span className="form-label"> Fecha de salida</span>
                      </div>
                    </div>
                  </div>
                  <a type="submit" className="btn btn-primary" href={`/hotels/`}> 
                    Reservar
                  </a>
                  
                </form>
              </div>
            </div>
  )
}

export default BookingForm