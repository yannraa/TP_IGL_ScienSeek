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
            backgroundColor: '#8BBFFF',
            padding: '30px',
            borderRadius: '15px',
            position: 'absolute',
            top: '88%',
            left: '77%',
            transform: 'translate(-50%, -50%)',
            width:'25%', 

          }}

        >
      {/* <form style={{  flex: '1', padding: '0 20px' }}> */}

      <div className="form-group">
  <label htmlFor="email" style={{color: '#4E4E4E', fontSize:'20px', fontWeight:'600'}}>E-mail</label>
  <br /><br />
  <input type="email" id="email" value={email} onChange={handleEmailChange} className="input-field"  style={{borderRadius:'5px', width:'95%', height:'30px', backgroundColor: '#E1EBF6', border:'Background'}}/>
  <br /><br />
</div>

<div className="form-group">
  <label htmlFor="first-name" style={{color: '#4E4E4E', fontSize:'20px', fontWeight:'600'}}>Prénom</label>
  <br /><br />
  <input type="text" id="first-name" value={firstName} onChange={handleFirstNameChange} className="input-field" style={{borderRadius:'5px', width:'95%', height:'30px', backgroundColor: '#E1EBF6', border:'Background'}}/>
  <br /><br />
</div>

<div className="form-group">
  <label htmlFor="last-name" style={{color: '#4E4E4E', fontSize:'20px', fontWeight:'600'}}>Nom</label>
  <br /><br />
  <input type="text" id="last-name" value={lastName} onChange={handleLastNameChange} className="input-field" style={{borderRadius:'5px', width:'95%', height:'30px', backgroundColor: '#E1EBF6', border:'Background'}} />
  <br /><br />
</div>

<div className="form-group">
  <label htmlFor="username" style={{color: '#4E4E4E', fontSize:'20px', fontWeight:'600'}}>Nom d’utilisateur</label>
  <br /><br />
  <input type="text" id="username" value={userName} onChange={handleUserNameChange} className="input-field" style={{borderRadius:'5px', width:'95%', height:'30px', backgroundColor: '#E1EBF6', border:'Background'}} />
  <br /><br />
</div>

<div className="form-group">
  <label htmlFor="password" style={{color: '#4E4E4E', fontSize:'20px', fontWeight:'600'}}>Mot de passe</label>
  <br /><br />
  <div className="password-input">
    <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={handlePasswordChange} className="input-field" style={{borderRadius:'5px', width:'95%', height:'30px', backgroundColor: '#E1EBF6', border:'Background'}}/>
    <button type="button" onClick={handleTogglePassword} className="password-toggle-button" style={{backgroundColor:'#E1EBF6', border:'Background', borderRadius:'5px', marginTop:'5px', marginBottom:'15px'}}>
      {showPassword ? '👁️' : '🔒'}
    </button>
  </div>
</div>

        {/* --------------------------------------------------------------------------------------
*/}

{/* --------------------------------------------------------------------------------------
*/}


<div className="submit-group">
  <button
    type="button"
    onClick={handleSubmit}
    style={{
      whiteSpace: 'nowrap',
      backgroundColor: '#E1EBF6', // Adding background color
      color: '#000000', // Adding text color for better readability
      padding: '10px 20px', // Adding padding for better appearance
      border: 'none', // Removing default border
      borderRadius: '5px', // Adding border radius for rounded corners
      cursor: 'pointer', // Changing cursor to indicate interactivity
   marginLeft:'26%'
    }}
    className="login-button"
  >
    Créer un compte
  </button>
</div>

      {/* </form> */}
      </div>
      <a href="/LoginPage" style={{

            padding: '40px',
            borderRadius: '10px',
            position: 'absolute',
            top: '155%',
            left: '90%',
            transform: 'translate(-50%, -50%)',
            width: '650px'
          }}> <p>vous avez déja un compte? se connecter     </p></a>

      </div>

      </div>










  );
};

export default CreateAccountPage;