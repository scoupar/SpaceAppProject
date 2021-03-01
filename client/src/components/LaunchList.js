import React, {Component} from 'react';
// import { render } from 'react-dom';
// import LaunchMap from '../components/LaunchMap';



const LaunchList = ({allLaunches, onLaunchSelect}) => {

    

    const options = allLaunches.map((launch, index) => {
        return(
            <option value={launch.id} key={index}>{launch.name}</option>
        )
    })



    const handleChange = (event) => {
        const foundLaunch = allLaunches.find((launch) => {
            return launch.id === event.target.value
        })
        onLaunchSelect(foundLaunch)
    }

    

    

    return(
        <>
        <h1>Upcoming Launches</h1>
       
        <h3>Select an option from the dropdown list to view more detail about upcoming launches.</h3>
        <select onChange={handleChange} defaultValue="default">
            <option disabled value="default">Choose a Launch...</option>
            {options}
        </select>

        </>
    )
}

export default LaunchList;