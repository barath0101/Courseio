import React from 'react';
import { Link } from 'react-router-dom';
import './FullStackDevelopment.css';
import Footer from './Footer';



const FullStackDevelopment = () => {
    
  return (
    <div className='main'>
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>Full Stack Development Course</h1>
            <p>Master the art of full stack development, covering front-end, back-end, databases, and deployment.</p>
            <Link to="/enroll-fullstack">
              <button className="enroll-button">Enroll Now</button>
            </Link>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This course provides comprehensive training in various Full Stack Development areas, including:</p>
            <ul>
              <li>HTML, CSS, and JavaScript</li>
              <li>Front-end Frameworks (React, Angular, or Vue)</li>
              <li>Server-side Programming (Node.js, Express)</li>
              <li>Database Management (SQL, NoSQL)</li>
              <li>APIs and Microservices</li>
              <li>DevOps and Deployment</li>
            </ul>
            <h2>Course Duration</h2>
            <p>12 weeks</p>
            <h2>Course Instructor</h2>
            <p>Dio Hari , Full Stack Developer with 15 years of industry experience</p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FullStackDevelopment;
