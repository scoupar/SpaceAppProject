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
        <div className = "astronaut-dropdown" onChange = {onAstronautSelect}>
            <select>
                {astronautListItems}
            </select>

        </div> 
        </div>
        
    )
}

export default AstronautList;