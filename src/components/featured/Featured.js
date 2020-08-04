import React from 'react';
import './Featured.css';
import projects from '../../projects.json'


export default function Header() {
    const firstFeature = projects.find(project => project.id === 1);
    const secondFeature = projects.find(project => project.id === 2);
    const thirdFeature = projects.find(project => project.id === 3);

	return (
        <section id="featured">
            <div className="container">
                <div>
                    <h2 className="title">Featured Work</h2>
                </div>
                <div>
                    {/* Set className of 'row' in order to line up image and description on bigger screens */}
                    <article className="row">
                        <figure>
                            <a href={ firstFeature.demoUrl } target="_blank" rel="noopener noreferrer">
                                <img className="img-box" src={ require(`../../img/${firstFeature.image}`) } alt="Pontoon" />
                            </a>
                        </figure>
                        <div>
                            <h3>
                                <a href={ firstFeature.demoUrl } target="_blank" rel="noopener noreferrer">{ firstFeature.title }</a>
                            </h3>
                            <h4>{ firstFeature.language }</h4>
                            <p>{ firstFeature.description }</p>
                            <p className="button" >
                                <a href={ firstFeature.codeUrl } target="_blank" rel="noopener noreferrer">See the Code</a>
                            </p>
                        </div>
                    </article>
                    <article className="row">
                        <figure>
                            <a href={ secondFeature.demoUrl } target="_blank" rel="noopener noreferrer">
                                <img className="img-box" src={ require(`../../img/${secondFeature.image}`) } alt="Unplugged project" />
                            </a>
                        </figure>
                        <div>
                            <h3>
                                <a href={ secondFeature.demoUrl } target="_blank" rel="noopener noreferrer">{ secondFeature.title }</a>
                            </h3>
                            <h4>{ secondFeature.language }</h4>
                            <p>{ secondFeature.description }</p>
                            <p className="button">
                                <a href={ secondFeature.codeUrl } target="_blank" rel="noopener noreferrer">See the Code</a>
                            </p>
                        </div>
                    </article>

                    <article className="row">
                        <figure>
                            <a href={ thirdFeature.demoUrl }  target="_blank" rel="noopener noreferrer">
                                <img className="img-box" src={ require(`../../img/${thirdFeature.image}`) } alt="React Movie DB" />
                            </a>
                        </figure>
                        <div>
                            <h3>
                                <a href={ thirdFeature.demoUrl }  target="_blank" rel="noopener noreferrer">{ thirdFeature.title }</a>
                            </h3>
                            <h4>{ thirdFeature.language }</h4>
                            <p>{ thirdFeature.description }</p>
                            <p className="button" >
                                <a href={ thirdFeature.codeUrl } target="_blank" rel="noopener noreferrer">See the Code</a>
                            </p>
                        </div>
                    </article>
                <div className="container">
                    <h4 className="see-more">Click <a href="./work/index.html"> HERE </a>to see more work.</h4>
                </div>
                </div>
            </div>
        </section>
  );
}
