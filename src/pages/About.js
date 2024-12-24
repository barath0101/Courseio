import React from 'react';
import './About.css';
import Footer from './Footer'; 
import image1 from '../png/like5.jpg'; 
import image2 from '../png/like4.jpeg';
import image3 from '../png/like1.jpg';
import image4 from '../png/like2.webp';
import image5 from '../png/like3.jpeg';

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="header-section">
                   
                    
                </div>
            </div>

            <div className="content-wrapper">
                <div className="images-section">
                    <div className="image-box">
                        <img src={image4} alt="Illustration 1" />
                    </div>
                    <div className="image-box">
                        <img src={image5} alt="Illustration 2" />
                    </div>
                    <div className="image-box">
                        <img src={image1} alt="Illustration 3" />
                    </div>
                    <div className="image-box">
                        <img src={image2} alt="Illustration 4" />
                    </div>
                    <div className="image-box">
                        <img src={image3} alt="Illustration 5" />
                    </div>
                </div>
                <div className="text-section">
                    <h2>Upskilling talent for the <span className="highlight">careers of the future</span></h2>
                    <p>Courseio began when Stanford instructors Sebastian Thrun and Peter Norvig had a revolutionary idea to offer their "Introduction to Artificial Intelligence" course online—to anyone, for free.</p>
                    <p>Over 160,000 students in more than 190 countries enrolled, demanding a new way to deliver education. A startling discovery emerged: The top 400 students weren’t from Stanford. This revelation sparked a mission to make lifelong learning more equitable and inclusive. Courseio has been expanding opportunities ever since. Courseio is now part of Accenture.</p>
                </div>
            </div>

            <Footer /> {}
        </div>
    );
};

export default About;
