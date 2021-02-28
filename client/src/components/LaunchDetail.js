import React from 'react';

const LaunchDetail = ({selectedLaunch}) => {

   

    if(!selectedLaunch){
        return(null)
    };

    const checkMission = () => {
        if(selectedLaunch.mission === null){
            return(null)
        }else{
            return(
                <>
                <p>Mission Name:{selectedLaunch.mission.name}</p>
                <p>Mission Type:{selectedLaunch.mission.type}</p>
                <p>Description:{selectedLaunch.mission.description}</p>
            </>
            )
        }
    };

    return(
        <>
        <div className="launch-container">
            <h2>{selectedLaunch.name}</h2>
            <p>Rocket Name:{selectedLaunch.rocket.configuration.full_name}</p>
            <p>{selectedLaunch.launch_service_provider.name}</p>
            <p>{selectedLaunch.pad.name}</p>
            <p>{selectedLaunch.pad.location.name}</p>
            {checkMission()}
            <img src={selectedLaunch.image} height="300"/>
        </div>
        </>
    )
}

export default LaunchDetail;