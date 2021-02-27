import React from 'react';

const PlanetList = ({allPlanets}) => {

    const planetListItems = allPlanets.map((planet, index) =>{
        return (
            <li key={planet.index}><img src ={planet.url}/></li>
    )})


    return(
    <>
    <ul>
        {planetListItems}
    </ul>
    </>

    )}

export default PlanetList;