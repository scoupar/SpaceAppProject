import React from 'react';
import './AstronautDetail.css';

const AstronautDetail = ({selectedAstronaut}) => {

    if(!selectedAstronaut){
        return(null)
    }

    const checkTwitter = () => {
        if(
            selectedAstronaut.twitter === null
        ){
            return (null)
        }else{
            return (
                <a target = "_blank" href = {selectedAstronaut.twitter}>Twitter</a>
            )
        }
    }

    const checkWiki = () => {
        if(
            selectedAstronaut.wiki === null
        ){
            return (null)
        }else{
            return (
                <a target = "_blank" href = {selectedAstronaut.wiki}>Find out more at Wikipedia</a>
            )
        }
    }

    const checkInsta = () => {
        if(
            selectedAstronaut.instagram === null
        ){
            return (null)
        }else{
            return (
                <a target = "_blank" href = {selectedAstronaut.instagram}>Follow on Instagram</a>
            )
        }
    }

    return(
        <>
        <div className = "astronaut-details">
            <h1>{selectedAstronaut.name}</h1>
            <img src ={selectedAstronaut.profile_image} height ="250" width="auto"/>
            <h3>D.O.B: {selectedAstronaut.date_of_birth}</h3>
            <h3>Nationality: {selectedAstronaut.nationality}</h3>
            {checkWiki()}
            <br></br>
            {checkTwitter()}
            <br></br>
            {checkInsta()}
            <p>{selectedAstronaut.bio}</p>
            
        </div>
        </>
    )
}

export default AstronautDetail;