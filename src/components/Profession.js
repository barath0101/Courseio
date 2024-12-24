import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Profession.css';

const Profession = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [professionDropdownOpen, setProfessionDropdownOpen] = useState(false);

  const profileDropdownRef = useRef(null);
  const professionDropdownRef = useRef(null);

  const handleProfileClick = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleProfessionClick = () => {
    setProfessionDropdownOpen(!professionDropdownOpen);
  };

  const handleLogout = () => {
    
    console.log('Logged out');
  };

  return (
    <div className="profession-main">
      <Navbar
        profileDropdownOpen={profileDropdownOpen}
        professionDropdownOpen={professionDropdownOpen}
        profileDropdownRef={profileDropdownRef}
        professionDropdownRef={professionDropdownRef}
        handleProfileClick={handleProfileClick}
        handleProfessionClick={handleProfessionClick}
        handleLogout={handleLogout}
      />
      <div>
        <h1 className="profession-name">Profession</h1>
      </div>
      <div className="profession-container">
        <div className="profession-topics-grid">
          <Link to="/engineer" className="profession-topic-card">
            <div
              className="profession-topic-image"
              style={{ backgroundImage: "url('https://www.itl.cat/pngfile/big/290-2909186_1920x1080-data-id-data-src-walls-full-5.jpg')" }}
            ></div>
            <div className="profession-topic-details">
              <h3>Engineering</h3>
              <p>University of Engineering provides a comprehensive understanding of engineering principles and practical applications.</p>
            </div>
          </Link>
          <Link to="/arts" className="profession-topic-card">
            <div
              className="profession-topic-image"
              style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/LUX-Art_and_Science_Exhibition-Milstein_Hall.jpg/640px-LUX-Art_and_Science_Exhibition-Milstein_Hall.jpg')" }}
            ></div>
            <div className="profession-topic-details">
              <h3>Arts</h3>
              <p>University of Arts nurtures creativity and critical thinking through a deep dive into art history and modern practices.</p>
            </div>
          </Link>
          <Link to="/arch" className="profession-topic-card">
            <div
              className="profession-topic-image"
              style={{ backgroundImage: "url('https://media.istockphoto.com/id/823322674/photo/male-architect-hands-making-model-house.jpg?s=612x612&w=0&k=20&c=0NwNPlPRYu2OZNE03HQ1bHQIrzEMcssGB6Ne6E6i9VI=')" }}
            ></div>
            <div className="profession-topic-details">
              <h3>Architect</h3>
              <p>University of Architecture emphasizes design, planning, and project management to shape the built environment.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profession;
