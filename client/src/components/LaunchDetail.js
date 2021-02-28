import React from 'react';

const LaunchDetail = ({selectedLaunch}) => {

   

    if(!selectedLaunch){
        return(null)
    };

    

    return(
        <>
        <div className="launch-container">
            <h2>{selectedLaunch.name}</h2>
            <p>{selectedLaunch.status.net}</p>
            <p>{selectedLaunch.status.name}</p>
            <p>{selectedLaunch.lsp_name}</p>
            <p>{selectedLaunch.pad}</p>
            <p>{selectedLaunch.location}</p>
            <p>Mission Name:{selectedLaunch.mission}</p>
            <p>Mission Type:{selectedLaunch.mission_type}</p>
            <img src={selectedLaunch.image} height="300"/>
        </div>
        </>
    )
}

export default LaunchDetail;