// AjoutModerateurButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const AjoutModerateurButton = () => {
  return (
    <Link to="/create-account">
      <div
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
        }}
      >
        Ajouter un Moderateur
      </div>
    </Link>
  );
};

export default AjoutModerateurButton;
