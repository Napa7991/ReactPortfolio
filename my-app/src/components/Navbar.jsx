import React, { useState, useRef } from "react";

const NavbarContainer = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activePage, setActivePage] = useState("home");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="nav">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li
            onClick={() => {
              setActivePage("about");
              scrollToSection(aboutRef);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              setActivePage("about");
              scrollToSection(experienceRef);
            }}
          >
            Experience
          </li>
          <li
            onClick={() => {
              setActivePage("about");
              scrollToSection(projectsRef);
            }}
          >
           Projects
          </li>
          <li
            onClick={() => {
              setActivePage("about");
              scrollToSection(contactRef);
            }}
          >
           Contact
          </li>
        </ul>
      </nav>
      <section ref={aboutRef} className="about">
        About
      </section>
      <section ref={experienceRef} className="experience">
        Experience
      </section>
      <section ref={projectsRef} className="projects">
        Projects
      </section>
      <section ref={contactRef} className="contact">
        Contact
      </section>
    </>
  );
};

export default NavbarContainer;
