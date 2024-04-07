import React from "react";

import "../styles/hero.css";
import Carousel from "./Carousel";

function Hero() {
  const fotos = [
    "https://casadelpoeta.es/wp-content/uploads/2019/09/Hoteles-con-encanto-en-Espa%C3%B1a.jpg",
    "https://www.hotelescenter.es/wp-content/blogs.dir/1601/files/home//02_corporativa_home_corporativa_02_granada.jpg",
    "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/11/08/hotel-atlantis-the-palm-dubai.jpeg",
  ];


  return (
    <Carousel photos={fotos} estilo="hero-container" carouselContent={true}/>
  );
}

export default Hero;
