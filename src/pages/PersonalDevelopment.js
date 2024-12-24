import React from 'react';
import { Link } from 'react-router-dom';
import './PersonalDevelopment.css';
import Footer from './Footer';



const PersonalDevelopment = () => {
  return (
    <div className='main'>
      <div className="main-container">
    <div className="course-container">
      <header className="course-header">
        <h1>Cyber Security Course</h1>
        <p>Empower yourself with skills and techniques for personal growth. Learn about time management, emotional intelligence, goal setting, and more.</p>
        <Link to="/enroll-cs">
          <button className="enroll-button">Enroll Now</button>
        </Link>
      </header>
      
      <section className="course-content">
        <h2>Course Overview</h2>
        <p>This course covers essential topics for personal growth, including:</p>
        <ul>
          <li>Time Management</li>
          <li>Emotional Intelligence</li>
          <li>Effective Communication</li>
          <li>Goal Setting and Achievement</li>
          <li>Building Resilience</li>
        </ul>
        <h2>Course Duration</h2>
        <p>8 weeks</p>
        <h2>Course Instructor</h2>
        <p>Dusyanth Durai Singam, Certified Life Coach with 10+ years of experience in personal development</p>
      </section>
</div>
</div>
      <Footer/>
    </div>
  );
}

export default PersonalDevelopment;
