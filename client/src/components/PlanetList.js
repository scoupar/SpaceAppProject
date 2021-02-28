import React from 'react';
import PlanetDetail from './PlanetDetail'

const PlanetList = ({allPlanets, selectedPlanet, onPlanetSelect, createPlanet, deletePlanet}) => {

    

    const planetListItems = allPlanets.map((planet, index) =>{
        return (
            <>
            <li onMouseMove = {()=> {onPlanetSelect(planet)}} key={index}><img className = "image" src ={planet.url} height = "250" width = "auto"/></li>
        
            </>
    )})


    return(
    <>
    <ul className = "planet-list">
        {planetListItems}
    </ul>
    </>

    )}

export default PlanetList;