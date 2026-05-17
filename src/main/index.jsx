import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import About from '../components/About';
import Services from '../components/Services';
import Why from '../components/Why';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
    return (
        <div>
            <Navbar />
            <Herosection />
            <About />
            <Services />
            <Why />
            <Contact />
            <Footer />
        </div>
    );
}

export default Index;
