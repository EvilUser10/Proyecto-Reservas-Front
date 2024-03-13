import React from 'react';

const RatingStars = ({ rating }) => {
  //estrellas completas
  const fullStars = Math.floor(rating);
  //si hay una media estrella
  const hasHalfStar = rating % 1 !== 0;
  //array de estrellas completas
  const fullStarsArray = Array.from({ length: fullStars }, (_, index) => (
    <i key={index} className="bi bi-star-fill"></i>
  ));
  //  media estrella si es necesario
  const halfStar = hasHalfStar ? <i className="bi bi-star-half"></i> : null;

  return (
    <div className="rating-stars">
      {fullStarsArray}
      {halfStar}
      <span className='ms-2'>{rating}</span>
    </div>
  );
};


export default RatingStars;