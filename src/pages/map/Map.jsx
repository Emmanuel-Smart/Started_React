import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "./map.css"
import "leaflet/dist/leaflet.css"
const Map = () => {
  return (
    <div className='mapContainer'>
      <MapContainer className='map' center={[5.9597, 10.1460]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  )
}

export default Map
