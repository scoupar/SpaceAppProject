import React from 'react';
import PlanetDetail from './PlanetDetail'

const PlanetList = ({allPlanets, selectedPlanet, onPlanetSelect}) => {

    const planetListItems = allPlanets.map((planet, index) =>{
        return (
            <li onMouseMove = {()=> {onPlanetSelect(planet)}} key={planet.index}><img src ={planet.url} height = "300" width = "300"/></li>
    )})


    return(
    <>
    <ul className = "planet-list">
        {planetListItems}
    </ul>
    </>

    )}

export default PlanetList;