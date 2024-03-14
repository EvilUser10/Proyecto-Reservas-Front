import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";
import RatingStars from "./RatingStars";

function Card({ hotel }) {
  const randomRoomIndex = Math.floor(Math.random() * hotel.rooms.length);
  const randomFotosIndex = Math.floor(Math.random() * hotel.fotos.length);
  const randomRoom = hotel.rooms[randomRoomIndex];
  const randomFoto = hotel.fotos[randomFotosIndex];
  return (
    <div className="col">
      <div className="card">
        <img src={randomFoto} className="card-img-top" alt={hotel.name} />
        <div className="card-body text-start">
          <div className="row">
            <div className="col-8">
              <h5 className="card-title">{hotel.name}</h5>
              <p className="card-text">{hotel.address}</p>

              <p>Price: {randomRoom.price.toFixed(2)} €</p>

              <a
                href={`hotels/${hotel.city}/${hotel.id}`}
                className="stretched-link"
              ></a>
            </div>
            <div className="col-4 text-end">
              <RatingStars rating={hotel.rating}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
