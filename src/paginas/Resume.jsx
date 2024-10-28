import React from 'react';
import { Link } from 'react-router-dom';
import { studies, experiences } from '../data/resume.js'

function Resume() {
    return (
    <>
        <h1>Enlaces</h1>
        <ul>
            <li><Link to={`/`}>Home</Link></li>   
            <li><Link to={`/projects`}>Projects</Link></li>        
        </ul>
        
        <h2>Curriculo</h2>
        <h3>Estudios</h3>
        {studies.map((element) => 
        <div key={element.id}>
            <p>Titulo:  {element.title}</p>
            <p>Escuela: {element.institution}</p>
            <p>Fecha: {element.date}</p>
        </div>)}
        <h3>experiencia</h3>
        {experiences.map((element) => 
        <div key={element.id}>
            <p>Titulo:  {element.title}</p>
            <p>Escuela: {element.institution}</p>
            <p>Fecha: {element.date}</p>
        </div>)}
    </>
    );
}

export default Resume;