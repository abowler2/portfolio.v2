import React from 'react';
import './Projects.css';
import projects from '../../projects.json';

export default function Projects() {
    return (
        <section>
            <h2 className="work-title">My Work</h2>
            <div id="projects">
                {projects.map(project => (
                    <div className="project-card" key={ project.id }>
                        <h4>{ project.title }</h4>
                        <img src={ require(`../../img/${project.image}`) } alt={ project.title } />
                    </div>
                ))}
            </div>
        </section>
    )
}
