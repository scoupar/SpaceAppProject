import React from "react";

const PlanetDetail = ({selectedPlanet, deletePlanet}) => {
        
    const handleDeleteClick = () => {
        deletePlanet(selectedPlanet._id)
    }
    
    
    if (!selectedPlanet) {
        return(null)
    }

    return (
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
    
    )

}




export default PlanetDetail;


