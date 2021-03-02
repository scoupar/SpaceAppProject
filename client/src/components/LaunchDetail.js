import React from 'react';
import './LaunchDetail.css';

const LaunchDetail = ({selectedLaunch}) => {

   

    if(!selectedLaunch){
        return(null)
    };

    

    return(
        <>
            <div className="launch-wrapper">
                <img src={selectedLaunch.image} height="400"/>
                <div className="launch-container">
                    <div className="launch-detail">
                        <h2>{selectedLaunch.name}</h2>
                        <p>Date: {selectedLaunch.net}</p>
                        <p>Status: {selectedLaunch.status.name}</p>
                        <p>{selectedLaunch.lsp_name}</p>
                        <p>Launch Pad Name: {selectedLaunch.pad}</p>
                        <p>Location: {selectedLaunch.location}</p>
                        <p>Mission Name:{selectedLaunch.mission}</p>
                        <p>Mission Type:{selectedLaunch.mission_type}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LaunchDetail;