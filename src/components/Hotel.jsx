import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getHotel } from "../services/HotelService";


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