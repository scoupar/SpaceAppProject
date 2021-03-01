import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './LaunchMap.css';
import { render } from 'react-dom';

const LaunchMap = () => {

    // class LaunchMap extends Component {

    //     componentDidMount(){
    //         const mymap = L.map('mapid').setView([51.505, -0.09], 13);
    //     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //         maxZoom: 18,
    //         id: 'mapbox/streets-v11',
    //         tileSize: 512,
    //         zoomOffset: -1,
    //         accessToken: 'pk.eyJ1IjoiYWMyMzIiLCJhIjoiY2tscWYzZmdkMWJ5ZjJ3cXI1bXF0cHJzaCJ9.qm_MAS4aD7mhOzDVwP32Ig'
    //     }).addTo(mymap);
    //     }
    // }

    //     render(); {
    //         return(
    //             <div id="mapid"/>
    //         );
    //     }


    // const container = document.getElementById('mapid')
    // if(container) {
    //     const mymap = L.map('mapid').setView([51.505, -0.09], 13);
    //     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //         maxZoom: 18,
    //         id: 'mapbox/streets-v11',
    //         tileSize: 512,
    //         zoomOffset: -1,
    //         accessToken: 'pk.eyJ1IjoiYWMyMzIiLCJhIjoiY2tscWYzZmdkMWJ5ZjJ3cXI1bXF0cHJzaCJ9.qm_MAS4aD7mhOzDVwP32Ig'
    //     }).addTo(mymap);
    // }
    return(
        <div id="mapid">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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

export default LaunchMap; 
