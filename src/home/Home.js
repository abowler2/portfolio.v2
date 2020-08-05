import React from 'react';
import Header from '../components/header/Header';
import Featured from '../components/featured/Featured';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';


export default function Home() {
    return(
        <section>
            <Header />
            <Featured />
            <About />
            <Contact />
            <Footer />
        </section>
    )
}