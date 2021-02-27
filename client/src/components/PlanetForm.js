import React, {useState} from 'react';


const PlanetForm = ({createPlanet}) => {
    const [planetName, setPlanetName] = useState("");
    const [diameter, setDiameter] = useState(0);
    const [mass, setMass] = useState(0);
    const [moons, setMoons] = useState(0);
    const [rings, setRings] = useState("");
    const [type, setType] = useState("");
    const [orbitPeriod, setOrbitPeriod] = useState(0);

    const handleNameChange = event => setPlanetName(event.target.value)
    const handleDiameterChange = event => setDiameter(event.target.value)
    const handleMassChange = event => setMass(event.target.value)
    const handleMoonsChange = event => setMoons(event.target.value)
    const handleRingsChange = event => setRings(event.target.value)
    const handleTypeChange = event => setType(event.target.value)
    const handleOrbitPeriodChange = event => setOrbitPeriod(event.target.value)

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
        } 
        createPlanet(planet);
        setPlanetName("");
        setDiameter(0);
        setMass(0);
        setMoons(0);
        setRings("");
        setType("");
        setOrbitPeriod(0);
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
                <input type = "text" id = "rings" value ={rings} onChange = {handleRingsChange} required />
                <label htmlFor = "type">What type of planet is it?:</label>
                <select id = "type" name = "type" onChange = {handleTypeChange} defaultValue = "default">
                <option disabled value ="default">Planet Type</option>
                <option value = "Terrestrial">Terrestrial</option>
                <option value = "Ice Giant">Ice Giant</option>
                <option val = "Gas Giant">Gas Giant</option> 
                </select>
                <label htmlFor = "orbitPeriod">Orbit Period</label>
                <input type = "number" id = "orbitPeriod" value ={orbitPeriod} onChange = {handleOrbitPeriodChange} required />
                <input type = "submit" name = "submit" value = "Create New Planet"/>
                
            </div>

        </form>
        </>
    ) 

}
export default PlanetForm;