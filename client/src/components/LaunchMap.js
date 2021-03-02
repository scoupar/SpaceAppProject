import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './LaunchMap.css';
import "leaflet/dist/leaflet.css"
import Rocket from './Rocket.png';
import {Icon} from 'leaflet'

const LaunchMap = () => {

    
    return(
        <>
        <h3><span>Click on a rocket on the map to see more information.</span></h3>
        <div id="mapid">
            <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-39.258663, 177.866849]} icon={new Icon({iconUrl: Rocket, iconSize: [25,41], iconAnchor: [12, 41]})}>
                <Popup>
                Onenui Station, Mahia Peninsula, New Zealand
                </Popup>
                </Marker>
                <Marker position={[51.883937, 128.334112]} icon={new Icon({iconUrl: Rocket, iconSize: [25,41], iconAnchor: [12, 41]})}>
                <Popup>
                Vostochny Cosmodrome, Siberia, Russian Federation
                </Popup>
                </Marker>
                <Marker position={[45.964585, 63.305243]} icon={new Icon({iconUrl: Rocket, iconSize: [25,41], iconAnchor: [12, 41]})}>
                <Popup>
                Baikonur Cosmodrome, Republic of Kazakhstan
                </Popup>
                </Marker>
                <Marker position={[13.733056, 80.204722]} icon={new Icon({iconUrl: Rocket, iconSize: [25,41], iconAnchor: [12, 41]})}>
                <Popup>
                Sriharikota, Republic of India
                </Popup>
                </Marker>
                <Marker position={[34.75821, -120.516395]} icon={new Icon({iconUrl: Rocket, iconSize: [25,41], iconAnchor: [12, 41]})}>
                <Popup>
                Vandenberg AFB, CA, USA
                </Popup>
                </Marker>
                <Marker position={[28.572872, -80.648981]} icon={new Icon({iconUrl: Rocket, iconSize: [25,41], iconAnchor: [12, 41]})}>
                <Popup>
                Kennedy Space Center, FL, USA
                </Popup>
                </Marker>
                <Marker position={[28.392218, -80.607713]} icon={new Icon({iconUrl: Rocket, iconSize: [25,41], iconAnchor: [12, 41]})}>
                <Popup>
                Cape Canaveral, FL, USA
                </Popup>
                </Marker>
                <Marker position={[25.997316, -97.157299]} icon={new Icon({iconUrl: Rocket, iconSize: [25,41], iconAnchor: [12, 41]})}>
                <Popup>
                SpaceX Space Launch Facility, TX, USA
                </Popup>
                </Marker>
            </MapContainer>
        </div>
        </>
    )
    

}

export default LaunchMap; 
