import React from 'react';
import { Link } from 'react-router-dom';
import './DataScience.css';
import Footer from './Footer';

const Business = () => {
  
  return (
    <div className="main">
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>Internet of Things </h1>
            <p>Gain the skills and knowledge to thrive in the business world. Learn business strategies, management principles, and much more.</p>
            <Link to="/enroll-iot">
              <button className="enroll-button">Enroll Now</button>
            </Link>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This course covers key Internet of Things topics such as:</p>
            <ul>
              <li>Networks Strategy</li>
              <li>Networking Fundamentals</li>
              <li>Networking about Servers</li>
              <li>Internet advantages</li>
              <li>Advance ideas</li>
            </ul>
            <h2>Course Duration</h2>
            <p>12 weeks</p>
            <h2>Course Instructor</h2>
            <p>Malyutham Mani, MBA with 15+ years of experience in business management</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Business;
