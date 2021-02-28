import React from 'react';

const AstronautList = ({allAstronauts, onAstronautSelect}) => {


    
    const astronautListItems = allAstronauts.map((astronaut, index) => {
        return(
            <option value ={index} key = {index}>{astronaut.name}</option>
        )
    })

    return(
        <>
        <div className = "astronaut-dropdown" onChange = {onAstronautSelect}>
            <select>
                {astronautListItems}
            </select>

        </div> 
        </>
        
    )
}

export default AstronautList;