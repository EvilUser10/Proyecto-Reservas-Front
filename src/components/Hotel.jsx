import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


function Hotel(city, id) {
  const { city, id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await getHotel(hotelId);
        setHotel(response.data); 
      } catch (error) {
        console.error('Error fetching hotel:', error);
      }
    };

    fetchHotel();
  }, [hotelId]);
  return (
    <div>
    {hotel ? (
      <div>
        <h2>{hotel.name}</h2>
        <p>{hotel.description}</p>
       
      </div>
    ) : (
      <p>Cargando hotel...</p>
    )}
  </div>
  )
}

export default Hotel