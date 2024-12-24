// src/BscMaths.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BscMaths.css';
import Footer from './Footer';

const BscMaths = () => {
  return (
    <div className='main'>
      <div className="main-container">
        <div className="course-container">
          <header className="course-header">
            <h1>BSc. Mathematics Course</h1>
            <p>Dive deep into the world of mathematics with our comprehensive BSc. Maths program. Covering fundamental to advanced topics, this course is designed to equip you with the necessary skills for a successful career in mathematics and related fields.</p>
            <Link to="/enroll-bsc-maths">
              <button className="enroll-button">Enroll Now</button>
            </Link>
          </header>
          
          <section className="course-content">
            <h2>Course Overview</h2>
            <p>This course covers a wide range of topics, including:</p>
            <ul>
              <li>Calculus</li>
              <li>Algebra</li>
              <li>Geometry</li>
              <li>Statistics</li>
              <li>Discrete Mathematics</li>
              <li>Linear Algebra</li>
              <li>Number Theory</li>
              <li>Differential Equations</li>
            </ul>
            <h2>Course Duration</h2>
            <p>3 Years</p>
            <h2>Course Instructor</h2>
            <p>Dr.Barath, PhD in Mathematics with 15+ years of teaching experience</p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BscMaths;
