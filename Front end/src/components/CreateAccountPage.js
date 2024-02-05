import React, { useState, useEffect } from 'react';
import Login from '../Image/Login.PNG';
import Logo from '../Image/Logo.PNG';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAccountPage = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/token', {
        email: email,
        first_name: firstName,
        last_name: lastName,
        username: userName,
        password: password,
      });

      const authToken = response.data.token;
      setAuth(authToken);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Registration successful:', responseData);
        // You can handle navigation or other actions here
      } else {
        // Registration failed
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="left">
        <div className="full-screen-image">
          <img
            src={Login}
            alt=""
            className="full-width"
            style={{
              width: '900px',
              height: '950px',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <div className="right">
        <img
          src={Logo}
          alt="Logo de l'application"
          style={{
            padding: '40px',
            borderRadius: '10px',
            position: 'absolute',
            top: '15%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            width: '550px',
          }}
        />
        <div
          style={{
            backgroundColor: '#76B5FF',
            padding: '30px',
            borderRadius: '50px',
            position: 'absolute',
            top: '55%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="form-group">
            <br />
            <label htmlFor="email">E-mail</label>
            <br />
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="input-field"
            />
            <br />
            <br />
          </div>

          <div className="form-group">
            <label htmlFor="Firstname">Prenom</label>
            <br />
            <br />
            <input
              type="text"
              id="firstname"
              value={firstName}
              onChange={handleFirstNameChange}
              className="input-field"
            />
            <br />
            <br />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Nomdefamille</label>
            <br />
            <br />
            <input
              type="text"
              id="lastname"
              value={lastName}
              onChange={handleLastNameChange}
              className="input-field"
            />
            <br />
            <br />
          </div>

          <div className="form-group">
            <label htmlFor="username">Nom d’utilisateur</label>
            <br />
            <br />
            <input
              type="text"
              id="username"
              value={userName}
              onChange={handleUserNameChange}
              className="input-field"
            />
            <br />
            <br />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <br />
            <br />
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="input-field"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="password-toggle-button"
              >
                {showPassword ? '👁️' : '🔒'}
              </button>
            </div>
          </div>

          <div className="submit-group">
            <button
              type="button"
              onClick={handleSubmit}
              style={{ whiteSpace: 'nowrap' }}
              className="login-button"
            >
              Creer un compte
            </button>
          </div>
        {/* </form> */}
        </div>
        <a
          href="/LoginPage"
          style={{
            padding: '40px',
            borderRadius: '10px',           
            position: 'absolute',
            top: '90%',
            left: '80%',
            transform: 'translate(-500%, -20%)',
            width: '650px',
          }}
        >
          <p>vous avez déja un compte? se connecter</p>
        </a>
      </div>
    </div>
  );
};

export default CreateAccountPage;
