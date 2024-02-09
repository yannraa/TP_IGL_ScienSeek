import React, { useState} from 'react';

import Logo from '../Image/Logo.PNG';
import rech from '../Image/rech.png';
import { useNavigate } from 'react-router-dom';

const Navvbar2 = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [rechercheActive, setRechercheActive] = useState(false);
  const [favorisActive, setFavorisActive] = useState(false);

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      alert(`chercher pour ${searchValue}`);
    } else {
      alert('entrez une recherche valide SVP');
    }
  };

  const handleRechercheClick = () => {
    setRechercheActive(true);
    setFavorisActive(false);
  };
  const handleSeDeconnecter = () => {
    // Navigating to LoginPage
    navigate('/LoginPage');
  };


  return (
    <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffff', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' , position:'fixed'}}>

      <img
        style={{ padding: '10px', height: '32px', paddingRight: '100px', paddingLeft: '40px' }}
        src={Logo}
        alt="Logo"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />




        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
            <img
            src={rech}
            alt="rech"
            style={{
              cursor: 'pointer',
              height: '15px',

              zIndex: 999, // Add zIndex to bring it to the front
            }}
            onClick={handleSearch}
          />
         
          <input
            type="text"
            placeholder="Rechercher un Article..."
            style={{
              height: '5px',
              padding: '11.5px',
              paddingLeft: '30px',
              backgroundColor: '#ffff',
              borderRadius: '12px',
              borderColor: '#0E00AF',
              width: '370px',
              fontSize: '10px',
              marginLeft: '-20px',
            }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            style={{
              marginLeft: '-73px',
              padding: '5px 7px 5px 7px',
              color: '#ffff',
              borderRadius: '6px',
              backgroundColor: '#3E5CFB',
              border: 'none',
              cursor: 'pointer',
              fontSize: '10px',
            }}
            onClick={handleSearch}
          >
            Rechercher
          </button>
        </div>





      <button
        style={{
          marginLeft: '145px',
          marginRight: '25px',
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
          padding: '5px',
          backgroundColor: '#ffff',
          borderRadius: '5px',
          borderColor: '#0E00AF',
          width: '130px',
          color: '#0E00AF',
          boxShadow: '3px 3px 0px rgba(14, 0, 175, 1)',
          marginRight: '10px',
        }}
            onClick={handleSeDeconnecter}
    >
      
        Se Deconnecter
      </button>

    </div>
  );
};

export default Navvbar2;