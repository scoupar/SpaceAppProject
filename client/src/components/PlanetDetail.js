import React from "react";

const PlanetDetail = ({selectedPlanet, deletePlanet}) => {
     


    if (!selectedPlanet) {
        return(null)
    }

    const handleDeleteClick = () => {
        deletePlanet(selectedPlanet._id)
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
            <button type="button" className="delete-button" onClick={handleDeleteClick}>Delete Planet</button>
        </div>
    
    )

}




export default PlanetDetail;