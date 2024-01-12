import React, { useState } from 'react';
import '../App.css';
import Logo from '../Image/Logo.PNG';
import rech from '../Image/rech.png';

const Navvbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [rechercheActive, setRechercheActive] = useState(false);
  const [favorisActive, setFavorisActive] = useState(false);

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      alert(`cherchan pour ${searchValue}`);
    } else {
      alert('entrez une recherche valide SVP');
    }
  };

  const handleRechercheClick = () => {
    setRechercheActive(true);
    setFavorisActive(false);
  };

  const handleFavorisClick = () => {
    setFavorisActive(true);
    setRechercheActive(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '12px', backgroundColor:'#ffff', }}>
      <span>
        <img
          src={Logo}
          alt="Logo"
          style={{ height: '32px', position: 'absolute', top: '17px', left: '15px' }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <img
          src={rech}
          alt="rech"
          style={{ position: 'absolute', left: '260px', top: '21px', cursor: 'pointer', height: '25px' }}
          onClick={handleSearch}
        />

        <input
          type="text"
          placeholder="Rechercher un Article..."
          style={{
            height: '7px',
            padding: '15px',
            marginLeft: '230px',
            paddingLeft: '60px',
            backgroundColor: '#ffff',
            borderRadius: '17px',
            borderColor: '#0E00AF',
            width: '400px',
            fontSize :'16px',
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button
          style={{
            position: 'absolute',
            top: '16px',
            left: '617px',
            padding: '8px 5px 8px 5px',
            color: '#ffff',
            borderRadius: '10px',
            backgroundColor: '#3E5CFB',
            border: 'none',
            cursor: 'pointer',
            fontSize :'16px',
          }}
          onClick={handleSearch}
        >
          Rechercher
        </button>

        <button
          style={{
            marginLeft: '200px',
            marginRight: '100px',
            padding: '12px',
            color: rechercheActive ? '#3E5CFB' : '#0E00AF',
            fontWeight: rechercheActive ? 'bold' : 'normal',
            border: 'none',
            backgroundColor: '#ffff',
            cursor: 'pointer',
            position: 'relative',
            fontSize :'16px',
          }}
          onClick={handleRechercheClick}
        >
          Recherche
          {rechercheActive && (
            <div
              style={{
                position: 'absolute',
                bottom: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '4px',
                width: '80px',
                backgroundColor: '#3E5CFB',
                borderRadius: '5px',
                fontSize :'16px',
              }}
            ></div>
          )}
        </button>

        <button
          style={{
            marginRight: '100px',
            padding: '12px',
            color: favorisActive ? '#3E5CFB' : '#0E00AF',
            fontWeight: favorisActive ? 'bold' : 'normal',
            border: 'none',
            backgroundColor: '#ffff',
            cursor: 'pointer',
            position: 'relative',
            fontSize :'16px',
          }}
          onClick={handleFavorisClick}
        >
          Favoris
          {favorisActive && (
            <div
              style={{
                position: 'absolute',
                bottom: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '4px',
                width: '80px',
                backgroundColor: '#3E5CFB',
                borderRadius: '5px',
                fontSize :'16px',
              }}
            ></div>
          )}
        </button>

        <button
          style={{
            padding: '8px',
            backgroundColor: '#ffff',
            borderRadius: '5px',
            borderColor: '#0E00AF',
            width: '155px',
            boxShadow: '0px 2px 2px rgba(14, 0, 175, 0.7)',
            fontSize :'16px',
          }}
        >
          Se Deconnecter
        </button>
      </span>
    </div>
  );
};

export default Navvbar;