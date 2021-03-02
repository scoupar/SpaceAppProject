import React from 'react';


const Home = ({picture}) => {

    return(
        <>
        <img src= {picture.url} alt="astronomy photo of the day"/>
        <h1 className="picture-title">{picture.title}</h1>
        <h3>{picture.date}</h3>
        <p>{picture.explanation}</p>
        </>

    )
}

export default Home;