import React from 'react';

const AstronautDetail = ({selectedAstronaut}) => {

    if(!selectedAstronaut){
        return(null)
    }

    return(
        <>
        <div className = "astronaut-details">
            <h1>ASTRONAUT DETAILS</h1>
            <h1>{selectedAstronaut.name}</h1>
            <h2>{selectedAstronaut.status.name}</h2>
            <h2>{selectedAstronaut.date_of_birth}</h2>
            <h3>{selectedAstronaut.nationality}</h3>
            <p>{selectedAstronaut.bio}</p>
            <img src ={selectedAstronaut.profile_image} height ="250" width="auto"/>
        </div>
        </>
    )
}

export default AstronautDetail;