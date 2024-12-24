import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MasterofArchitect.css'; 
import Footer from './Footer';

const MasterofArchitect = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enroll-master-of-architecture');
  };

  return (
    <div className='main'>
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>Master of Architecture Course</h1>
            <p>Advance your architectural expertise with our Master of Architecture program. This course will enhance your skills in advanced design, theory, and practice.</p>
            <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This course includes in-depth studies on:</p>
            <ul>
              <li>Advanced Architectural Design</li>
              <li>Urban Planning and Development</li>
              <li>Architectural Theory and Criticism</li>
              <li>Sustainable Architecture</li>
              <li>Project Management in Architecture</li>
            </ul>
            <h2>Course Duration</h2>
            <p>18 months</p>
            <h2>Course Instructor</h2>
            <p>Harry Potter, Renowned Architect with 15+ years of experience</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MasterofArchitect;
