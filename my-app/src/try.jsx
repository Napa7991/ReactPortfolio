// Navbar.jsx
import React, { useRef } from 'react';
import './tryCss.css'

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul>
        <li onClick={() => scrollToSection(homeRef)}>Home</li>
        <li onClick={() => scrollToSection(aboutRef)}>About</li>
      </ul>
      <p>Scroll down to: Home or About</p>

      <div ref={homeRef} className="section">
        <h2>Home Section</h2>
        {/* Your home section content */}
      </div>

      <div ref={aboutRef} className="section">
        <h2>About Section</h2>
        {/* Your about section content */}
      </div>
    </nav>
  );
};

export default Navbar;

