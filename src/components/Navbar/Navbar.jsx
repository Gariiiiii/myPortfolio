import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";

const Navbar = () => {
    const [menu, setMenu] = useState("home-section");

  return (
    <nav className="navbar navbar-expand-lg px-5 py-3">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand text-white" href="#">
          <img src={logo} alt="logo" width="60" height="50" />
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
                {menu==="hero-section" ? <img src={underline} alt='' /> : <></>}
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#about-section">About Me</a>
                {menu==="about-section" ? <img src={underline} alt='' /> : <></>}
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#project-section">Portfolio</a>
                {menu==="project-section" ? <img src={underline} alt='' /> : <></>}
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#contact-section">Contact</a>
                {menu==="contact-section" ? <img src={underline} alt='' /> : <></>}
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
