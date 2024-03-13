import React, { useEffect, useState } from "react";
import Card from "./Card";
import Browser from "./Browser";
import { listHotels, listHotelsByInput } from "../services/HotelService";

function Hotels() {
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
      <Browser onSearch={handleSearch} />
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
