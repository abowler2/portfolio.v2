import React from 'react';
import './About.css';
import me from '../../img/me.jpg';

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div>
                    <h2>About me</h2>
                </div>

                <article>
                    <figure>
                        <img className="about-image" src={ me } alt="April Bowler" />
                    </figure>
                    <div>
                        <h3>Find your passion, and it's no longer work. ~ <span>L.A. Reid</span></h3>
                        <p> My journey into tech started while helping my oldest daughter find the direction she wanted to go in for college. She began to take computer science classes in high school, and I was intrigued. After finding a free online course to learn the basics of coding I was hooked! From there I have been working diligently to learn and improve my coding skills.
                            <br /><br />
                            Let's work together to create your vision!</p>
                    </div>
                </article>
            </div>
        </section>
    );
}