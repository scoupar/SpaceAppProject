import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './LaunchMap.css';
import { render } from 'react-dom';
import "leaflet/dist/leaflet.css"
import Rocket from './Rocket.png';
import {Icon} from 'leaflet'

const LaunchMap = () => {

    
    return(
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
            </MapContainer>
        </div>
    )
    

}

export default LaunchMap; 
