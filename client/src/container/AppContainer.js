import React, {useState, useEffect, Component} from 'react';
import { render } from 'react-dom';
import Home from '../components/Home';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from '../components/NavBar';
import PlanetList from '../components/PlanetList';
import PlanetService from '../services/PlanetService';
import PlanetDetail from '../components/PlanetDetail';
import PlanetForm from '../components/PlanetForm';
import ErrorPage from '../components/ErrorPage';
import Quiz from '../components/Quiz';
import Interact from '../components/Interact';
import LaunchList from '../components/LaunchList';
import LaunchDetail from '../components/LaunchDetail';
import LaunchMap from '../components/LaunchMap';
import AstronautList from '../components/AstronautList';
import AstronautDetail from '../components/AstronautDetail';
import AstronautChart from '../components/AstronautChart';
import '../components/AstronautList.css';



const AppContainer = () => {

    const [picture, setPicture] = useState([]);
    const [allPlanets, setAllPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null)
    const [allLaunches, setAllLaunches] = useState([]);
    const [selectedLaunch, setSelectedLaunch] = useState(0);
    const[allAstronauts, setAllAstronauts] = useState([]);
    const [selectedAstronaut, setSelectedAstronaut] = useState(null)

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

    const getLaunches = () => {
        console.log('fetching launches...')
        // fetch("https://lldev.thespacedevs.com/2.0.0/launch/?format=json&offset=1700")
        fetch("https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?format=json&mode=list")
        .then(res => res.json())
        .then(data => setAllLaunches(data.results))
    };

    const getAstronauts = () => {
        console.log('fetching astronauts...')
        fetch ("https://lldev.thespacedevs.com/2.0.0/astronaut/?limit=150&status=1")
        .then(res => res.json())
        .then(data => setAllAstronauts(data.results))
    }

    useEffect (() => {
        getPicture()
        getLaunches()
        getAstronauts()
    },[]);

    const handleSelectedLaunch = (selectedLaunch) => {
        setSelectedLaunch(selectedLaunch)
    };

    const createPlanet = (newPlanet) => {
        PlanetService.postPlanet(newPlanet)
        .then((savedPlanet) => {
            setAllPlanets([...allPlanets, savedPlanet])
        });
    };

    const deletePlanet = idToDelete => {
        PlanetService.deletePlanet(idToDelete)
        .then(() => {
            setAllPlanets(allPlanets.filter(planet => planet._id !== idToDelete))
        })
    }

    const handleSelectedAstronaut = (event) => {
        setSelectedAstronaut(allAstronauts[event.target.value]);
    }
    
    
    return(
        <Router>
        <>      
        <NavBar/> 
        
        <Route exact path = "/" render = {() =>
            <Home picture={picture} /> }/>
        <Route exact path = "/planets" render = {() =>
        <>
        <PlanetList allPlanets={allPlanets} onPlanetSelect = {handleSelectedPlanet} deletePlanet = {deletePlanet}/>
        <PlanetDetail selectedPlanet = {selectedPlanet} deletePlanet={deletePlanet}/>
        <PlanetForm createPlanet = {createPlanet}/>
        </>
        }/>
        <>
        <Route exact path ="/quiz" render = {() => 
            <Quiz /> }/>
        </>
        <Route exact path ="/interact" render = {() => <Interact /> }/>
        
        <Route exact path = "/launches" render = { () => 
        <>
        <LaunchList allLaunches={allLaunches} onLaunchSelect={handleSelectedLaunch}/>
        <LaunchDetail selectedLaunch={selectedLaunch} />
        <LaunchMap />
        </>
        }/>
        <Route exact path = "/astronauts" render ={() =>
        <>
        <div className="astronaut-container">
        <AstronautList allAstronauts = {allAstronauts} onAstronautSelect = {handleSelectedAstronaut}/>
        <AstronautDetail selectedAstronaut = {selectedAstronaut}/>
        <AstronautChart  allAstronauts = {allAstronauts}/>
        </div>
        </>
        }/>
        
        </>
        
        </Router>
    )
}
export default AppContainer;