import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about_profile from '../../assets/profile.jpg';

const About = () => {
  const skills = [
    { skill: 'HTML', width: '70%' },
    { skill: 'CSS', width: '70%' },
    { skill: 'JavaScript', width: '65%' },
    { skill: 'Bootstrap', width: '60%' },
    { skill: 'ReactJS', width: '65%' },
    { skill: 'SQL', width: '50%' },
  ];

  const achievements = [
    { value: '1+', text: 'YEARS OF CODING EXPERIENCE' },
    { value: '6+', text: 'PROJECTS COMPLETED' },
    { value: 'Self-Initiated', text: 'REAL-WORLD APPLICATIONS' },
  ];

return (
<div className='container py-5 about' id='about-section'>
  <div className='position-relative text-center mb-5'>
    <h1 className='fw-semibold display-4'>About Me</h1>
    <img src={theme_pattern} alt='theme-pattern' className='position-absolute bottom-0' />
  </div>

  <div className='row about-sections'>
    <div className='col-md-5 text-center img'>
      <img src={about_profile} alt='profile' className='img-fluid' />
    </div>
    <div className='col-md-7 about-para'>
      <div className='mb-4'>
        <p>
          I am a passionate Frontend Developer, focused on creating interactive and responsive user interfaces with engaging animations.
        </p>
        <p>
          Currently, I’m seeking a frontend developer internship to enhance my skills and contribute to impactful projects.
        </p>
      </div>

      {/* Skills Section */}
      <div className='about-skills'>
        {skills.map(({ skill, width }, index) => (
          <div className='d-flex align-items-center mb-3 about-skill' key={index}>
            <p className='mb-0 fw-medium'>{skill}</p>
            <div className='flex-grow-1 rounded-pill skill-bar'>
              <div className='skill-fill' style={{ width }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Achievements Section */}
  <div className='row text-center justify-content-center mt-4'>
    {achievements.map(({ value, text }, index) => (
      <div className='col-3 col-md-3 about-achievement' key={index}>
        <h1 className='fw-bold'>{value}</h1>
        <p className='fw-medium'>{text}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default About;
