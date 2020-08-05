import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div>
                    <h2>Let's Connect</h2>
                </div>

                <div className="row">
                    <div className="contact-info">
                        <p>951-667-5351</p>
                        <a className="email" href="mailto:abowler2@gmail.com">abowler2 [@] gmail.com</a>
                    </div>

                    <div className="social">
                        <div className="social-icons">
                            <p><a href="https://www.linkedin.com/in/abowler2/"><i className="fab fa-linkedin-in"></i></a></p>
                            <p><a href="https://github.com/abowler2"><i className="fab fa-github"></i></a></p>
                            <p><a href="https://twitter.com/A_Bowler2"><i className="fab fa-twitter"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}