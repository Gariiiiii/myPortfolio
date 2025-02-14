import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg px-5 py-3">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand text-white" href="#">
            <svg width="109" height="57" viewBox="0 0 109 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68 42.39C68 41.3438 68.9096 40.53 69.9493 40.6459L101.251 44.136C105.227 44.5794 108.591 41.226 108.161 37.2483C107.713 33.1161 103.434 30.5622 99.5844 32.1306L70.4171 44.0151C69.2629 44.4854 68 43.6363 68 42.39Z" fill="url(#paint0_linear_2205_14)"/>
                <text x="10" y="35" font-size="24" fill="white" font-weight="bold">Grey</text>
                <defs>
                    <linearGradient id="paint0_linear_2205_14" x1="219.1" y1="39.9983" x2="202.599" y2="91.4037" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DF8908"/>
                        <stop offset="1" stop-color="#B415FF"/>
                    </linearGradient>
                </defs>
            </svg>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
                <a className="nav-link text-white" href="#hero-section">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#about-section">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#project-section">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#contact-section">Contact</a>
            </li>
          </ul>
        </div>

        {/* Connect Button */}
        <a className="btn text-white fw-medium px-3 py-2 nav-connect" href="#contact-section" >
          Connect With Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
