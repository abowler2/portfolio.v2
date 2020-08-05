import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

export default function Work() {
    return(
        <section>
            <PageHeader />
            <Projects />
            <Contact />
            <Footer />
        </section>
    )
}
