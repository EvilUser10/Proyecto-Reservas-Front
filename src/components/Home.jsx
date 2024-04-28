import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import { listHotels } from "../services/HotelService";
import Hero from "./Hero.jsx";
import Hotels from "./Hotels.jsx";
import RightCard from "./RightCard.jsx";

function Inicio() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await listHotels();
        setHotels(response.data._embedded.hotelList);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <Hero />
        <RightCard
          title={"Sobre Nosotros"}
          information={
            "En [Nombre de la Empresa], nos enorgullece ofrecer una experiencia única y memorable para todos nuestros huéspedes. Nuestra empresa se dedica a proporcionar servicios de alojamiento excepcionales, combinando elegancia, comodidad y hospitalidad para satisfacer las necesidades de cada uno de nuestros clientes."
          }
          img={
            "https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/ueber-uns-t.jpg"
          }
        />

        <Hotels showSearchInput={false} title="Nuestros hoteles" />
      </div>
    </>
  );
}

export default Inicio;
