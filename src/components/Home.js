import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar'; 

const Home = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [professionDropdownOpen, setProfessionDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);
  const professionDropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setProfileDropdownOpen((prev) => !prev);
  };

  const handleProfessionClick = () => {
    setProfessionDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logged out");
    navigate('/');
    setProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (professionDropdownRef.current && !professionDropdownRef.current.contains(event.target)) {
        setProfessionDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="main">
      <Navbar
        profileDropdownOpen={profileDropdownOpen}
        professionDropdownOpen={professionDropdownOpen}
        profileDropdownRef={profileDropdownRef}
        professionDropdownRef={professionDropdownRef}
        handleProfileClick={handleProfileClick}
        handleProfessionClick={handleProfessionClick}
        handleLogout={handleLogout}
      />
      <div className="home-containerr">
        <div className="hero-section">
          <div className="hero-content">
            <h2>Knowledge for everyone</h2>
            <h3>Stay Focused And Stay Determined</h3>
            <Link to="/profession" className="btn-get-spotify-free">Explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
