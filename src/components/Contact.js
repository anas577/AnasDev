import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="scroll-reveal">Let's Connect</h2>
        <p className="scroll-reveal">Ready to collaborate on your next project? Let's create something extraordinary together.</p>
        <div className="contact-info scroll-reveal">
          <a href="mailto:[email]" className="contact-link">Email</a>
          <a href="https://linkedin.com/in/[profile]" className="contact-link">LinkedIn</a>
          <a href="https://github.com/[username]" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;