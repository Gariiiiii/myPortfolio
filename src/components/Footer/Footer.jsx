import React from 'react';
import './Footer.css';
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer container py-5">
      <div className="row justify-content-between align-items-center mb-2">
        <div className="col-md-6">
          <img src={footer_logo} alt="Logo" className="mb-2" />
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
        <div className="col-md-6 d-flex gap-4 justify-content-around">
          <p className="text-white">Terms of Service</p>
          <p className="text-white">Privacy Policy</p>
          <p className="text-white">Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
