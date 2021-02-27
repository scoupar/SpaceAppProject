import React from "react";

const PlanetDetail = ({selectedPlanet}) => {
     
    if (!selectedPlanet) {
        return(null)
    }

    return (
        <div className="planet-detail">
            <h2>{selectedPlanet.planetName}</h2>
            <ul> 
                <li>{selectedPlanet.diameter} </li>
                <li>{selectedPlanet.mass} </li>
                <li>{selectedPlanet.moons} </li>
                <li>{selectedPlanet.rings} </li>
                <li>{selectedPlanet.type} </li>
                <li>{selectedPlanet.orbitPeriod} </li>
            </ul>
        </div>
    
    )

}




export default PlanetDetail;