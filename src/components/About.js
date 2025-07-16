import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="scroll-reveal">About Me</h2>
        <div className="about-content">
          <div className="about-text scroll-reveal">
            <p>
              I'm a passionate developer who transforms ideas into elegant digital solutions. 
              With expertise in modern web technologies, I craft scalable applications that 
              deliver exceptional user experiences.
            </p>
            <p>
              I thrive on solving complex problems and staying at the forefront of technology. 
              Every line of code I write is driven by precision, performance, and purpose.
            </p>
          </div>
          <div className="skills scroll-reveal">
            <h3>Tech Stack</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>AWS</span>
              <span>Docker</span>
              <span>GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;