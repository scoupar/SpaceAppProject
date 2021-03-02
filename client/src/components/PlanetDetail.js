import React from "react";
import './PlanetDetail.css';
import {Animated} from "react-animated-css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PlanetDetail = ({selectedPlanet, deletePlanet}) => {
        
    const handleDeleteClick = () => {
        deletePlanet(selectedPlanet._id)
    }
    
    
    if (!selectedPlanet) {
        return(null)
    }

    return (
    <>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className = "container">
                    <div className="planet-detail">
                        <ul> 
                            <h2><span>{selectedPlanet.planetName}</span></h2>
                            <li><span>Diameter: {selectedPlanet.diameter}</span> </li>
                            <li><span>Mass (relative to Earth): {selectedPlanet.mass} </span></li>
                            <li><span>Number of Moons: {selectedPlanet.moons} </span></li>
                            <li><span>Does it have rings?: {selectedPlanet.rings} </span></li>
                            <li><span>Type of planet: {selectedPlanet.type}</span> </li>
                            <li><span>Orbit period (relative to Earth): {selectedPlanet.orbitPeriod}</span> </li>
                           <Popup trigger={<button className="delete-button">Delete Planet</button>} position="right center">
                               <div>Are you sure you want to delete your planet? <button type="button" className="delete-button" onClick={handleDeleteClick}>Delete Planet</button></div>
                            </Popup> 
                        </ul>
                    </div>
            </div>
        </Animated>
    </>
    
    )

}




export default PlanetDetail;


