import React from 'react';
import './Header.css';

export default function Header() {
	return (
		<header class="homepage-header">
			<div>
				<nav id="navbar">
					<ul>
						<li><a href="./work/index.html">Work</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
				<div class="intro">
					<h1>Hello, my name is April.</h1>
					<p>I'm a web developer based in California who enjoys creating beautiful websites.</p>
				</div>
			</div>
		</header>
  	);
}
