import React from 'react';

const LaunchDetail = ({selectedLaunch}) => {
    if(!selectedLaunch){
        return(null)
    }


    return(
        <>
        <div className="launch-container">
            <h2>{selectedLaunch.name}</h2>
        </div>
        </>
    )
}

export default LaunchDetail;