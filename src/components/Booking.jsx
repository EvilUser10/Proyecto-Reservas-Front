import React, { useState } from 'react'
import App from '../App'
import { makeRegister } from '../services/BookingService'


function Booking({ id, roomId }) {
  const [arrive, setArrive] = useState('');
  const [comingOut, setcomingOut] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');


  const submitBooking = (event) => {
    event.preventDefault()
    const bookingModel = {
      startDate: arrive,
      finishDate: comingOut,
      roomId: roomId//cambiar el roomId para que sea dinamico
    }

    if (arrive.length > 0 && comingOut.length > 0) {
      const response = makeRegister(id, bookingModel);
      console.log(reponse.status)
      if (response.status == 200) {
        setBookingMessage("Se ha realizado la reserva satisfactoriamente.")
      }
      else if(response.status != 200) {
        setBookingMessage("No se ha podido realizar la reserva")
      }
    } else {
      setBookingMessage("Los datos no pueden ser vacíos.")
    }
  }

  const today = new Date().toISOString().split('T')[0];
  return (
    <>
      <form className='card'>
        {bookingMessage.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {bookingMessage}
          </div>
        )}
        <div className="row ">
          <div className="">
            <div className="form-group">
              <span className="form-label">Llegada</span>
              <input className="form-control" min={today} type="date"
                required=""
                onChange={(e) => setArrive(e.target.value)}
              />
            </div>
            <span className="in-out hidden-xs">⇌</span>
          </div>
          <div className="">
            <div className="form-group">
              <span className="form-label">Salida</span>
              <input className="form-control"
                min={today} type="date"
                required=""
                onChange={(e) => setcomingOut(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="d-grid py-2">
          <button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={submitBooking} type="submit">
            Realizar Reserva
          </button>
        </div>
      </form>
    </>
  )
}

export default Booking