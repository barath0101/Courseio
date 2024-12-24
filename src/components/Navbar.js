import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({
  profileDropdownOpen,
  profileDropdownRef,
  handleProfileClick,
  handleLogout,
}) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/'); // Navigate to the login page after logout
  };

  return (
    <nav className="navbar">
      <div className="title">
        <h1>Courseio</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/home" exact="true" activeClassName="active-link">
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
        <li className="profilemenu" ref={profileDropdownRef}>
          <span className="profile-icon" onClick={handleProfileClick}>
            <FaUserCircle size={30} />
          </span>
          {profileDropdownOpen && (
            <div className="dropdown-menu slide-down">
              <button onClick={handleLogoutClick}>Logout</button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
