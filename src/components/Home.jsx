import React from 'react'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx';

function Inicio() {
  const room1 = 'https://source.unsplash.com/random/?hotel';
  return (
    <>
  <Navbar/>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <Card
          title="Habitacion"
          img={room1}
          description="Habitacion bonita"
        />
        <Card
          title="Habitacion"
          img={room1}
          description="Habitacion bonita"
        />
        <Card
          title="Habitacion"
          img={room1}
          description="Habitacion bonita"
        />
      </div>
    </>
  )
}

export default Inicio