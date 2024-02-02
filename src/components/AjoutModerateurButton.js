// AjoutModerateurButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AjoutModerateurButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to CreateAccountPage when the button is clicked
    navigate('/CreateModeraPage');
  };

  return (
    <button
    style={{
      border: '2px solid #0E00AF',
      borderRadius: '10px',
      padding: '20px',
      margin: '0',
      backgroundColor: '#E1EBF6',
      color: '#0E00AF',
      fontWeight: 'bold',
      textAlign: 'center',
      cursor: 'pointer',
      width: '100%' ,
    }}
      onClick={handleClick}
    >
      Ajouter un Moderateur
    </button>
  );
};

export default AjoutModerateurButton;
