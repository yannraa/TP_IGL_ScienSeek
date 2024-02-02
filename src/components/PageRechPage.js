import React, { useState } from 'react';
import pageRechBack from '../Image/pageRechBack.png';
import Navvbar from './Navvbar';
import Logo from '../Image/Logo.PNG';
import rech from '../Image/rech.png';
import { useNavigate } from 'react-router-dom';

const PageRechPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      navigate('/ResultatRechPage');
    } else {
      alert('Please enter a valid search term.');
    }
  };
  return (
    <div >
      
      <Navvbar />
      <div
        style={{
          backgroundColor: '#E2EBF6',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left',
          minHeight: '100vh',
          backgroundImage: `url(${pageRechBack})`,
          fontSize: '18px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            marginTop: '140px',
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
              height: '31px',
              zIndex: 1, // Add zIndex to bring it to the front
            }}
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Rechercher un Article..."
            style={{
              height: '11px',
              padding: '18px',
              paddingLeft: '85px',
              backgroundColor: '#ffff',
              borderRadius: '15px',
              borderColor: '#0E00AF',
              width: '580px',
              fontSize: '18px',
              marginLeft: '-50px',
            }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            style={{
              marginLeft: '-120px',
              padding: '8px 5px 8px 5px',
              color: '#ffff',
              borderRadius: '10px',
              backgroundColor: '#3E5CFB',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
            }}
            onClick={handleSearch}
          >
            Rechercher
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default PageRechPage;