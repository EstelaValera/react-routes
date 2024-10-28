import React from "react";
import { Link } from 'react-router-dom';

function Home() {

    return (
    <>
        <h1>¡Bienvenido a mi portfolio!</h1>
        <h2>Enlaces</h2>
        <ul>
            <li><Link to={`/`}>Home</Link></li> 
            <li><Link to={`/projects`}>Projects</Link></li>    
            <li><Link to={`/resume`}>Resume</Link></li>    
        </ul>
    </>
    );
}

export default Home;