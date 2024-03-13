import React from 'react'
import '../styles/Carousel.css'

function Carousel({ photos }) {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" style={{width:'800px', maxWidth: '800px', maxHeight: '500px', margin: '0 auto' }}>
        <div className="carousel-inner">
          {photos.map((photo, index) => (
            index === 0 ? (
              <div key={index} className="carousel-item active">
                <img src={photo} className="d-block w-100" alt={"Foto de hotel"}  style={{ maxWidth: '800px', maxHeight: '500px', margin: '0 auto' }}/>
              </div>
            ) : (<div key={index} className="carousel-item">
              <img src={photo} className="d-block w-100" alt={"Foto de hotel"} style={{ maxWidth: '800px', maxHeight: '500px', margin: '0 auto' }}/>
            </div>)
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel