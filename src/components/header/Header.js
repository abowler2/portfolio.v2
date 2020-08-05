import React from 'react';
import './Header.css';

export default function Header() {
	return (
		<header className="homepage-header">
			<div>
				<nav id="navbar">
					<ul>
						<li><a href="/work">Work</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
				<div className="intro">
					<h1>Hello, my name is April.</h1>
					<p>I'm a web developer based in California who enjoys creating beautiful websites.</p>
				</div>
			</div>
		</header>
  	);
}
