import React from 'react';
import './LaunchList.css';
import {Animated} from "react-animated-css";



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
        <div className="launch-list">
            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <h1><span>Upcoming Launches</span></h1>
            </Animated>
            
        
            <h3><span>Select an option from the dropdown list to view more detail about upcoming launches.</span></h3>
            <select className="launch-select" onChange={handleChange} defaultValue="default">
                <option disabled value="default">Choose a Launch...</option>
                {options}
            </select>
            
        </div>
    )
}

export default LaunchList;