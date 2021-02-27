import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {

    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/planets">Planets</Link>
                </li>
                <li>
                    <Link to="/launches">Launches</Link>
                </li>
                <li>
                    <Link to="/astronauts">Astronauts</Link>
                </li>
                <li>
                    <Link to="/quiz">Quiz</Link>
                </li>
            </ul>
        </div>    
    )

}

export default NavBar;