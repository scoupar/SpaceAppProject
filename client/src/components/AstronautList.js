import React from 'react';
import './AstronautList.css';

const AstronautList = ({allAstronauts, onAstronautSelect}) => {


    
    const astronautListItems = allAstronauts.map((astronaut, index) => {
        return(
            <option value ={index} key = {index}>{astronaut.name}</option>
        )
    })

    return(
        
        <div className = "container">
        <h1><span>Astronauts</span></h1>
        <h2><span>Select an astronaut from the list below to find out more about them!</span></h2>
        <div className = "astronaut-dropdown" onChange = {onAstronautSelect}>
            <select defaultValue = "default">
            <option disabled value="default">Choose an astronaut...</option>
                {astronautListItems}
            </select>

        </div> 
        </div>
        
    )
}

export default AstronautList;