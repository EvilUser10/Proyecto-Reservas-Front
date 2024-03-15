import React from 'react'
import { Map, Marker } from 'pigeon-maps';
import { auto } from '@popperjs/core';

function MapInsert({ latitud, longitud}) {
  return (
    <>
      <Map height={500} defaultCenter={[latitud, longitud]} defaultZoom={15}>
        <Marker width={50} anchor={[latitud, longitud]} />
      </Map>
    </>
  )
}

export default MapInsert;