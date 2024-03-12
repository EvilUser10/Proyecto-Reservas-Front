import React from 'react'
import Card from './Card.jsx'
import Hotels from './Hotels.jsx'

function Inicio() {
  return (
    <>
      <div className='row row-cols-1 row-cols-md-3 g-4 px-4'>
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