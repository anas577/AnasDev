import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>dev</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;