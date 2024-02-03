import React, { useState } from 'react';
import Login from '../Image/Login.PNG'
import Logo from '../Image/Logo.PNG';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const CreateAccountPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setPasswordError('Les mots de passe ne correspondent pas');
      return;
    }
  
    // Clear the password error if passwords match
    setPasswordError('');
  
    try {
      // TODO: Implement your actual form submission logic here (e.g., API call)
      // Replace the following line with your actual logic
      const registrationSuccessful = await submitRegistrationForm();
  
      if (registrationSuccessful) {
        // Navigate to PageAdmin on successful form submission
        navigate('/PageRechPage');
      } else {
        // Handle the case where registration failed
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  const submitRegistrationForm = async () => {
    // Implement your form submission logic here (e.g., API call)
    // Return true if registration is successful, false otherwise
    // For example, you might use axios or fetch to make an API call
    // and return a boolean based on the response from the server
    return true; // Replace with actual logic
  };


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="container">

     <div className="left">
     <div className="full-screen-image">
     <img src={Login} alt=''  className="full-width" style={{ width:
'900px', height: '950px', objectFit: 'cover' }}/>
     </div>
     </div>
        <div className="right">
        <img src={Logo} alt="Logo de l'application"   style={{

            padding: '40px',
            borderRadius: '10px',
            position: 'absolute',
            top: '15%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            width: '550px'
          }}/>
        {/* <div style={{ backgroundColor: '#76B5FF', padding: '40px',
borderRadius: '50px' }}> */}
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
      {/* <form style={{  flex: '1', padding: '0 20px' }}> */}
        <div className="form-group">
        <label htmlFor="username">Nom d’utilisateur</label>
        <br />
        <br />
          <input type="text" id="username" value={userName}
onChange={handleUserNameChange} className="input-field" />
          <br /><br />

        </div>
        {/* --------------------------------------------------------------------------------------
*/}

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <br />
          <br/>
          <div className="password-input">
          <input  type={showPassword ? 'text' : 'password'}
id="password" value={password} onChange={handlePasswordChange}
className="input-field" />

            <button
              type="button"
              onClick={handleTogglePassword}
              className="password-toggle-button"
            >
              {showPassword ? '👁️' : '🔒'}
            </button>

          </div>

        </div>
        {/* --------------------------------------------------------------------------------------
*/}
        <div className="form-group">
        <br/>

        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <br /><br />

        <div className="password-input">
          <div>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
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
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}


          </div>
</div>
{/* --------------------------------------------------------------------------------------
*/}
<div className="form-group">
<br />
<label htmlFor="email">E-mail</label>
<br /><br />

          <input type="email" id="email" value={email}
onChange={handleEmailChange}  className="input-field" />

          <br /><br />
</div>


        <div className="submit-group">
          <button type="button"  onClick={handleSubmit}  style={{
whiteSpace: 'nowrap' }} className="login-button">
          Creer un compte
          </button>
        </div>

      {/* </form> */}
      </div>
      <a href="/LoginPage" style={{

            padding: '40px',
            borderRadius: '10px',
            position: 'absolute',
            top: '90%',
            left: '80%',
            transform: 'translate(-50%, -50%)',
            width: '650px'
          }}> <p>vous avez déja un compte? se connecter     </p></a>

      </div>

      </div>










  );
};

export default CreateAccountPage;