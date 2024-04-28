import React, { useEffect, useState } from "react";
import Card from "./Card";
import Browser from "./Browser";
import "../styles/hotels.css";
import { listHotels, listHotelsByInput } from "../services/HotelService";

function Hotels({showSearchInput = true, title = "Tus hoteles favoritos, al alcance de tu mano"}) {
  const [hotels, setHotels] = useState([]);

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

  const handleSearch = async (searchValue) => {
    try {
      const response = await listHotelsByInput(searchValue);
      setHotels(response.data._embedded.hotelList);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };



  return (
    <>
      {showSearchInput && (
              <Browser onSearch={handleSearch} />
      )}
      <div className="container-fluid px-xl-5 our-hotels">
        <div className="container py-3 ">
          <h2 className="py-4 titlePage">{title}</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {hotels.map((hotel) => (
              <Card
                key={hotel.id}
                hotel={hotel}
              />
            ))}
          </div>
        </div>
        
      </div>
    </>
  );

}

export default Hotels;
