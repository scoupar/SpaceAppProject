import React, {useState} from 'react';
import './PlanetsForm.css'




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
        <form onSubmit = {handleSubmit}>
            <div className = "planet-form">
                <label htmlFor = "planetName">Planet Name:</label>
                <input type = "text" id = "planetName" value ={planetName} onChange = {handleNameChange} required />
                <label htmlFor = "diameter">Diameter:</label>
                <input type = "text" id = "diameter" value ={diameter} onChange = {handleDiameterChange} required />
                <label htmlFor = "mass">Mass:</label>
                <input type = "text" id = "mass" value ={mass} onChange = {handleMassChange} required />
                <label htmlFor = "moons">Number of moons:</label>
                <input type = "number" id = "moons" value ={moons} onChange = {handleMoonsChange} required />
                <label htmlFor = "rings">Does it have any rings?</label>
                <select id="rings" name="rings" onChange = {handleRingsChange} defaultValue = "default">
                <option disabled value ="default">Does it have any rings?</option>
                <option value = "Yes">Yes</option>
                <option value = "No">No</option>
                </select>
                <label htmlFor = "type">What type of planet is it?</label>
                <select id = "type" name = "type" onChange = {handleTypeChange} defaultValue = "default">
                <option disabled value ="default">Planet Type</option>
                <option value = "Terrestrial">Terrestrial</option>
                <option value = "Ice Giant">Ice Giant</option>
                <option val = "Gas Giant">Gas Giant</option> 
                </select>
                <label htmlFor = "orbitPeriod">Orbit Period:</label>
                <input type = "number" id = "orbitPeriod" value ={orbitPeriod} onChange = {handleOrbitPeriodChange} required />
                <select id = "url" name = "url" onChange = {handleUrlChange} defaultValue = "default">
                <option disabled value ="default">Choose your planet look</option>
                <option value = "https://mocah.org/thumbs/532325-space-planet.jpg">Option1</option>
                <option value = "https://images.unsplash.com/photo-1560507074-b9eb43faab00?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbmV0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">Option2</option>
                <option value = "https://cdnb.artstation.com/p/assets/images/images/017/697/507/large/andrew-gaus-ice-planet-2.jpg?1557001504">Option3</option>
                <option value = "https://images.unsplash.com/photo-1610970883364-30e1ab2dc48b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBsYW5ldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">Option4</option>
                <option value = "./gas1.png">Option5</option>
                </select>
                <input type = "submit" name = "submit" value = "Create New Planet"/>
                
            </div>

        </form>
        </>
    ) 

}
export default PlanetForm;

