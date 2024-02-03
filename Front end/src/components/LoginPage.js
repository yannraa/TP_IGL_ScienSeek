// LoginPage.js
import React, { useState } from 'react';
import Login from '../Image/Login.PNG'
import Logo from '../Image/Logo.PNG';
import { Link } from 'react-router-dom'; 
import '../App.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const handleLogin = () => {
    // Simulating a successful login for demonstration purposes
    const isLoginSuccessful = true; // Replace this with your actual login logic
  
    if (isLoginSuccessful) {
      // Logique de connexion réussie
      console.log('Username:', username);
      console.log('Password:', password);
  
      // Navigate to PageRechPage on successful login
      navigate('/PageRechPage');
    } else {
      // Handle failed login
      console.log('Login failed');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
 
  const handleButtonActive = () => {
    setButtonActive(true);
    setTimeout(() => {
      setButtonActive(false);
    }, 100);
  };

  return (
  
    <div className="container" style={{ backgroundColor: '#E1EBF6' }} >
      
     <div className="left"> 
    
     <div className="full-screen-image">
     <img src={Login} alt=''  className="full-width" style={{ width: '800px', height: '950px', objectFit: 'cover' }}/>
     </div>
    

     </div>

        <div className="right">
       
        
        <img src={Logo} alt="Logo de l'application"   style={{
            
            padding: '40px', 
            borderRadius: '10px',
            position: 'absolute',
            top: '20%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            width: '650px'
          }}/>
        {/* <div style={{ backgroundColor: '#76B5FF', padding: '40px', borderRadius: '50px' }}> */}
        {/* <div className="row">
        <div className="col-sm-6"> */}
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
      {/* <form style={{  flex: '1', padding: '0 20px' }}> */}
    <div >
          <label style={{color:'F6F6F6'}}>Nom d’utilisateur </label>
          <br />
          <br/>
          <input
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  className="input-field"
  style={{
    width: '400px',
    height: '20px', /* Augmentation de la hauteur */
    fontSize: '16px',
    padding: '8px', /* Ajout de rembourrage pour un meilleur espacement interne */
    borderRadius: '5px', /* Arrondi des coins */
    border: '1px solid #ccc', /* Ajout d'une bordure */
    backgroundColor: '#E1EBF6',
    outline: 'none' /* Retrait du contour par défaut lorsqu'il est en focus */
   
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
                height: '20px', /* Augmentation de la hauteur */
                fontSize: '16px',
                padding: '8px', /* Ajout de rembourrage pour un meilleur espacement interne */
                borderRadius: '5px', /* Arrondi des coins */
                border: '1px solid #ccc', /* Ajout d'une bordure */
                backgroundColor: '#E1EBF6',
                outline: 'none' /* Retrait du contour par défaut lorsqu'il est en focus */
               
              }} />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="password-toggle-button"
              style={{
                position: 'absolute',
                right: '50px', // Ajustez la position horizontale du bouton à l'intérieur de la case du mot de passe
                top: '58%', // Ajustez la position verticale du bouton à l'intérieur de la case du mot de passe
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
         
        <div >
          <h1></h1>
          <button type="button"   onClick={() => {
          handleLogin();
          handleButtonActive();
        }}
        style={{
          width: '420px',
          height: '40px',
          fontSize: '16px',
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          backgroundColor: buttonActive ? '#B0C5E8' : '#E1EBF6', // Changement de couleur lors du clic
          outline: 'none',
          cursor: 'pointer',
          color: '#8BBFFF', // Couleur du texte
        }} >
            Se connecter
          </button>
        </div>
      
      </div>
    
      <a href="/CreateAccountPage" style={{
            
            padding: '40px', 
            borderRadius: '10px',
            position: 'absolute',
            top: '90%',
            left: '83%',
            transform: 'translate(-50%, -50%)',
            width: '650px'
          }}> <p>vous n’avez pas de compte? s’inscrire   </p></a>
      
</div>
<style>
        {`
          body {
            overflow: hidden; /* Ajout de la propriété overflow: hidden sur le body */
          }
        `}
      </style>
     
      </div>
      
     

     
       
         
      


     
    
  );
};

export default LoginPage;