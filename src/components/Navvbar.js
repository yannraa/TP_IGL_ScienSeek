import React, { useState } from 'react';

import Logo from '../Image/Logo.PNG';
import rech from '../Image/rech.png';
import { useNavigate } from 'react-router-dom';

const Navvbar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [rechercheActive, setRechercheActive] = useState(false);
  const [favorisActive, setFavorisActive] = useState(false);

  const handleSeDeconnecter = () => {
    // Navigating to LoginPage
    navigate('/LoginPage');
  };


  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      // Navigating to Pagerechpage
      navigate('/PageRechPage');
    } else {
      alert('entrez une recherche valide SVP');
    }
  };

  const handleRechercheClick = () => {
    setRechercheActive(true);
    setFavorisActive(false);
    navigate('/PageRechPage');
  };

  const handleFavorisClick = () => {
    setFavorisActive(true);
    setRechercheActive(false);
    navigate('/FavorisPage');
  };

  return (
    <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffff', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' , position:'fixed'}}>

      <img
        style={{ padding: '10px', height: '32px', paddingRight: '40px', paddingLeft: '40px' }}
        src={Logo}
        alt="Logo"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />


      <button
        style={{
          marginLeft: '650px',
          marginRight: '70px',
          padding: '10px',
          color: rechercheActive ? '#3E5CFB' : '#0E00AF',
          fontWeight: rechercheActive ? 'bold' : 'normal',
          border: 'none',
          backgroundColor: '#ffff',
          cursor: 'pointer',
          position: 'relative',
          borderBottom: rechercheActive ? '3px solid #3E5CFB' : 'none',
        }}
        onClick={handleRechercheClick}
      >
        Recherche
      </button>

      <button
        style={{
          marginRight: '70px',
          padding: '10px',
          color: favorisActive ? '#3E5CFB' : '#0E00AF',
          fontWeight: favorisActive ? 'bold' : 'normal',
          border: 'none',
          backgroundColor: '#ffff',
          cursor: 'pointer',
          position: 'relative',
          borderBottom: favorisActive ? '3px solid #3E5CFB ' : 'none',
        }}
        onClick={handleFavorisClick}
      >
        Favoris
      </button>
      <button
  style={{
    padding: '8px',
    backgroundColor: '#ffff',
    borderRadius: '5px',
    borderColor: '#0E00AF',
    width: '155px',
    boxShadow: '0px 2px 2px rgba(14, 0, 175, 0.7)',
    marginRight: '20px',
    cursor: 'pointer',
  }}
  onClick={handleSeDeconnecter}
>
  Se Deconnecter
</button>


    </div>
  );
};

export default Navvbar;