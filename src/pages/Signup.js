import React, { useState } from 'react';
import './Signup.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import img456 from '../components/loin-image.jpg';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/Fitfreak/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.surname,
          email: formData.email,
          password: formData.password
        }),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      alert('An error occurred while signing up.');
      setError('An error occurred while signing up.');
    }
  };

  return (
    
    <div className="signup-container">
      <div className='signup-left'>
        <img src={img456} alt="Signup" className='joker'></img>
      </div>
      <div className="signup-right">
        <h2>Sign Up</h2>
        <div className="social-signup">
          <button className="social-button google"><FaGoogle /></button>
          <button className="social-button"><FaFacebook /></button>
        </div>
        <div className="divider">OR</div>
        {error && <div className="error-message">{error}</div>}
        <form className="signup-form" onSubmit={handleSignup}>
          <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
          <input type="text" placeholder="Surname" name="surname" value={formData.surname} onChange={handleChange} required />
          <input type="email" placeholder="E-mail" name="email" value={formData.email} onChange={handleChange} required />
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
          <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/">Log In</a></p>
        <p>By signing up, I accept Courseio's <a href="/terms">Terms & Conditions</a></p>
      </div>
    </div>
  );
};

export default Signup;
