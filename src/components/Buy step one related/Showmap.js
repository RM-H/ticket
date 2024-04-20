import React, {useRef} from 'react';

import { MapContainer, TileLayer,Popup,Marker } from 'react-leaflet'


const Showmap = ({gps,place}) => {








    const mapRef = useRef();


    return (

        <>

            <MapContainer ref={mapRef}  center={gps} zoom={14} scrollWheelZoom={false} style={{height:'100%' , borderRadius:'0.9rem'}}>
                <TileLayer

                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={gps} >
                    <Popup className='pinar'>
                        {place}
                    </Popup>
                </Marker>

            </MapContainer>




        </>
    );
}
export default Showmap;