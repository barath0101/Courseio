import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DataScience.css';
import Footer from './Footer';

const BuildingTechnology = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enroll-building-technology');
  };

  return (
    <div className='main'>
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>Building Technology Course</h1>
            <p>Master the principles and practices of modern building technology. Learn about sustainable design, construction techniques, and building materials.</p>
            <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This course covers essential topics such as:</p>
            <ul>
              <li>Construction Methods and Materials</li>
              <li>Sustainable Building Practices</li>
              <li>Building Information Modeling (BIM)</li>
              <li>Energy Efficiency and Green Building</li>
              <li>Project Management in Construction</li>
            </ul>
            <h2>Course Duration</h2>
            <p>12 weeks</p>
            <h2>Course Instructor</h2>
            <p>jesus, Expert in Building Technology with 15+ years of experience</p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BuildingTechnology;
