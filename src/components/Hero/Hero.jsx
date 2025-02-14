import React from 'react';
import './Hero.css';
import profile_img from "../../assets/main_profile.png";

const Hero = () => {
  return (
    <div className="container text-center hero" id="hero-section">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <img src={profile_img} alt="profile" className="profile-img mt-4" />
          <h1 className="fw-semibold">
            <span>I'm Garima Rawat,</span> Frontend Developer based in Delhi
          </h1>
          <p>
            I'm a Frontend Developer, skilled in building interactive UIs, animations, and responsive designs, 
            seeking a frontend internship to create impactful user experiences.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <a className="btn hero-connect" href="#contact-section">Connect with me</a>
            <a className="btn hero-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
