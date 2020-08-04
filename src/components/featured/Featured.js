import React from 'react';
import './Featured.css';
import pontoon from '../../img/pontoon.png';
import unplugged from '../../img/unplugged.png';
import reactMovie from '../../img/reactMovie.png';


export default function Header() {
	return (
        <section id="featured">
            <div class="container">
                <div>
                    <h2>Featured Work</h2>
                </div>
                <div>
                    {/* Set class of 'row' in order to line up image and description on bigger screens */}
                    <article class="row">
                        <figure>
                            <a href="https://github.com/abowler2/OpenSourceContributions" target="_blank" rel="noopener noreferrer">
                                <img class="img-box" src={ pontoon } alt="Pontoon" />
                            </a>
                        </figure>
                        <div>
                            <h3><a href="https://github.com/abowler2/OpenSourceContributions" target="_blank" rel="noopener noreferrer">Open Source Contributions</a></h3>
                            <h4>React, Next.js, &amp; Django</h4>
                            <p>Contributions made to Open Source Projects ranging from markdown to added features. As an Intern at Mozilla
                            with Outreachy I was able to work on the Pontoon project for an extended period of time adding the ability
                            for users to change the source locale to their preference. I am currently working on adding the ability to leave
                            comments within the translation UX.</p>
                        </div>
                    </article>
                    <article class="row">
                        <figure>
                            <a href="https://abowler2.github.io/206-unplugged/" target="_blank" rel="noopener noreferrer">
                                <img class="img-box" src={ unplugged } alt="Unplugged project" />
                            </a>
                        </figure>
                        <div>
                            <h3><a href="https://abowler2.github.io/206-unplugged/" target="_blank" rel="noopener noreferrer">Unplugged Website</a></h3>
                            <h4>HTML &amp; CSS</h4>
                            <p>This project was built mobile-first as a responsive, mulit-page website using HTML and CSS including Flexbox and media queries. Re-created based on Photoshop design comps.</p>
                        </div>
                    </article>

                    <article class="row">
                        <figure>
                            <a href="https://codesandbox.io/s/reactmoviedb-e505s"  target="_blank" rel="noopener noreferrer">
                                <img class="img-box" src={ reactMovie } alt="React Movie DB" />
                            </a>
                        </figure>
                        <div>
                            <h3><a href="https://codesandbox.io/s/reactmoviedb-e505s"  target="_blank" rel="noopener noreferrer">React Movie DB</a></h3>
                            <h4>React App</h4>
                            <p>Created a Movie App using the Movie DB API. 
                                ~ Implemented React Router
                                ~ Managed state
                                ~ Set up local storage
                            </p>
                        </div>
                    </article>
                <div class="container">
                    <h4>Click <a href="./work/index.html"> HERE </a>to see more work.</h4>
                </div>
                </div>
            </div>
        </section>
  );
}
