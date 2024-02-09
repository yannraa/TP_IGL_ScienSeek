import React, { useState , useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import pageRechBack from '../Image/pageRechBack.png';
import Navvbar from './Navvbar';
import Logo from '../Image/Logo.PNG';
import favorisicon from '../Image/favorisIcon.svg';
import favorisiconact from '../Image/favorisIconact.svg';


const ModeraPage = () => {
  

  /*"""""""""""""""""""""""""""""""""""""authhhhhhhhhhhhh""""""""""""""""""""""""""""""""""""""""""*/  
    
      const [authors, setAuthors] = useState([
        'Auteur1',
        'Auteur2',
        'Auteur3',
        'Auteur4'
      ]);
      const [authorss, setAuthorss] = useState([
        'Auteur1',
        'Auteur2',
        'Auteur3',
        'Auteur4'
      ]);
    
      // Function to update authors based on authorss
      const updateAuthors = () => {
        setAuthors([...authorss]);
      };

/*"""""""""""""""""""""""""""""""""""""authhhhhhhhhhhhh""""""""""""""""""""""""""""""""""""""""""*/
      const handlePDFCreation = () => {
        const element = document.getElementById('contentToConvert'); // Replace 'contentToConvert' with the ID of your div
        html2pdf(element, {
          margin: 10,
          filename: 'generated.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 10 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', padding: { top: 1, right: 1, bottom: 1, left: 1 } },
        });
      };

      const handlePDFOpening = () => {
        const element = document.getElementById('contentToConvert');
        const pdf = new jsPDF({
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          // Set any additional configurations here
        });
    
        html2pdf(element, {
          jsPDF: pdf,
          margin: 10,
          filename: 'generated.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
        }).then(() => {
          const pdfData = pdf.output('datauristring');
          window.open(pdfData, '_blank');
        });
      };
    
/*"""""""""""""""""""""""""""""""""""""authhhhhhhhhhhhh""""""""""""""""""""""""""""""""""""""""""*/


      const [isEditingAuth, setIsEditingAuth] = useState(false);

      const handleEditClickAuth = () => {
        setIsEditingAuth(true);
      };
    
      const handleSaveClickAuth = () => {
        setIsEditingAuth(false);
        // Update the changes to your data source, for example:
        // Here, I'm just logging the updated authors array.
        console.log("Updated Authors:", authorss);
      };
    
      const renderEditableFieldAuth = (value, onChange) => {
        return authorss.map((author, index) => (
            <div key={index}>
                {isEditingAuth ? (
                    <input
                        type="text"
                        value={author}
                        onChange={e => {
                            const updatedAuthorss = [...authorss]; // Update authorss instead of authors
                            updatedAuthorss[index] = e.target.value;
                            setAuthorss(updatedAuthorss); // Set authorss instead of authors
                        }}
                    />
                ) : (
                    <span>{author}</span>
                )}
            </div>
        ));
    };
    
    


    useEffect(() => {
      updateAuthors();
    }, [authorss]);
   
/*authhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh*/
    const pdfUrl = '/path/to/your/pdf.pdf'

    const handleButtonClick = () => {
      window.open(pdfUrl, '_blank');
    };


    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const [isIconActive, setIsIconActive] = useState(false);

    const handleClick = () => {
      setIsIconActive(!isIconActive);
    };

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      alert(`Searching for: ${searchValue}`);
    } else {
      alert('Please enter a valid search term.');
    }
  };

  
  
 



/**************************************article******************************** */

