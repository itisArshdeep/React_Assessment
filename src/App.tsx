import React from 'react';
import './App.css';

import About from './Components/AboutSection/About';
import Contact from './Components/ContactSection/Contact';
import Footer from './Components/FooterSection/Footer';
import Hero from './Components/HeroSection/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/ProjectsSection/Projects';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
