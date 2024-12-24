import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DataScience.css';
import Footer from './Footer';

const DataScience = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enroll-datascience');
  };

  return (
    <div className='main'>
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>Data Science Course</h1>
            <p>Unlock the power of data with our comprehensive Data Science course. Learn to analyze, visualize, and model data to make informed decisions.</p>
            <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This course covers essential topics such as:</p>
            <ul>
              <li>Data Cleaning and Preprocessing</li>
              <li>Exploratory Data Analysis</li>
              <li>Machine Learning Algorithms</li>
              <li>Data Visualization Techniques</li>
              <li>Big Data and Cloud Computing</li>
            </ul>
            <h2>Course Duration</h2>
            <p>10 weeks</p>
            <h2>Course Instructor</h2>
            <p>Albert Aakash No: 1 , Data Scientist with 10+ years of experience</p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DataScience;
