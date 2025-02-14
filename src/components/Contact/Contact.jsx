import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div className="container py-5 text-white contact" id='contact-section'>
      {/* Title Section */}
      <div className="text-center position-relative mb-5">
        <h1 className="fw-semibold px-3 fs-1">Get in Touch</h1>
        <img src={theme_pattern} alt="Pattern" className="bottom-0 position-absolute" />
      </div>

      {/* Contact Section */}
      <div className="row gy-5 align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 contact-section">
          <h1 className="fw-bold text-gradient">Let's Talk</h1>
          <p>
            I'm currently available for new projects. Feel free to send me a message about anything you need help with.
          </p>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3">
              <img src={mail_icon} alt="Mail" /> <p className="mb-0">ms.garimarawat@gmail.com</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src={call_icon} alt="Call" /> <p className="mb-0">+91 9310173XXX</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src={location_icon} alt="Location" /> <p className="mb-0">120 ABC Road, Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="col-lg-6">
          <form className="bg-dark p-4 rounded custom-form">
            <div className="mb-3">
              <label className="form-label text-white">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Your Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Write your message here</label>
              <textarea className="form-control" rows="5" placeholder="Type your message here"></textarea>
            </div>
            <button type="submit" className="btn btn-gradient w-100">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
