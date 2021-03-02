import React, {useState} from 'react';
import './PlanetsForm.css'
import image from './image.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';




const PlanetForm = ({createPlanet}) => {
    const [planetName, setPlanetName] = useState("");
    const [diameter, setDiameter] = useState(0);
    const [mass, setMass] = useState(0);
    const [moons, setMoons] = useState(0);
    const [rings, setRings] = useState("");
    const [type, setType] = useState("");
    const [orbitPeriod, setOrbitPeriod] = useState(0);
    const [url, setUrl]  = useState("")

    const handleNameChange = event => setPlanetName(event.target.value)
    const handleDiameterChange = event => setDiameter(event.target.value)
    const handleMassChange = event => setMass(event.target.value)
    const handleMoonsChange = event => setMoons(event.target.value)
    const handleRingsChange = event => setRings(event.target.value)
    const handleTypeChange = event => setType(event.target.value)
    const handleOrbitPeriodChange = event => setOrbitPeriod(event.target.value)
    const handleUrlChange = event => setUrl(event.target.value)

    const handleSubmit = event => {
        event.preventDefault();
        const planet = {
            planetName, 
            diameter,
            mass,
            moons,
            rings,
            type,
            orbitPeriod,
            url
        } 
        createPlanet(planet);
        setPlanetName("");
        setDiameter(0);
        setMass(0);
        setMoons(0);
        setRings("");
        setType("");
        setOrbitPeriod(0);
        setUrl("");
    };

    
    

    return(
        <>
        <h3><span>Using your knowledge about our planets in the solar system, have a go at creating your very own planet. </span></h3>
        <form onSubmit = {handleSubmit}>
            <div className = "planet-form">
                <label htmlFor = "planetName">Planet Name:</label>
                <input type = "text" id = "planetName" value ={planetName} onChange = {handleNameChange} required />
                <label htmlFor = "diameter">Diameter:</label>
                <input type = "text" id = "diameter" value ={diameter} onChange = {handleDiameterChange} required />
                <label htmlFor = "mass">Mass (relative to Earth):</label>
                <input type = "text" id = "mass" value ={mass} onChange = {handleMassChange} required />
                <label htmlFor = "moons">Number of moons:</label>
                <input type = "number" id = "moons" value ={moons} onChange = {handleMoonsChange} required />
                <label htmlFor = "rings">Does it have any rings?</label>
                <select className="planet-select" id="rings" name="rings" onChange = {handleRingsChange} defaultValue = "default">
                <option disabled value ="default">Does it have any rings?</option>
                <option value = "Yes">Yes</option>
                <option value = "No">No</option>
                </select>
                <label htmlFor = "type">What type of planet is it?</label>
                <select className="planet-select" id = "type" name = "type" onChange = {handleTypeChange} defaultValue = "default">
                <option disabled value ="default">Planet Type</option>
                <option value = "Terrestrial">Terrestrial</option>
                <option value = "Ice Giant">Ice Giant</option>
                <option val = "Gas Giant">Gas Giant</option> 
                </select>
                <label htmlFor = "orbitPeriod">Orbit Period (relative to Earth):</label>
                <input type = "number" id = "orbitPeriod" value ={orbitPeriod} onChange = {handleOrbitPeriodChange} required />
                <br />
                <select className="planet-select" id = "url" name = "url" onChange = {handleUrlChange} defaultValue = "default">
                <option disabled value ="default">Choose your planet look</option>
                <option value = {image}>Option1</option>
                <option value = {image2}>Option2</option>
                <option value = {image3}>Option3</option>
                <option value = {image4}>Option4</option>
                <option value = {image5}>Option5</option>
                <option value = {image6}>Option6</option>
                </select>
                <br />
                <input className="form-button" type = "submit" name = "submit" value = "Create New Planet"/>
                
            </div>

        </form>
        </>
    ) 

}
export default PlanetForm;

