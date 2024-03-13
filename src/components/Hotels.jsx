import React, { useEffect, useState } from "react";
import Card from "./Card";
import { listHotels, listHotelsByInput } from "../services/HotelService";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await listHotels();
        setHotels(response.data._embedded.hotelList);
        console.log(response.data._embedded.hotelList);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' || event.target.id === 'searchButton') {
      event.preventDefault();
      try {
        const response = await listHotelsByInput(inputValue);
        setHotels(response.data._embedded.hotelList);
        console.log(response.data._embedded.hotelList);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    }
  };

  return (
    <>
      <div className="container mw-650px input-group my-4">
        <input type="search" className="form-control rounded" placeholder="Encuentra tus hoteles favoritos" aria-label="Search"
          aria-describedby="search-addon"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown} />
        <button id="searchButton" type="button" className="btn btn-outline-primary" data-mdb-ripple-init>Buscar</button>
      </div>
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
    </>
  );

}

export default Hotels;
