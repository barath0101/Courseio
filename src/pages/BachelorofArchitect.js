import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BachelorofArchitect.css';
import Footer from './Footer';

const BachelorofArchitect = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enroll-bachelor-of-architect');
  };

  return (
    <div className='main'>
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>Bachelor of Architecture</h1>
            <p>Join our Bachelor of Architecture program to develop your skills in designing and planning buildings, structures, and spaces. Learn from experienced architects and gain hands-on experience.</p>
            <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This course covers essential topics such as:</p>
            <ul>
              <li>Architectural Design and Planning</li>
              <li>Building Materials and Construction</li>
              <li>Structural Systems</li>
              <li>Environmental Control Systems</li>
              <li>History of Architecture</li>
            </ul>
            <h2>Course Duration</h2>
            <p>5 years</p>
            <h2>Course Instructor</h2>
            <p>Dr. Alagesh Venkat, Architect with 15+ years of experience</p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BachelorofArchitect;
