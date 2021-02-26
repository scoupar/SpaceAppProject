import React, {useState, useEffect} from 'react';
import Home from '../components/Home'

const AppContainer = () => {

    const [picture, setPicture] = useState([]);


    const getPicture = () => {
        console.log('fetching picture...')
        fetch("https://api.nasa.gov/planetary/apod?api_key=KGLh0sNFFtTcGpXlTvep10rRZMuzX9ywmz3SsCXw")
        .then(res => res.json())
        .then(data => setPicture(data))

    };

    useEffect (() => {
        getPicture()
    },[]);


    
    return(
        <>
        <h1>Hello Space!</h1>
        <Home picture={picture} />
        </>
    )
}
export default AppContainer;