import React, { useEffect, useState } from 'react'
import Card from './Card.jsx'
import { listHotels } from "../services/HotelService";
import Hero from './Hero.jsx';
import Hotels from './Hotels.jsx';

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
      <div className="container-fluid p-0">
        <Hero/>
        <Hotels  showSearchInput={false}/>
        
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