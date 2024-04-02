import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getHotel } from "../services/HotelService";
import Carousel from './Carousel';
import MapInsert from './MapInsert'
import Booking from './Booking';
import Rooms from './Rooms';

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
    <>
      <div>
        {hotel ? (
          <>
          <div className='container-fluid pt-3'>
            <h2>{hotel.name}</h2>
            <div className="row">
              <section className='col-xxl-6'>
                <Carousel photos={hotel.fotos} />
              </section>
              <section className='col-xxl-6 pl-3'>
                <MapInsert latitud={hotel.latitud} longitud={hotel.longitud} />
              </section>
            </div>
          </div>
          <div>
          <div className='container-fluid pt-3'>
            <div className='row'>
              <div className='col-xxl-12'>
                <section className=''>
                   <h5>{hotel.address}</h5>
                  <div className='d-flex justify-content-center'>
                    <p className='mw-420px'>{hotel.description}</p>
                  </div>
                </section>
              </div>
              <div>
                <Rooms id={hotel.id}/>
              </div>
            </div>
          </div>
        </div>
        </>
        ) : (
          <p>Cargando hotel...</p>
        )}
      </div>
    </>
  )
}

export default Hotel