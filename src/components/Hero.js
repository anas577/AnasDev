import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg parallax" data-speed="0.3"></div>
      <div className="hero-content scroll-reveal">
        <h1>Hello, I'm [Your Name]</h1>
        <p>Full Stack Developer & Code Architect</p>
        <button className="cta-button" onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
          View My Work
        </button>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;