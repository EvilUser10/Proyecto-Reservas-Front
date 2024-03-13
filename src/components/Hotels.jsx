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
    <div className="container-fluid my-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {hotels.map((hotel) => (
        
        <Card 
        key={hotel.id}
        hotel={hotel}
        />
      ))}
    </div>
    </div>
    
  );
}

export default Hotels;
