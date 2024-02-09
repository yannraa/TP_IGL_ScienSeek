import React, { useState } from 'react';
import Login from '../Image/Login.PNG'
import Logo from '../Image/Logo.PNG';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navvbar from './Navvbar';
import axios from 'axios';
const CreateModeraPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Ajouter cette ligne
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(""); 
   

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value); // Ajouter cette fonction
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
       
    // Vérifie si les mots de passe correspondent
    if (password !== confirmPassword) {
      setPasswordError('Les mots de passe ne correspondent pas');
      return;
    }

    // Efface l'erreur de mot de passe si les mots de passe correspondent
    setPasswordError('');

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('first_name', firstname);
      formData.append('last_name', lastname);
      formData.append('username', username);
      formData.append('password', password);
      // Envoie une requête POST au backend pour créer un nouveau modérateur
      const response = await axios.post('http://localhost:8000/users/moderators', formData, {
        headers: {
          'Content-Type': 'application/json' 
        }
      });
    

      // Si la requête est réussie, affichez un message de succès
      console.log('Modérateur créé avec succès:', response.data);

      // Redirigez l'utilisateur vers une autre page après la création du modérateur si nécessaire
    } catch (error) {
      // Si une erreur se produit lors de la requête, affichez l'erreur dans la console
      console.error('Erreur lors de la création du modérateur:', error);
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
            <label htmlFor="firstname">Prenom</label>
            <br />
            <br />
            <input
              type="text"
              id="firstname"
              value={firstname}
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
              value={lastname}
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
              value={username}
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

  

export default CreateModeraPage;