
import React from 'react';
import { Link } from 'react-router-dom';
import './InformationTechnology.css';
import Footer from './Footer';

const InformationTechnology = () => {
  return (
    <div className='main'>
      <div className="main-container">
    <div className="course-container">
      <header className="course-header">
        <h1>Information Technology Course</h1>
        <p>Delve into the world of IT, covering areas such as network administration, cybersecurity, and IT infrastructure management.</p>
        <Link to="/enroll-information">
          <button className="enroll-button">Enroll Now</button>
        </Link>
      </header>
      
      <section className="course-content">
        <h2>Course Overview</h2>
        <p>This course provides comprehensive training in various IT fields, including:</p>
        <ul>
          <li>Network Administration</li>
          <li>Cybersecurity Principles</li>
          <li>Database Management</li>
          <li>IT Support and Maintenance</li>
          <li>Cloud Computing</li>
        </ul>
        <h2>Course Duration</h2>
        <p>10 weeks</p>
        <h2>Course Instructor</h2>
        <p>Suicide Sakthivel, Senior at suicide and best  Consultant with dusyanth durai singam for about 20 years of industry experience</p>
      </section>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default InformationTechnology;
