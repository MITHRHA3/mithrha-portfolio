import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Achievements from '../../components/Achievements/Achievements';
import CodingProfiles from '../../components/CodingProfiles/CodingProfiles';
import Certifications from '../../components/Certifications/Certifications';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className="relative">
      {/* Landing Intro & Banner */}
      <Hero />

      {/* Core Profile Details */}
      <About />

      {/* Professional Tech Skills Grid */}
      <Skills />

      {/* Showcase Cards & Search Board */}
      <Projects />

      {/* Milestones Logging */}
      <Achievements />

      {/* Competitive Coding Dashboard */}
      <CodingProfiles />

      {/* Academic Certifications Board */}
      <Certifications />

      {/* Inquiries Contact Form */}
      <Contact />
    </div>
  );
};

export default Home;
