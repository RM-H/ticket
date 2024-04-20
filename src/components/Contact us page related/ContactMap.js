import React, { useRef} from 'react';

import { MapContainer, TileLayer,Popup,Marker } from 'react-leaflet'
import {useSelector} from "react-redux";
import {infoselector} from "../../Slices/ticketslice";



const position = [37.5244, 45.0552];

const ContactMap = () => {
    const dataneeded = useSelector(infoselector)
    const status = useSelector((state) => (state.ticket.status))
    const mapRef = useRef();

    let data

    if (status==='done') {
        data =[Number(dataneeded.lat) , Number(dataneeded.lng)]


    } else {
        data = [37.5244, 49.0552];
    }


  return (
      <>

          <div className='column is-12 my-3 ' style={{height:'16.18rem'}}>




          <MapContainer ref={mapRef} className='cardboxborder' center={position} zoom={11.6} scrollWheelZoom={false} style={{height:'100%' , borderRadius:'0.9rem'}}>
              <TileLayer

                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={data} >
                  <Popup className='pinar'>
                      {data}
                  </Popup>
              </Marker>

          </MapContainer>
          </div>




      </>


  )
}
export default ContactMap;