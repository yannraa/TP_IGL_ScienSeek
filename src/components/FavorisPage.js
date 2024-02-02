import React from 'react';
import react, { useState } from 'react';
import Navvbar from './Navvbar';
import arrowFilters from '../Image/arrowFilters.svg';


const FavorisPage = () => {
  const articles = [
    {
      title: 'The Title 1',
      authors: ['Auteur1', 'Auteur2'],
      institutions: ['Institution1', 'Institution2'],
      date: 'Janvier 2017',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      title: 'The Title 2',
      authors: ['Auteur3', 'Auteur4'],
      institutions: ['Institution3'],
      date: 'Février 2017',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      title: 'The Title 3',
      authors: ['Auteur3', 'Auteur4'],
      institutions: ['Institution3'],
      date: 'Février 2017',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    // Add more articles as needed
  ];

 
  const handleTitleClick = (title) => {
    // Handle the click action here, e.g., navigate to a detailed view
    console.log(`Title "${title}" clicked`);
  };




  return (
    <div>
      
      <Navvbar style={{ position: 'fixed', zIndex: 999 /* or any higher value */ , top: 0,
        left: 0}} />

     
      

      <div
        style={{
          backgroundColor: '#E2EBF6',
          minHeight: '100vh',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0px',
        }}
      >
        <h2 style={{ color: '#0E00AF', fontSize: '23px', marginTop: '60px', marginLeft: '90px' }}>
          Résultats
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '0px' }}>
        {/* White rectangle with buttons */}
     
        </div>   
         {/* White big rectangle with sections */}
        <div style={{ display: 'flex', alignItems: 'center', paddingRight: '67px', paddingLeft: '67px', marginTop: '-8px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #B6B6B6',
              borderRadius: '2px',
              width: '100%',
              backgroundColor: '#FFFFFF',
            }}
          >
            {articles.map((article, index) => (
              <React.Fragment key={index}>
                <div style={{ display: 'flex', flexDirection: 'column' }}> {/* Make the title clickable */}
                <a href="#" onClick={() => handleTitleClick(article.title)} style={{ textDecoration: 'none', color: '#0E00AF' }}>
                  <h1 style={{ fontSize: '23px', fontWeight: '600', paddingLeft: '25px', paddingTop: '5px' }}>{article.title}</h1>
                </a>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '-15px', marginLeft: '20px' }}>
                    <p style={{ fontSize: '13px', fontWeight: '400', padidngLeft: '200px' }}>{article.authors.join(', ')}</p>
                    <p style={{ fontSize: '13px', fontWeight: '400' }}>{article.institutions.join(', ')}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px', gap: '8px' }}>
                    <p style={{ fontSize: '15px', fontWeight: '600' }}>Publié le:</p>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: '#0E00AF' }}> {article.date} </p>
                  </div>
                  <p style={{ fontSize: '15px', fontWeight: '500', paddingLeft: '20px', color: '#575757' }}>Résumé</p>
                  <p style={{ fontSize: '16px', fontWeight: '400', marginBottom: '10px', marginLeft: '40px', marginRight: '60px', marginTop: '-10px' }}>
                    {article.resume}
                  </p>
                </div>
                {index !== articles.length - 1 && <hr style={{ border: '0.5px solid #B6B6B6', margin: '20px 0' }} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavorisPage;