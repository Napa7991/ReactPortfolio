import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'

const Home = ({scrollToSection,contactRef}) => {
  return (
    <>
      <section>
        <div className="home-container">
          <div className="image-container">
            <img
              src="/assets/profile-pic.png"
              alt="error image"
              id="img-profile"
            />
          </div>
          <div className="title-container">
            <p className="section-text">Hello, I'm</p>
            <h1 className="title">Tailang Napa</h1>
            <p className="frontendText">Frontend Developer</p>
            <div className="btn-container">
              <button className="btn btn-CV" onClick={()=>{
                window.open(import.meta.env.BASE_URL+'assets/Resume.pdf')
              }}>Download CV</button>
              <button className="btn btn-info" onClick={()=>{
                scrollToSection(contactRef);
              }}>Contact Info</button>
            </div>
            <div id="icons">
                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                <FontAwesomeIcon icon = {faGithub} size="3x"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
