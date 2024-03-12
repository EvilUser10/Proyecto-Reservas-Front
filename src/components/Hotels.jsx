import React, { useEffect, useState } from "react";
import Card from "./Card";
import { listHotels } from "../services/HotelService";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    listHotels()
      .then((response) => {
        setHotels(response.data._embedded.hotelList);
        console.log(response.data._embedded.hotelList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {hotels.map((hotel) => (
        <Card 
        key={hotel.id}
        title={hotel.name}
        img = {hotel.fotos[0]}
        description={hotel.description}
        link={`${hotel.city}/${hotel.id}`}
        />
      ))}
    </div>
    </div>
    
  );
}

export default Hotels;
