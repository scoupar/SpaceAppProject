import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import Header from './Header.png';


const NavBar = () => {

    return (
        <>
        <img src={Header} alt="header" width="100%" />
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">HOME </Link>
                </li>
                <li>
                    <Link to="/planets">PLANETS</Link>
                </li>
                <li>
                    <Link to="/launches">LAUNCHES</Link>
                </li>
                <li>
                    <Link to="/astronauts">ASTRONAUTS</Link>
                </li>
                <li>
                    <Link to="/quiz">QUIZ</Link>
                </li>
                <li>
                    <Link to="/interact">INTERACT</Link>
                </li>
            </ul>
        </div>    
        </>
    )

}

export default NavBar;