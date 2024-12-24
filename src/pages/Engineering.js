import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';
import './Engineering.css';

const Engineering = () => {
  const [professionDropdownOpen, setProfessionDropdownOpen] = useState(false);

  const professionDropdownRef = useRef(null);

  const handleProfessionClick = () => {
    setProfessionDropdownOpen(!professionDropdownOpen);
  };

  return (
    <div className="main">
      <nav className="navbar">
        <ol className="title">
          <h1>Courseio</h1>
        </ol>
        <ul className="nav-links">
          <li>
            <NavLink to="/home" exact activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="home-container">
        <div className="content">
          <h1>Explore Topics and Skills in Engineering</h1>
        
          <div className="topics-grid">
            <Link to="/datascience" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://i.pinimg.com/originals/54/dd/2a/54dd2a6c17f894e233848e18eaa242d9.jpg')" }}
              >
                <h3>Data Science</h3>
              </div>
            </Link>
            <Link to="/iot" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://www.cloud4c.com/qa/sites/qa/files/2022-10/don%E2%80%99t-let-your-IoT-Projects-fail-again_Banner.jpg')" }}
              >
                <h3>Internet Of Things (IoT)</h3>
              </div>
            </Link>
            <Link to="/cybersecurity" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://img.freepik.com/free-vector/cyber-security-concept_23-2148534852.jpg')" }}
              >
                <h3> Cyber Security</h3>
              </div>
            </Link>
            <Link to="/cybersecurity" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQPQMsVzYkKddxdbDuMhtnCKjzaMm_8yGmQ&s')" }}
              >
                <h3>AI & DS</h3>
              </div>
            </Link>
            <Link to="/cybersecurity" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7opuVg8hr5f-iTvbghIBbu5zDIbsTGFrE6A&s')" }}
              >
                <h3>Mechanical Engineering</h3>
              </div>
            </Link>
            <Link to="/cybersecurity" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqniACmXio52iMl1_haTyc8eJj_GXcO7sCA&s')" }}
              >
                <h3>EEE</h3>
              </div>
            </Link>
            <Link to="/cybersecurity" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYNrkS3RNnV1oR13AYqybQmc0HmNOHK3P1w&s')" }}
              >
                <h3>Information technology</h3>
              </div>
            </Link>
            <Link to="/cybersecurity" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAyqUNUhpc32kvT50_zI5B77zg2xEoqxZXw&s')" }}
              >
                <h3>ECE</h3>
              </div>
            </Link>
            <Link to="/cybersecurity" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaBfjBHFk3Rg9GSdIUJMchYwcCRWx2VUHJA&s')" }}
              >
                <h3>Civil Engineering</h3>
              </div>
            </Link>
            
            
            {}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Engineering;
