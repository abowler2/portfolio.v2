import React from 'react';
import './NotFound.css';
import blankCanvas from '../../img/blankCanvas.png';
import PageHeader from '../pageHeader/PageHeader';

export default function NotFound() {
    return (
        <section className="wrapper">
            <PageHeader />
            <div className="not-found">
                <h1>Sorry, I'm not sure what page you're requesting</h1>
                <img src={ blankCanvas } alt="Page Not Found" />
                <h2>Return to <a href="/">HOME</a></h2>
            </div>
        </section>
    )
}