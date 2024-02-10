import React, { useState } from 'react';
import LoginImage from '../Image/Login.PNG';
import Logo from '../Image/Logo.PNG';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import '../App.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);
  
      const response = await axios.post('http://localhost:8000/token', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
  
      const { token , role  } = response.data;
  
      setMessage(response.data.message);
      localStorage.setItem('email', email);
      console.log(token);
      localStorage.setItem('token', token);
      localStorage.setItem('role', role)
      setButtonActive(true);
      setTimeout(() => {
        setButtonActive(false);
        
        if (role === 1) {
          navigate('/PageAdmin'); // Navigate to admin page
        } else {
          navigate('/PageRechPage'); // Navigate to search page
        }
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage('Error logging in. Please try again.');
    }
  };
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container" style={{ backgroundColor: '#E1EBF6' }}>
      <div className="left"> 
        <div className="full-screen-image">
          <img src={LoginImage} alt='' className="full-width" style={{ width: '800px', height: '950px', objectFit: 'cover' }}/>
        </div>
      </div>

      <div className="right">
        <img src={Logo} alt="Logo de l'application" style={{
          padding: '40px', 
          borderRadius: '10px',
          position: 'absolute',
          top: '20%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          width: '650px'
        }}/>

        <div className="col-sm-6"
          style={{
            backgroundColor: '#76B5FF',
            padding: '40px',
            borderRadius: '50px',
            position: 'absolute',
            top: '60%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div>
            <label style={{color:'F6F6F6'}}>Email</label>
            <br />
            <br/>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              style={{
                width: '400px',
                height: '20px',
                fontSize: '16px',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: '#E1EBF6',
                outline: 'none'
              }}
            />
          </div>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <div className="form-group">
            <label style={{color:'F6F6F6'}}>Mot de passe</label>
            <br />
            <br/>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field" 
                style={{
                  width: '400px',
                  height: '20px',
                  fontSize: '16px',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#E1EBF6',
                  outline: 'none'
                }} 
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="password-toggle-button"
                style={{
                  position: 'absolute',
                  right: '50px',
                  top: '58%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? '👁️' : '🔒'}
              </button>
            </div>
          </div>
          <br />
          <div>
            <h1></h1>
            <button
              type="button"
              onClick={handleLogin}
              style={{
                width: '420px',
                height: '40px',
                fontSize: '16px',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: buttonActive ? '#B0C5E8' : '#E1EBF6',
                outline: 'none',
                cursor: 'pointer',
                color: '#8BBFFF'
              }} 
            >
              Se connecter
            </button>
          </div>
        </div>
        <Link to="/CreateAccountPage" style={{
          padding: '40px', 
          borderRadius: '10px',
          position: 'absolute',
          top: '90%',
          left: '83%',
          transform: 'translate(-50%, -50%)',
          width: '650px'
        }}>
          <p>Vous n’avez pas de compte? S’inscrire</p>
        </Link>
      </div>
      <style>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default LoginPage;
