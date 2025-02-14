import React from 'react';
import './Hero.css'
import profile_img from "../../assets/main_profile.png";

const Hero = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-2 text-center hero" id='hero-section'>
      <img src={profile_img} alt="profile-image" className="mt-4" width="250px" height="250px" />

      <h1 className="w-75 display-5 fw-semibold">
        <span>I'm Garima Rawat,</span> Frontend Developer based in Delhi
      </h1>

      <p className="w-50 lh-sm">
        I'm a Frontend Developer, skilled in building interactive UIs, animations, and responsive designs, 
        seeking a frontend internship to create impactful user experiences.
      </p>

      <div className="d-flex align-items-center gap-3 mb-4">
        <a className="btn text-white fw-medium px-4 py-2 hero-connect" href="#contact-section">
          Connect with me
        </a>

        <a className="btn btn-outline-light fw-medium px-5 py-2 hero-resume" href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
