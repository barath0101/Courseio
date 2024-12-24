import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="left-section">
        <h1>Courseio</h1>
        <p>Free Courses</p>
      </div>
      <div className="right-section">
        <img 
          src="D:\React Project\review-project\src\png\pngg.png" 
          alt="Courseio" 
          className="course-image" 
        />
        <p className="description-text">
          Choose from hundreds of online courses and Experience in as a specialist organisations.
          Choose from hundreds of online courses and Experience in as a specialist organisations.Choose from hundreds of online courses and Experience in as a specialist organisations.Choose from hundreds of online courses and Experience in as a specialist organisations.
        </p>
        
        <button className="read-more-button">READ MORE</button>
      </div>
    </div>
  );
}

export default ContactUs;
