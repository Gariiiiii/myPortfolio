import React from 'react';
import './Footer.css';
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer container py-5">
      <div className="row justify-content-between align-items-center mb-2 px-3">
        <div className="col-md-6">
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
          <p className="text-white">I'm a Frontend Developer from, Delhi</p>
        </div>
        <div className="col-md-6 d-flex align-items-center gap-3">
          <div className="input-group">
            <span className="input-group-text bg-dark border-0">
              <img src={user_icon} alt="User" />
            </span>
            <input type="email" className="form-control bg-dark text-white border-0" placeholder="Enter your email" />
          </div>
          <button className="btn btn-gradient px-3 py-1">Subscribe</button>
        </div>
      </div>
      <hr className="bg-light" />
      <div className="row justify-content-between">
        <div className="col-md-6 text-white">© 2025 Garima Rawat. All rights reserved.</div>
        <div className="col-md-6 d-flex gap-4 justify-content-around d-none d-md-flex">
        <p className="text-white">Terms of Service</p>
          <p className="text-white">Privacy Policy</p>
          <p className="text-white">Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
