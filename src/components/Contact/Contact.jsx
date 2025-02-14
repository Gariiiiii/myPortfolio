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
      <div className="text-center position-relative mb-4">
        <h1 className="fw-semibold px-3 fs-1">Get in Touch</h1>
        <img src={theme_pattern} alt="Pattern" className="bottom-0 position-absolute" />
      </div>

      {/* Contact Section */}
      <div className="row gy-4 align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 col-md-6 text-center text-md-start">
          <h1 className="fw-bold text-gradient">Let's Talk</h1>
          <p>I'm currently available for new projects. Feel free to send me a message.</p>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3">
              <img src={mail_icon} alt="Mail" className='icon-img'/> <p className=" mb-0">ms.garimarawat@gmail.com</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src={call_icon} alt="Call" className='icon-img' /> <p className=" mb-0">+91 9310173XXX</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src={location_icon} alt="Location" className='icon-img' /> <p className=" mb-0">120 ABC Road, Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="col-lg-6 col-md-6">
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
              <label className="form-label text-white">Your Message</label>
              <textarea className="form-control" rows="4" placeholder="Type your message"></textarea>
            </div>
            <button type="submit" className="btn btn-gradient w-100">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