const [article,setarticle]=useState('Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. In convallis. Fusce nibh. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Maecenas lorem. Ut tempus purus at lorem. Praesent dapibus. Vivamus ac leo pretium faucibus. Etiam bibendum elit eget erat. Praesent id justo in neque elementum ultrices. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Et harum quidem rerum facilis est et expedita distinctio. Praesent vitae arcu tempor neque lacinia pretium. Aliquam id dolor. Vivamus porttitor turpis ac leo. Etiam dictum tincidunt diam. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Sed ac dolor sit amet purus malesuada congue.Praesent in mauris eu tortor porttitor accumsan. Proin in tellus sit amet nibh dignissim sagittis. Curabitur vitae diam non enim vestibulum interdum. Aliquam ante. Etiam dictum tincidunt diam. Aliquam erat volutpat. Quisque tincidunt scelerisque libero. Aliquam erat volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Integer tempor. In convallis.        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Vestibulum fermentum tortor id mi. Curabitur vitae diam non enim vestibulum interdum. Fusce aliquam vestibulum ipsum. Nunc auctor. Fusce aliquam vestibulum ipsum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Etiam egestas wisi a erat. Sed convallis magna eu sem. Nunc tincidunt ante vitae massa. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Vivamus ac leo pretium faucibus. Praesent dapibus. Praesent vitae arcu tempor neque lacinia pretium.');
const [articles,setarticles]=useState('Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. In convallis. Fusce nibh. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Maecenas lorem. Ut tempus purus at lorem. Praesent dapibus. Vivamus ac leo pretium faucibus. Etiam bibendum elit eget erat. Praesent id justo in neque elementum ultrices. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Et harum quidem rerum facilis est et expedita distinctio. Praesent vitae arcu tempor neque lacinia pretium. Aliquam id dolor. Vivamus porttitor turpis ac leo. Etiam dictum tincidunt diam. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Sed ac dolor sit amet purus malesuada congue.Praesent in mauris eu tortor porttitor accumsan. Proin in tellus sit amet nibh dignissim sagittis. Curabitur vitae diam non enim vestibulum interdum. Aliquam ante. Etiam dictum tincidunt diam. Aliquam erat volutpat. Quisque tincidunt scelerisque libero. Aliquam erat volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Integer tempor. In convallis.        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Vestibulum fermentum tortor id mi. Curabitur vitae diam non enim vestibulum interdum. Fusce aliquam vestibulum ipsum. Nunc auctor. Fusce aliquam vestibulum ipsum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Etiam egestas wisi a erat. Sed convallis magna eu sem. Nunc tincidunt ante vitae massa. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Vivamus ac leo pretium faucibus. Praesent dapibus. Praesent vitae arcu tempor neque lacinia pretium.');





const updatearticle = () => {
setarticle(articles);
};





const [isEditingart, setIsEditingart] = useState(false);

const handleEditClickart = () => {
setIsEditingart(true);
};

const handleSaveClickart = () => {
setIsEditingart(false);


console.log("Updated Article:", articles);
};

const renderEditableFieldart = (value, onChange) => {
return (
  <div>
    {isEditingart ? (
      <textarea
      style={{
        width: '100%',
        height: '200px', // Adjust the height as needed
        fontSize: '16px', // Adjust the font size as needed
        padding: '10px',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '5px',
        resize: 'vertical', // Allow vertical resizing if needed
      }}
        type="text"
        value={article}
        onChange={e => {
          const updatedarticle = e.target.value;
          setarticle(updatedarticle);
        }}
      />
    ) : (
      <span>{article}</span>
    )}
  </div>
);
};


useEffect(() => {
updatearticle();
}, articles);
/*************************************article******************************* */
/**************************************resume******************************** */

const [resume,setresume]=useState('     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque arcu. Donec quis nibh at felis congue commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Fusce wisi. Aliquam ante. Mauris dictum facilisis augue.');
const [resumes,setresumes]=useState('     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque arcu. Donec quis nibh at felis congue commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Fusce wisi. Aliquam ante. Mauris dictum facilisis augue.');





const updateresume = () => {
setresume(resumes);
};





const [isEditingres, setIsEditingres] = useState(false);

const handleEditClickres = () => {
setIsEditingres(true);
};

