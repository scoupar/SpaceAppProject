import React from 'react';
import PlanetDetail from './PlanetDetail'
import {Animated} from "react-animated-css";
import './PlanetDetail.css';


const PlanetList = ({allPlanets, selectedPlanet, onPlanetSelect, createPlanet, deletePlanet}) => {

    

    const planetListItems = allPlanets.map((planet, index) =>{
        return (
            <>
            
            <li onMouseMove = {()=> {onPlanetSelect(planet)}} key={index}><img className = "image" src ={planet.url} height = "250" width = "auto"/></li>
           
            </>
    )})


    return(
    <div className="planets-title">
        <h1><span>The Planets</span></h1>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div>
            <ul className = "planet-list">
                {planetListItems}
            </ul>
        </div>
        </Animated>
    
    </div>

    )}

export default PlanetList;