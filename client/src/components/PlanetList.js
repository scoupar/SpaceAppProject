import React from 'react';
import PlanetDetail from './PlanetDetail'

const PlanetList = ({allPlanets, selectedPlanet, onPlanetSelect, createPlanet}) => {

    const planetListItems = allPlanets.map((planet, index) =>{
        return (
            <li onMouseMove = {()=> {onPlanetSelect(planet)}} key={planet.index}><img src ={planet.url} height = "250" width = "250"/></li>
    )})


    return(
    <>
    <ul className = "planet-list">
        {planetListItems}
    </ul>
    </>

    )}

export default PlanetList;