import React from 'react';
import { Link } from 'react-router-dom';
import './DataScience.css';
import Footer from './Footer';

const BCA = () => {
  return (
    <div className='main'>
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>Bachelor of Computer Applications (BCA)</h1>
            <p>Enhance your skills in computer applications and prepare for a career in the IT industry. Learn about programming, database management, software engineering, and more.</p>
            <Link to="/enroll-bachelor-of-computer-application">
              <button className="enroll-button">Enroll Now</button>
            </Link>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This course covers essential topics for computer applications, including:</p>
            <ul>
              <li>Programming Languages (C, C++, Java, Python)</li>
              <li>Database Management Systems</li>
              <li>Software Engineering</li>
              <li>Web Development</li>
              <li>Computer Networks</li>
            </ul>
            <h2>Course Duration</h2>
            <p>3 years</p>
            <h2>Course Instructor</h2>
            <p>Guna Sir, PhD in Computer Science with 15+ years of experience in the IT industry</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BCA;
