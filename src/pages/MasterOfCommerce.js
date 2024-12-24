// src/MasterOfCommerce.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MasterOfCommerce.css';
import Footer from './Footer';

const MasterOfCommerce = () => {
  return (
    <div className='main'>
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>Master of Commerce</h1>
            <p>Advance your career with our comprehensive Master of Commerce program. Gain in-depth knowledge in finance, accounting, business management, and more.</p>
            <Link to="/enroll-master-of-commerce">
              <button className="enroll-button">Enroll Now</button>
            </Link>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This program includes the following core areas:</p>
            <ul>
              <li>Financial Accounting</li>
              <li>Business Economics</li>
              <li>Corporate Finance</li>
              <li>Marketing Management</li>
              <li>Strategic Management</li>
              <li>International Business</li>
            </ul>
            <h2>Course Duration</h2>
            <p>2 years (4 semesters)</p>
            <h2>Course Instructor</h2>
            <p>Captain America, Expert in Financial Management with 15+ years of teaching experience in Commerce</p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MasterOfCommerce;
