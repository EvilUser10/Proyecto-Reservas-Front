import React, { useEffect, useState } from 'react'
import Card from './Card.jsx'
import { listHotels } from "../services/HotelService";

function Inicio() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await listHotels();
        setHotels(response.data._embedded.hotelList);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <>
      <div className="container-fluid my-2">
        <h1>Tus hoteles favoritos, al alcance de tu mano</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {hotels.map((hotel) => (
            <Card
              key={hotel.id}
              hotel={hotel}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Inicio