import React from 'react';


const Home = ({picture}) => {

    return(
        <>
        
        <h3 className="welcome"><span>Welcome to Hello Space! an interactive learning app. <br />Explore the solar system, learn about astronauts, view upcoming launches <br />and test your knowledge with our quiz. Venture to our Hello Space page to get lost in space.</span></h3>
        <h1 className="heading"><span>Photo of The Day</span></h1>
        <img src= {picture.url} alt="astronomy photo of the day" height="500" width="auto"/>
        <div className="photo-blurb">
            <h1 className="picture-title"><span>{picture.title}</span></h1>
            <h3><span>{picture.date}</span></h3>
            <p><span>{picture.explanation}</span></p>
        </div>
        </>

    )
}

export default Home;