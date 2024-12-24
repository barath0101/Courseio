import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';
import './Engineering.css';

const Architect = () => {
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
          <h1>Explore Topics and Skills in Architecture</h1>
          <div className="topics-grid">
            <Link to="/bachelor-of-architecture" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlForBZZiJY5O1YlonXEBPLNkfy64Z3W2_wg&s')" }}
              >
                <h3> Bachelor of Architecture</h3>
              </div>
            </Link>
            <Link to="/building-technology" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/995/343/769/design-architecture-construction-engineering-wallpaper-preview.jpg')" }}
              >
                <h3> Building Technology</h3>
              </div>
            </Link>
            <Link to="/master-of-architecture" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEaP6p6v4OieSfyAFRavvHnB87X6DJ7wMuw&s')" }}
              >
                <h3> Master of Architecture</h3>
              </div>
            </Link>
            <Link to="/master-of-architecture" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://img.freepik.com/free-photo/set-designer-work-indoors_23-2149837022.jpg')" }}
              >
                <h3>Urban and Regional Planning</h3>
              </div>
            </Link>
            <Link to="/master-of-architecture" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://www.dbuu.ac.in/architecture/images/planning/course-1.webp')" }}
              >
                <h3>Bachelor of Planning</h3>
              </div>
            </Link>
            <Link to="/master-of-architecture" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/0b/8c/55/0b8c551e7041ac733f985a40c10343c7.jpg')" }}
              >
                <h3>Landscape Architecture</h3>
              </div>
            </Link>
            <Link to="/master-of-architecture" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AH8BeTxDgZYEn8pM3NaufsE2CYfguS_hgw&s')" }}
              >
                <h3>Design Theory</h3>
              </div>
            </Link>
            <Link to="/master-of-architecture" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2Z4vsRpFsSp5P2W8180uP59bC8qAZAvKOg&s')" }}
              >
                <h3>Construction Management</h3>
              </div>
            </Link>
            <Link to="/master-of-architecture" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTMajpb9udMV55cLguAj_zibPW7dCZYcgcg&s11111111111')" }}
              >
                <h3>Interior Architecture</h3>
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

export default Architect;
