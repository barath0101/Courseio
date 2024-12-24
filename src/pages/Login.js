import React, { useState } from 'react';
import './Login.css';
import { FaFacebook,FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import img345 from '../components/loin-immage.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const specialLoginCheck = () => {
    return email === 'barath123@gmail.com' && password === 'barath123';
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (specialLoginCheck()) {
      navigate('/admin');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/Fitfreak/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in.');
    }
  };

  return (
    <div className="login-container">
      <div className='login-left'>
        <img src={img345} alt="Login" className='joker' />
      </div>
      <div className="login-right">
        <h1 className="active-tab">Log In</h1>
        <div className="social-login">
          <button className="social-btn">
            <FaFacebook /> <a href='https://www.facebook.com'>Facebook</a>
            
            {/* <FaGoogle /> <a href='https://www.google.com'>Google</a> */}
          </button>
          <button className="social-btn">
            {/* <FaFacebook /> <a href='https://www.facebook.com'>Facebook</a> */}
            
            <FaGoogle /> <a href='https://www.google.com'>Google</a>
          </button>
        </div>
        <div className="divider">OR</div>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <div className="options">
            <label>
              <input type="checkbox" /> Keep me logged in
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p>By signing up, I accept Courseio's <a href="/terms">Terms & Conditions</a></p>
      </div>
    </div>
  );
};

export default Login;