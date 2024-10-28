import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
    return (
    <>
        <h1>Enlaces</h1>
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/resume`}>Resume</Link></li>
        </ul>

        <h2>Proyectos</h2>

        {projects.map((element) => 
        <div key={element.id}>
            <p>Nombre: {element.name}</p>
            <p>Descripcion: {element.description}</p>
            <img src={element.image} />
            <a href={element.url}>Enlace</a>
        </div>)}
    </>
    );
}

export default Projects;