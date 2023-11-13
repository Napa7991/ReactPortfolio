import React from "react";
import { useRef } from "react";

import "./tryCss.css";

const Navbar = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div>
      <nav>
        <div>Logo</div>
        <ul className="nav-links">
          <li
            onClick={() => {
              scrollToSection(aboutRef);
            }}
            className="nav-item"
          >
            About
          </li>
          <li
            onClick={() => {
              scrollToSection(experienceRef);
            }}
            className="nav-item"
          >
            Experience
          </li>
          <li
            onClick={() => {
              scrollToSection(projectsRef);
            }}
            className="nav-item"
          >
            Projects
          </li>
          <li
            onClick={() => {
              scrollToSection(contactRef);
            }}
            className="nav-item"
          >
            Contact
          </li>
        </ul>
      </nav>

      <section ref={aboutRef}>About</section>
      <section ref={experienceRef}>Experience</section>
      <section ref={projectsRef}>Projects</section>
      <section ref={contactRef}>Contact</section>
    </div>
  );
};

export default Navbar;
