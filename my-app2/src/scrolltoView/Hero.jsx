import React, { useRef } from "react";
import "./Style2.css";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Navbar from "./Navbar";

const Hero = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <About aboutRef={aboutRef} />

      <Projects projectsRef={projectsRef} />

      <Contact contactRef={contactRef} />

      <Experience experienceRef={experienceRef} />
    </>
  );
};

export default Hero;
