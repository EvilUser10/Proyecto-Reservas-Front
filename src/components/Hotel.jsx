import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getHotel } from "../services/HotelService";
import Carousel from './Carousel';
import MapInsert from './MapInsert'

function Hotel() {
  const { city, id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await getHotel(city, id);
        setHotel(response.data); // Suponiendo que la respuesta contiene los detalles del hotel en formato JSON
      } catch (error) {
        console.error('Error fetching hotel:', error);
      }
    };

    fetchHotel();
  }, [city, id]);


  return (
    <div>
      {hotel ? (
        <div>
          <div>
            <MapInsert latitud={hotel.latitud} longitud={hotel.longitud} />
            <Carousel photos={hotel.fotos} />
            <section>
              <form method="post">

              </form>
              <button className="btn btn-success">Reserva el hotel</button>
            </section>
          </div>
          <p>Valoración del hotel: {hotel.rating}</p>

          <h2>{hotel.name}</h2>
          <h5>{hotel.address}</h5>
          <p>{hotel.description}</p>
        </div>
      ) : (
        <p>Cargando hotel...</p>
      )}
    </div>
  )
}

export default Hotel