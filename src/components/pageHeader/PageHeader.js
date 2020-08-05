import React from 'react';
import './PageHeader.css';
import logo from '../../img/logo.png'

export default function PageHeader() {
    return (
        <header>
            <div className="work-header header-divider">
                <figure>
                    <img src={ logo } alt="A.Bowler" />
                </figure>

                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}