import React from "react";


const Navbar = ({scrollToSection,aboutRef,projectsRef,experienceRef,contactRef}) => {
  return (
    <>
      <nav>
        <div className="logo">Tailang</div>
        <ul className="nav-links">
          <li className="nav-item" onClick={()=>{
            scrollToSection(aboutRef)
          }}>About</li>
          <li className="nav-item" onClick={()=>{
            scrollToSection(projectsRef)
          }}>Projects</li>
          <li className="nav-item" onClick={()=>{
            scrollToSection(experienceRef)
          }}>Experience</li>
          <li className="nav-item" onClick={()=>{
            scrollToSection(contactRef)
          }}>Contact Us</li>
        </ul>
      </nav>
    
    </>
  );
};

export default Navbar;
