import React from "react";

import "../styles/hero.css";
import Carousel from "./Carousel";

function Hero() {
  const fotos = [
    "https://casadelpoeta.es/wp-content/uploads/2019/09/Hoteles-con-encanto-en-Espa%C3%B1a.jpg",
    "https://www.yourhouseafricamar.com/wp-content/uploads/sites/2218/nggallery/content-pics//homeslide2-1900x900.jpg",
    "https://cdn2.paraty.es/best-corporate/images/a7a21540d610771",
  ];


  return (
    <Carousel photos={fotos} estilo="hero-container" carouselContent={true}/>
  );
}

export default Hero;