const handleSaveClickres = () => {
setIsEditingres(false);


console.log("Updated resume:", resumes);
};

const renderEditableFieldres = (value, onChange) => {
return (
  <div>
    {isEditingres ? (
      <textarea style={{
        width: '100%',
        height: 'px', // Adjust the height as needed
        fontSize: '16px', // Adjust the font size as needed
        padding: '10px',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '5px',
        resize: 'vertical', // Allow vertical resizing if needed
      }}
        type="text"
        value={resume}
        onChange={e => {
          const updatedresume = e.target.value;
          setresume(updatedresume);
        }}
      />
    ) : (
      <span>{resume}</span>
    )}
  </div>
);
};


useEffect(() => {
updateresume();
}, resumes);
/*************************************resume******************************* */


/**************************************title********************************* */
  const [title,settitle]=useState('The Title');
  const [titles,settitles]=useState('The Title');




  
const updatetitle = () => {
  settitle(titles);
};





const [isEditingtit, setIsEditingtit] = useState(false);

const handleEditClicktit = () => {
  setIsEditingtit(true);
};

const handleSaveClicktit = () => {
  setIsEditingtit(false);
 
  
  console.log("Updated Title:", titles);
};

const renderEditableFieldtit = (value, onChange) => {
  return (
    <div>
      {isEditingtit ? (
        <input
          type="text"
          value={title}
          onChange={e => {
            const updatedTitle = e.target.value;
            settitle(updatedTitle);
          }}
        />
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
};


useEffect(() => {
updatetitle();
}, titles);
/**************************************title********************************* */


/**************************************date********************************* */
const [date,setdate]=useState('Janvier 2017');
const [dates,setdates]=useState('Janvier 2017');





const updatedate = () => {
setdate(dates);
};





const [isEditingdt, setIsEditingdt] = useState(false);

const handleEditClickdt = () => {
setIsEditingdt(true);
};

const handleSaveClickdt = () => {
setIsEditingdt(false);


console.log("Updated Date:", dates);
};

const renderEditableFielddt = (value, onChange) => {
return (
  <div>
    {isEditingdt ? (
      <input
        type="text"
        value={date}
        onChange={e => {
          const updateddate = e.target.value;
          setdate(updateddate);
        }}
      />
    ) : (
      <span>{date}</span>
    )}
  </div>
);
};


useEffect(() => {
updatedate();
}, dates);
/**************************************date********************************* */






  const displayAuthors = authors.filter(author => author).join(' ,  ');



   /*"""""""""""""""""""""""""""""""""""""institutions""""""""""""""""""""""""""""""""""""""""""*/  
    
   const [institutions, setinstitutions] = useState([
    'Institution1',
  'Institution2',
  'Institution3',
  ]);
  const [institutionss, setinstitutionss] = useState([
    'institutions1',
    'institutions2',
    'institutions3',
    
  ]);


  const updateinstitutions = () => {
    setinstitutions([...institutionss]);
  };


const displayInstitutions = institutions.filter(institution => institution).join(' ,  ');


const [isEditingins, setIsEditingins] = useState(false);

const handleEditClickins = () => {
  setIsEditingins(true);
};

const handleSaveClickins = () => {
  setIsEditingins(false);
 
  
  console.log("Updated Institutions:", institutionss);
};

const renderEditableFieldins = (value, onChange) => {
  return institutionss.map((institutions, index) => (
      <div key={index}>
          {isEditingins ? (
              <input
                  type="text"
                  value={institutions}
                  onChange={e => {
                      const updatedinstitutionss = [...institutionss]; // Update authorss instead of authors
                      updatedinstitutionss[index] = e.target.value;
                      setinstitutionss(updatedinstitutionss); // Set authorss instead of authors
                  }}
              />
          ) : (
              <span>{institutions}</span>
          )}
      </div>
  ));
};



useEffect(() => {
updateinstitutions();
}, [institutionss]);


/*"""""""""""""""""""""""""""""""""""""institutions""""""""""""""""""""""""""""""""""""""""""*/


   /*""""""""""""""""""""""""""""""""""""references""""""""""""""""""""""""""""""""""""""""""*/  
   
   const [ references, setreferences] = useState([
    'references1',
  'references2',
  'references3',
  ]);
  const [referencess, setreferencess] = useState([
    'references1',
    'references2',
    'references3',
    
  ]);


  const updatereferences = () => {
    setreferences([...referencess]);
  };


const displayreferences = references.filter(references => references).join(', ');


const [isEditingref, setIsEditingref] = useState(false);

const handleEditClickref = () => {
  setIsEditingref(true);
};

const handleSaveClickref = () => {
  setIsEditingref(false);
 
  
  console.log("Updated references:", referencess);
};

const renderEditableFieldref = (value, onChange) => {
  return referencess.map((references, index) => (
      <div key={index}>
          {isEditingref ? (
              <input
                  type="text"
                  value={references}
                  onChange={e => {
                      const updatedreferencess = [...referencess]; // Update authorss instead of authors
                      updatedreferencess[index] = e.target.value;
                      setreferencess(updatedreferencess); // Set authorss instead of authors
                  }}
              />
          ) : (
              <span>{references}</span>
          )}
      </div>
  ));
};



useEffect(() => {
updatereferences();
}, [referencess]);

  const displayReferences = references.map((ref, index) => (
    <p key={index}>{ref}</p>
  ));

  /*"""""""""""""""""""""""""""""""""""""references""""""""""""""""""""""""""""""""""""""""""*/


/*""""""""""""""""""""""""""""""""mots"""""""""""""""""""""""""""""""""""""""*/  
   
const [ mots, setmots] = useState([
  'mots1',
'mots2',
'mots',
]);
const [motss, setmotss] = useState([
  'mots1',
  'mots2',
  'mots3',
  'mots4',
  'mots5',
  'mots6',
  'mots7',
  'mots8',
  'mots9',
  'mots10',
]);


const updatemots = () => {
  setmots([...motss]);
};


const displaymots = mots.filter(mots => mots).join(', ');


const [isEditingmt, setIsEditingmt] = useState(false);

const handleEditClickmt = () => {
setIsEditingmt(true);
};

const handleSaveClickmt = () => {
setIsEditingmt(false);


console.log("Updated mots:", motss);
};

const renderEditableFieldmt = (value, onChange) => {
return motss.map((mots, index) => (
    <div key={index}>
        {isEditingmt ? (
            <input
                type="text"
                value={mots}
                onChange={e => {
                    const updatedmotss = [...motss]; // Update authorss instead of authors
                    updatedmotss[index] = e.target.value;
                    setmotss(updatedmotss); // Set authorss instead of authors
                }}
            />
        ) : (
            <span>{mots}</span>
        )}
    </div>
));
};



useEffect(() => {
updatemots();
}, [motss]);


  const displayMots = mots.map((mot, index) => (
    <div key={index} style={{  borderRadius:'5px', backgroundColor:'#E1EBF6', padding: '5px', paddingLeft:'10px', paddingRight:'10px', marginRight: '20px', marginBottom: '10px', display: 'inline-block' }}>
      {mot}
    </div>
  ));

/*"""""""""""""""""""""""""""""""""mots""""""""""""""""""""""""""""""""""""""""*/
 
 


return(
    <div>
<Navvbar />


<div
        style={{
          backgroundColor: '#E2EBF6',
          minHeight: '100vh',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          
        }}
      >

{/*************************************************************************************************** */}


<div style={{ display: 'flex',flexDirection: 'column', }} >
<p onClick={() => scrollToSection('resume')}  style={{ cursor: 'pointer', fontSize: '17px', marginTop: '-520px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>Résumé</p>
<p onClick={() => scrollToSection('references')}  style={{cursor: 'pointer', fontSize: '17px', marginTop: '1px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>References</p>
<p onClick={() => scrollToSection('motcle')}  style={{ cursor: 'pointer',fontSize: '17px', marginTop: '1px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>Mots clés</p>
<p onClick={() => scrollToSection('auteurs')}  style={{cursor: 'pointer', fontSize: '17px', marginTop: '1px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>Auteurs</p>
<p onClick={() => scrollToSection('institutions')}  style={{ cursor: 'pointer',fontSize: '17px', marginTop: '1px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>Institutions</p>
<div style={{ padding:'11px', marginLeft: '-60px',textAlign: 'center' }}>
  <button style={{cursor: 'pointer',backgroundColor:'#FFFFFF', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px' , paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px'}} onClick={handleButtonClick}>Ajouter aux favoris</button>
</div>
<div style={{ padding:'11px', marginLeft: '-60px',textAlign: 'center' }}>
        <button style={{cursor: 'pointer',backgroundColor:'#FFFFFF', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px' , paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px'}} onClick={handlePDFCreation} >Telecharger PDF</button>
      </div>


</div>



{/*********************************************************************************************************************************/}




        <div id="contentToConvert" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', width: '70%', marginLeft: '110px', borderColor: 'B6B6B6', border: '1px solid #b6b6b6', marginTop:'56px'}}>
          <h1 style={{ fontSize: '40px', marginBottom: '20px', marginLeft: '40px', marginTop:'4px'}}>{title}</h1>
        <div style={{ display: 'grid', marginTop:'-30px',marginLeft: '15px', gridTemplateColumns: '1fr 1fr' }}>

        <p style={{ fontSize: '15px', marginLeft: '30px', color: '#0E00AF',  }}>{displayAuthors}</p>
        <p style={{ fontSize: '15px', marginLeft: '30px', color: '#0E00AF' }}>{/*displayInstitutions*/}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '117px 200px 200px 116px' }}>
      <h2 style={{ fontSize: '15px', marginBottom: '20px', marginLeft: '40px', paddingTop:'4px' }}>Publié le:</h2>
      <p style={{ fontSize: '16px'}}> {date} </p>
     
      </div>


<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
       <span style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '5px', textAlign: 'center' }}>
       {isEditingAuth ? (  
               
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleSaveClickAuth}>Sauvegarder les modifications</button>
                ) : (
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleEditClickAuth}>Modifier les auteurs</button>
                )}
                {isEditingAuth ? (
  renderEditableFieldAuth()
) : (
  <span> </span>
)}

          </span>


          {/********************institutions******************** */}
          <span style={{  display: 'inline-block', whiteSpace: 'nowrap', padding: '5px', textAlign: 'center'  }}>
       {isEditingins ? (  
               
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleSaveClickins}>Sauvegarder les modifications</button>
                ) : (
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleEditClickins}>Modifier les institutions</button>
                )}
                {isEditingins ? (
  renderEditableFieldins()
) : (
  <span> </span>
)}

          </span>


           {/*************************institutions**************************** */}

              {/********************references******************** */}
          <span style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '5px', textAlign: 'center'  }}>
       {isEditingref ? (  
               
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleSaveClickref}>Sauvegarder les modifications</button>
                ) : (
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleEditClickref}>Modifier les references</button>
                )}
                {isEditingref ? (
  renderEditableFieldref()
) : (
  <span> </span>
)}

          </span>


           {/*************************references**************************** */}

            {/*******************mots****************** */}
          <span style={{  display: 'inline-block', whiteSpace: 'nowrap', padding: '5px', textAlign: 'center' }}>
       {isEditingmt ? (  
               
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleSaveClickmt}>Sauvegarder les modifications</button>
                ) : (
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleEditClickmt}>Modifier les mots clés</button>
                )}
                {isEditingmt ? (
  renderEditableFieldmt()
) : (
  <span> </span>
)}

          </span>


           {/************************mots************************** */}
        
 {/********************title******************** */}
 <span style={{  display: 'inline-block', whiteSpace: 'nowrap', padding: '5px', textAlign: 'center' }}>
       {isEditingtit ? (  
               
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleSaveClicktit}>Sauvegarder la modification</button>
                ) : (
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleEditClicktit}>Modifier le Titre</button>
                )}
                {isEditingtit ? (
  renderEditableFieldtit()
) : (
  <span> </span>
)}

          </span>


           {/*************************title*************************** */}


            {/********************date******************** */}
 <span style={{  display: 'inline-block', whiteSpace: 'nowrap', padding: '5px', textAlign: 'center'  }}>
       {isEditingdt ? (  
               
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleSaveClickdt}>Sauvegarder la modification</button>
                ) : (
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleEditClickdt}>Modifier la Date</button>
                )}
                {isEditingdt ? (
  renderEditableFielddt()
) : (
  <span> </span>
)}

          </span>


           {/*************************date*************************** */}
           {/*******************resume******************* */}
 <span style={{  display: 'inline-block', whiteSpace: 'nowrap', padding: '5px', textAlign: 'center'  }}>
       {isEditingres ? (  
               
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleSaveClickres}>Sauvegarder la modification</button>
                ) : (
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleEditClickres}>Modifier le résumé</button>
                )}
                {isEditingres ? (
  renderEditableFieldres()
) : (
  <span> </span>
)}

          </span>


           {/*************************resume*************************** */}
            {/*******************article****************** */}
 <span style={{  display: 'inline-block', whiteSpace: 'nowrap', padding: '5px', textAlign: 'center' }}>
       {isEditingart ? (  
               
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleSaveClickart}>Sauvegarder la modification</button>
                ) : (
                    <button style={{ cursor: 'pointer', backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px', paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px' }} onClick={handleEditClickart}>Modifier l'Article</button>
                )}
                {isEditingart ? (
  renderEditableFieldart()
) : (
  <span> </span>
)}

          </span>


           {/*************************article*************************** */}
         
           </div>

      

      

      <div style={{ borderBottom: '1px solid #ccc' }}></div> 

          <h2 id="resume" style={{  fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Résumé</h2>
          <p style={{ fontSize: '16px', marginBottom: '20px' , marginLeft: '54px', marginRight:'85px'}}>
            {resume}
          </p>

          <div style={{ borderBottom: '1px solid #ccc' }}></div> 

          <h2 style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Article</h2>
          <p style={{ fontSize: '16px', marginBottom: '20px' , marginLeft: '54px', marginRight:'85px'}}>
            {article}
          </p>
          <div style={{ borderBottom: '1px solid #ccc' }}></div> 
          <h2 id="references" style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Réferences</h2>
          <p style={{ fontSize: '15px', marginLeft: '45px', color: '#0E00AF', marginTop:'-10px'  }}>{displayReferences}</p>
          <div style={{ borderBottom: '1px solid #ccc' }}></div> 
          <h2 id="motcle" style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Mots clés</h2>
          <p style={{ fontSize: '15px', marginLeft: '45px', color: '#0E00AF', marginTop:'-10px'  }}>{displayMots}</p>
          <div style={{ borderBottom: '1px solid #ccc' }}></div> 
          <h2 id="auteurs" style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Auteurs</h2>
          <p style={{ fontSize: '15px', marginLeft: '45px', color: '#0E00AF', marginTop:'-10px'  }}>{displayAuthors}</p>
          <div style={{ borderBottom: '1px solid #ccc' }}></div> 
          <h2 id="institutions" style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}> Institutions</h2>
          <p style={{ fontSize: '15px', marginLeft: '45px', color: '#0E00AF', marginTop:'-10px'  }}>{displayInstitutions}</p>

        </div>
      </div>


</div>


);


};

export default ModeraPage;