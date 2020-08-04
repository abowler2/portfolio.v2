import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact">
            <div class="container">
                <div>
                    <h2>Let's Connect</h2>
                </div>

                <div class="row">
                    <div class="contact-info">
                        <h3>Hire Me</h3>
                        <p>951-667-5351</p>
                        <a class="email" href="mailto:abowler2@gmail.com">abowler2 [@] gmail.com</a>
                    </div>

                    <div class="social">
                        <h3>Follow Me</h3>
                        <div class="social-icons">
                            <p><a href="https://www.linkedin.com/in/abowler2/"><i class="fab fa-linkedin-in"></i></a></p>
                            <p><a href="https://github.com/abowler2"><i class="fab fa-github"></i></a></p>
                            <p><a href="https://twitter.com/A_Bowler2"><i class="fab fa-twitter"></i></a></p>
                        </div>
                    </div>

                    <div class="meetup">
                        <h3>Meet Me</h3>
                        <p>Inland Empire, CA</p>
                        <p>Let's go to meetups together!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}