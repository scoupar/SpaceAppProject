import React from 'react';


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
        <select onChange={handleChange} defaultValue="default">
            <option disabled value="default">Choose a Launch...</option>
            {options}
        </select>

        </>
    )
}

export default LaunchList;