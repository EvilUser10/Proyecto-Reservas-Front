import React from 'react'
import { Map, Marker } from 'pigeon-maps';

function MapInsert({ latitud, longitud }) {
  return (
    <section>
      <Map height={300} defaultCenter={[latitud, longitud]} defaultZoom={15}>
        <Marker width={50} anchor={[latitud, longitud]} />
      </Map>
    </section>
  )
}

export default MapInsert;