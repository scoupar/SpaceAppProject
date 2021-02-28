import React, {useState, useEffect} from 'react';
import Home from '../components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import PlanetList from '../components/PlanetList';
import PlanetService from '../services/PlanetService';
import PlanetDetail from '../components/PlanetDetail';
import PlanetForm from '../components/PlanetForm';
import ErrorPage from '../components/ErrorPage';


const AppContainer = () => {

    const [picture, setPicture] = useState([]);
    const [allPlanets, setAllPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null)
    const [allLaunches, setAllLaunches] = useState([]);
    const[allAstronauts, setAllAstronauts] = useState([]);

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
        fetch("https://ll.thespacedevs.com/2.0.0/launch/?format=json")
        .then(res => res.json())
        .then(data => setAllLaunches(data))
    };

    const getAstronauts = () => {
        console.log('fetching astronauts...')
        fetch ("https://ll.thespacedevs.com/2.0.0/astronaut/?format=json")
        .then(res => res.json())
        .then(data => setAllAstronauts(data))
    }

    useEffect (() => {
        getPicture()
        getLaunches()
        getAstronauts()
    },[]);

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

    
    return(
        <Router>
        <>      
        <h1>Hello Space!</h1>
        <NavBar/>
        <Route exact path = "/" render = {() =>
            <Home picture={picture} />
        }/>
        <Route exact path = "/planets" render = {() =>
        <>
        <PlanetList allPlanets={allPlanets} onPlanetSelect = {handleSelectedPlanet} deletePlanet = {deletePlanet}/>
        <PlanetDetail selectedPlanet = {selectedPlanet} deletePlanet={deletePlanet}/>
        <PlanetForm createPlanet = {createPlanet}/>
        </>
        }/>
        <Route exact path = "/astronauts" render ={() =>
        <>
        <AstronautList />
        <AstronautDetail />
        </>
        }/>

        </>
        </Router>
    )
}
export default AppContainer;