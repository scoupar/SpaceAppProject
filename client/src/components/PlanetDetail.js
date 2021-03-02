import React from "react";
// import './PlanetDetail.css';
import {Animated} from "react-animated-css";

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
                <div className="overlay">
                    <div className="planet-detail">
                        <h2>{selectedPlanet.planetName}</h2>
                        <ul> 
                            <li>Diameter: {selectedPlanet.diameter} </li>
                            <li>Mass (relative to Earth): {selectedPlanet.mass} </li>
                            <li>Number of Moons: {selectedPlanet.moons} </li>
                            <li>Does it have rings?: {selectedPlanet.rings} </li>
                            <li>Type of planet: {selectedPlanet.type} </li>
                            <li>Orbit period (relative to Earth): {selectedPlanet.orbitPeriod} </li>
                            <button type="button" className="delete-button" onClick={handleDeleteClick}>Delete Planet</button>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </Animated>
    </>
    
    )

}




export default PlanetDetail;


