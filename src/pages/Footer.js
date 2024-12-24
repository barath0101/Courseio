import React from 'react';
import './Footer.css'; // Make sure to create and include this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1>Courseio</h1>
      </div>
      <div>
        <h4>COURSEIO</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/home">Careers</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
          
        </ul>
      </div>
      <div>
        <h4>COMMUNITY</h4>
        <ul>
          <li><a href="#">Learners</a></li>
          <li><a href="#">Partners</a></li>
       
         
        </ul>
      </div>
      <div>
        <h4>CONNECT</h4>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">X (formerly Twitter)</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
