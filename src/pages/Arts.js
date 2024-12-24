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
          <h1>Explore Topics and Skills in Arts</h1>
          <div className="topics-grid">
           
            
            
            <Link to="/bachelor-of-computer-application" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://www.isbr.in/blogs/wp-content/uploads/2023/05/BCA-Admission.jpg')" }}
              >
                <h3> BCA</h3>
              </div>
            </Link>
            <Link to="/bsc-maths" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUEfTMNYp18QfrzeRf_5_JYcwRVGr53RbXw&s')" }}
              >
                <h3> Bsc.Maths</h3>
              </div>
            </Link>
           
            <Link to="/master-of-commerce" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://www.usatoday.com/gcdn/-mm-/4393ac1802dc12f31bfefe3e4c7ace080b103454/c=0-149-3000-1844/local/-/media/2018/02/13/USATODAY/USATODAY/636541449500670678-B01-GRADUATES-0718-78311032.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp')" }}
              >
                <h3>Master of Commerce</h3>
              </div>
            </Link>
            <Link to="/master-of-commerce" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01R7woo8ur7p6ASwGivu7AzayRawGf7oS4A&s')" }}
              >
                <h3>BCOM</h3>
              </div>
            </Link>
            <Link to="/master-of-commerce" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3ImDSddwkttblZlIDGPwlyhq7uDUi8MChg&s')" }}
              >
                <h3>MCA</h3>
              </div>
            </Link>
            <Link to="/master-of-commerce" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://c0.wallpaperflare.com/preview/802/621/185/adult-analyzing-black-and-white-blond-hair.jpg')" }}
              >
                <h3> English Literature</h3>
              </div>
            </Link>
            <Link to="/master-of-commerce" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKyMd088AowWZ1f9oFh6GnfZqnii84ln6BA&s')" }}
              >
                <h3> Chemistry</h3>
              </div>
            </Link>
            <Link to="/master-of-commerce" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/271/986/465/nature-plants-macro-depth-of-field-wallpaper-preview.jpg')" }}
              >
                <h3> Botany</h3>
              </div>
            </Link>
            <Link to="/master-of-commerce" className="topic-card">
              <div
                className="topic-content"
                style={{ backgroundImage: "url('https://media.gettyimages.com/id/1421153472/video/flock-birds-ruffs-flies-over-the-lake-on-a-cloudy-autumn-evening.jpg?s=640x640&k=20&c=Mt-DIKmCTjPnh1KEud54dlnKSjxi8Xbhx3wMGC1pOmc=')" }}
              >
                <h3>Zoology</h3>
              </div>
            </Link>
          </div>
          </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Engineering;
