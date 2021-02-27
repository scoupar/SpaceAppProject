import React, {useState, useEffect} from 'react';
import Home from '../components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import PlanetList from '../components/PlanetList';
import PlanetService from '../services/PlanetService';
import PlanetDetail from '../components/PlanetDetail';


const AppContainer = () => {

    const [picture, setPicture] = useState([]);
    const [allPlanets, setAllPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null)

    useEffect(() => {
        PlanetService.getPlanets()
        .then(allPlanets => setAllPlanets(allPlanets))
    }, [])

    const handleSelectedPlanet = (selectedPlanet) => {  
        setSelectedPlanet(selectedPlanet)
    }

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
        <Router>
        <>
        <NavBar/>
    
        <h1>Hello Space!</h1>
        <Route exact path = "/" render = {() =>
            <Home picture={picture} />
        }/>
        <Route exact path = "/planets" render = {() =>
        <>
        <PlanetList allPlanets={allPlanets} onPlanetSelect = {handleSelectedPlanet}/>
        <PlanetDetail selectedPlanet = {selectedPlanet}/>
        </>
        }/>

        </>
        </Router>
    )
}
export default AppContainer;