import React from 'react';
import react, { useState } from 'react';
import Navvbar from './Navvbar';
import arrowFilters from '../Image/arrowFilters.svg';
import { useNavigate } from 'react-router-dom';


const ResultatRechPage = () => {
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

  // const navigate = useNavigate();
  const [isMotCleDropdownVisible, setMotCleDropdownVisible] = useState(false);
  const [isAuteurDropdownVisible, setAuteurDropdownVisible] = useState(false);
  const [isInstitutionDropdownVisible, setInstitutionDropdownVisible] = useState(false);
  const [isDateDropdownVisible, setDateDropdownVisible] = useState(false);


  const handleMotCleButtonClick = () => {
    setMotCleDropdownVisible(!isMotCleDropdownVisible);
  };

  const handleAuteurButtonClick = () => {
    setAuteurDropdownVisible(!isAuteurDropdownVisible);
  };

  const handleInstitutionButtonClick = () => {
    setInstitutionDropdownVisible(!isInstitutionDropdownVisible);
  };

  const handleDateButtonClick = () => {
    setDateDropdownVisible(!isDateDropdownVisible);
  };


  const keywords = ['Keyword 1', 'Keyword 2', 'Keyword 3', 'Keyword 4'];

  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const handleKeywordClick = (keyword) => {
    // Check if the keyword is already selected
    const isSelected = selectedKeywords.includes(keyword);

    // If selected, remove it; if not selected, add it
    setSelectedKeywords((prevSelected) =>
      isSelected
        ? prevSelected.filter((selected) => selected !== keyword)
        : [...prevSelected, keyword]
    );
  };






  const listeauteurs = ['auteur 1', 'auteur 2', 'auteur 3'];

  const [selectedauteurs, setSelectedauteurs] = useState([]);
  const handleauteurClick = (listeauteurs) => {
    // Check if the keyword is already selected
    const isSelected = selectedauteurs.includes(listeauteurs);

    // If selected, remove it; if not selected, add it
    setSelectedauteurs((prevSelected) =>
      isSelected
        ? prevSelected.filter((selected) => selected !== listeauteurs)
        : [...prevSelected, listeauteurs]
    );
  };







  
  const listeinstitutions = ['institution 1', 'institution 2'];

  const [selectedinstitutions, setSelectedinstitutions] = useState([]);
  const handleinstitutionClick = (listeinstitutions) => {
    // Check if the keyword is already selected
    const isSelected = selectedinstitutions.includes(listeinstitutions);

    // If selected, remove it; if not selected, add it
    setSelectedinstitutions((prevSelected) =>
      isSelected
        ? prevSelected.filter((selected) => selected !== listeinstitutions)
        : [...prevSelected, listeinstitutions]
    );
  };



  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);

  const handleApplyClick = () => {
    // Check if both start and end years are selected
    if (startYear !== null && endYear !== null) {
      // Handle the selected range as needed
      console.log('Selected Range:', [startYear, endYear]);
    }

    // Clear the selection after handling
    setStartYear(null);
    setEndYear(null);
  };

  const handleTitleClick = (title) => {
    // navigate('/ArticlePage');
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
        <div
            style={{
              zIndex: 1,
              border: '1px solid #B6B6B6',
              paddingTop: '6px',
              paddingBottom: '5px',
              paddingRight: '110px',
              width: '80%',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderRadius: '2px',
              gap: '30px',
            }}
          >
            <h2 style={{ color: '#343434', marginLeft: '25px', fontSize: '17px', fontWeight: '500' }}>Filtres</h2>
            <h2 style={{ color: '#343434', marginLeft: '0px', fontSize: '17px', fontWeight: '200' }}>|</h2>
            <div style={{ position: 'relative' }}>
            <button
            onClick={handleMotCleButtonClick}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '100px',
                alignItems: 'center',
                border: '1px solid #B6B6B6',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                whiteSpace: 'nowrap',
                color: '#5B5B5B',
                width: '100%',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop:'5px',
                paddingBottom:'5px',
                fontSize: '15px',
                fontWeight: '600',
              }}
            >
              <span >mot clé </span>
              <img style={{ position: 'relative', paddingLeft: '0px' }} src={arrowFilters} alt="Arrow Filters" width="20" height="20" />
              
            </button>
{/* Dropdown content */}
{isMotCleDropdownVisible && (
              <div
              style={{
                position: 'absolute',
                
               
                width: '100%',
                backgroundColor: '#FFFFFF',
                border: '1px solid #B6B6B6',
                borderRadius: '6px',
                padding: '10px',
                zIndex: 1,
                maxHeight: '200px', // Set a maximum height to make it scrollable
                overflowY: 'auto',  // Enable vertical scrolling if content exceeds maxHeight
              }}
            >
              {/* Your dropdown content here */}
              {keywords.map((keyword, index) => (
                <button
                  key={index}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px',
                    marginBottom: '4px',
                    backgroundColor: selectedKeywords.includes(keyword) ? '#E2EBF6' : 'inherit',
                  }}
                  onClick={() => handleKeywordClick(keyword)}
                >
                  {keyword}
                </button>
              ))}
            </div>
            )}
          </div>

          <div style={{ position: 'relative'}}>
            <button
            onClick={handleAuteurButtonClick}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '100px',
                alignItems: 'center',
                border: '1px solid #B6B6B6',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                whiteSpace: 'nowrap',
                color: '#5B5B5B',
                width: '100%',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop:'5px',
                paddingBottom:'5px',
                fontSize: '15px',
                fontWeight: '600',
              }}
            >
              auteur <img style={{ position: 'relative', paddingLeft: '0px' }} src={arrowFilters} alt="Arrow Filters" width="20" height="20" />
            </button>
{/* Dropdown content */}
{isAuteurDropdownVisible && (
               <div
               style={{
                 position: 'absolute',
                
                 
                 width: '100%',
                 backgroundColor: '#FFFFFF',
                 border: '1px solid #B6B6B6',
                 borderRadius: '6px',
                 padding: '10px',
                 zIndex: 1,
                 maxHeight: '200px', // Set a maximum height to make it scrollable
                 overflowY: 'auto',  // Enable vertical scrolling if content exceeds maxHeight
               }}
             >
               {/* Your dropdown content here */}
               {listeauteurs.map((listeauteurs, index) => (
                 <button
                   key={index}
                   style={{
                     display: 'block',
                     width: '100%',
                     padding: '8px',
                     marginBottom: '4px',
                     backgroundColor: selectedauteurs.includes(listeauteurs) ? '#E2EBF6' : 'inherit',
                   }}
                   onClick={() => handleauteurClick(listeauteurs)}
                 >
                   {listeauteurs}
                 </button>
               ))}
             </div>
            )}
          </div>




          <div style={{ position: 'relative' }}>
            <button
             onClick={handleInstitutionButtonClick}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '100px',
                alignItems: 'center',
                border: '1px solid #B6B6B6',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                color: '#5B5B5B',
                width: '100%',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop:'5px',
                paddingBottom:'5px',
                fontSize: '15px',
                fontWeight: '600',
              }}
            >
              institution <img style={{ position: 'relative', paddingLeft: '0px' }} src={arrowFilters} alt="Arrow Filters" width="20" height="20" />
            </button>
{/* Dropdown content */}
{isInstitutionDropdownVisible && (
               <div
               style={{
                 position: 'absolute',
                 
                 
                 width: '100%',
                 backgroundColor: '#FFFFFF',
                 border: '1px solid #B6B6B6',
                 borderRadius: '6px',
                 padding: '10px',
                 zIndex: 1,
                 maxHeight: '200px', // Set a maximum height to make it scrollable
                 overflowY: 'auto',  // Enable vertical scrolling if content exceeds maxHeight
               }}
             >
               {/* Your dropdown content here */}
               {listeinstitutions.map((listeinstitutions, index) => (
                 <button
                   key={index}
                   style={{
                     display: 'block',
                     width: '100%',
                     padding: '8px',
                     marginBottom: '4px',
                     backgroundColor: selectedinstitutions.includes(listeinstitutions) ? '#E2EBF6' : 'inherit',
                   }}
                   onClick={() => handleinstitutionClick(listeinstitutions)}
                 >
                   {listeinstitutions}
                 </button>
               ))}
             </div>
            )}
          </div>









          <div style={{ position: 'relative' }}>
            <button
            onClick={handleDateButtonClick}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '100px',
                alignItems: 'center',
                border: '1px solid #B6B6B6',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                color: '#5B5B5B',
                width: '100%',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop:'5px',
                paddingBottom:'5px',
                fontSize: '15px',
                fontWeight: '600',
              }}
            >
              date <img style={{ position: 'relative', paddingLeft: '0px' }} src={arrowFilters} alt="Arrow Filters" width="20" height="20" />
            </button>
{/* Dropdown content */}
{isDateDropdownVisible && (
             <div
             style={{
               position: 'absolute',
              
               
               width: '100%',
               backgroundColor: '#FFFFFF',
               border: '1px solid #B6B6B6',
               borderRadius: '6px',
               padding: '10px',
               zIndex: 1,
               maxHeight: '200px',
               overflowY: 'auto',
             }}
           >
             <div style={{ marginBottom: '8px' }}>
               <label style={{ marginRight: '4px' }}>Start Year:</label>
               <input
                 type="number"
                 value={startYear}
                 onChange={(e) => setStartYear(e.target.value)}
               />
             </div>
             <div style={{ marginBottom: '8px' }}>
               <label style={{ marginRight: '4px' }}>End Year:</label>
               <input
                 type="number"
                 value={endYear}
                 onChange={(e) => setEndYear(e.target.value)}
               />
             </div>
             <button
               style={{
                 display: 'block',
                 width: '100%',
                 padding: '8px',
                 backgroundColor: '#E2EBF6',
               }}
               onClick={handleApplyClick}
               disabled={!startYear || !endYear}
             >
               Apply
             </button>
           </div>
            )}
          </div>



          </div>

        
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

export default ResultatRechPage;
