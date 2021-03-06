import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
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
                        <ToggleContent
                            toggle = { show => 
                                <img 
                                    src={ require(`../../img/${project.image}`) } 
                                    alt={ project.title } 
                                    onClick={show}
                                />
                            }
                            content={hide => (
                                <Modal>
                                    <button className="modal-close" onClick={ hide }>
                                    <svg className="close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
                                    </button>
                                    <div>
                                        <h2 className="modal-title">{ project.title }</h2>
                                        <p>{ project.language }</p>
                                        <p>{ project.description }</p>
                                        <div className="buttons">
                                            {project.demoUrl &&
                                                <a href={ project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    See the Site
                                                </a>
                                            }
                                            <a href={ project.codeUrl } target="_blank" rel="noopener noreferrer">
                                                See the Code
                                            </a>
                                        </div>
                                    </div>
                                </Modal>
                            )}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = useState(false);
    const hide = () => {
        setIsShown(false);
        document.body.style.overflow = 'unset';
    }
    const show = () => {
        setIsShown(true);
        document.body.style.overflow = 'hidden';
    }

    return (
        <React.Fragment>
            {toggle(show)}
            {isShown && content(hide)}
        </React.Fragment>
    );
}

const Modal = ({ children }) => (
    ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal-container">
                <div className="modal">
                    { children }
                </div>
            </div>
        </React.Fragment>,
        document.getElementById('modal-root')
    )
);
