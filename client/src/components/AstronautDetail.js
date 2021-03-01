import React from 'react';
import './AstronautDetail.css';

const AstronautDetail = ({selectedAstronaut}) => {

    if(!selectedAstronaut){
        return(null)
    }

    return(
        <>
        <div className = "astronaut-details">
            <h1>{selectedAstronaut.name}</h1>
            <h2>{selectedAstronaut.status.name}</h2>
            <h2>{selectedAstronaut.date_of_birth}</h2>
            <h3>{selectedAstronaut.nationality}</h3>
            <a href={selectedAstronaut.twitter}>Twitter Account</a>
            <p>{selectedAstronaut.bio}</p>
            <img src ={selectedAstronaut.profile_image} height ="250" width="auto"/>
        </div>
        </>
    )
}

export default AstronautDetail;