import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import pageRechBack from '../Image/pageRechBack.png';
import Navvbar from './Navvbar';
import Logo from '../Image/Logo.PNG';
import favorisicon from '../Image/favorisIcon.svg';
import favorisiconact from '../Image/favorisIconact.svg';
const ArticlePage = () => {

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
    





   

    const pdfUrl = '/path/to/your/pdf.pdf'

    const handleButtonClick = () => {
      window.open(pdfUrl, '_blank');
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

  const title = 'The Title';
  const resume = '     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque arcu. Donec quis nibh at felis congue commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Fusce wisi. Aliquam ante. Mauris dictum facilisis augue.';
  const article = 'Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. In convallis. Fusce nibh. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Maecenas lorem. Ut tempus purus at lorem. Praesent dapibus. Vivamus ac leo pretium faucibus. Etiam bibendum elit eget erat. Praesent id justo in neque elementum ultrices. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Et harum quidem rerum facilis est et expedita distinctio. Praesent vitae arcu tempor neque lacinia pretium. Aliquam id dolor. Vivamus porttitor turpis ac leo. Etiam dictum tincidunt diam. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Sed ac dolor sit amet purus malesuada congue.Praesent in mauris eu tortor porttitor accumsan. Proin in tellus sit amet nibh dignissim sagittis. Curabitur vitae diam non enim vestibulum interdum. Aliquam ante. Etiam dictum tincidunt diam. Aliquam erat volutpat. Quisque tincidunt scelerisque libero. Aliquam erat volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Integer tempor. In convallis.        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Vestibulum fermentum tortor id mi. Curabitur vitae diam non enim vestibulum interdum. Fusce aliquam vestibulum ipsum. Nunc auctor. Fusce aliquam vestibulum ipsum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Etiam egestas wisi a erat. Sed convallis magna eu sem. Nunc tincidunt ante vitae massa. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Vivamus ac leo pretium faucibus. Praesent dapibus. Praesent vitae arcu tempor neque lacinia pretium.';
  const date = 'Janvier 2017';
  const authors = new Array(4); 


  authors[0] = 'Auteur1';
  authors[1] = 'Auteur2';
  authors[2] = 'Auteur3';
  authors[3] = 'Auteur4';

  const displayAuthors = authors.filter(author => author).join(', ');

  const institutions = new Array(3); 

  institutions[0] = 'Institution1';
  institutions[1] = 'Institution2';
  institutions[2] = 'Institution3';
 

  const displayInstitutions = institutions.filter(institution => institution).join(', ');

  const references = new Array(3); 

  references[0] = 'Référence1';
  references[1] = 'Référence2';
  references[2] = 'Référence3';
 
  const displayReferences = references.map((ref, index) => (
    <p key={index}>{ref}</p>
  ));

  const mots = new Array(10); 

  mots[0] = 'mot1';
  mots[1] = 'mot2';
  mots[2] = 'mot3';
  mots[3] = 'mot4';
  mots[4] = 'mot5';
  mots[5] = 'mot6';
  mots[6] = 'mot7';
  mots[7] = 'mot8';
  mots[8] = 'mot9';
  mots[9] = 'mot10';


  const displayMots = mots.map((mot, index) => (
    <div key={index} style={{  borderRadius:'5px', backgroundColor:'#E1EBF6', padding: '5px', paddingLeft:'10px', paddingRight:'10px', marginRight: '20px', marginBottom: '10px', display: 'inline-block' }}>
      {mot}
    </div>
  ));



  const auteurslinks = new Array(4); 

  auteurslinks[0] = 'Auteur1';
  auteurslinks[1] = 'Auteur2';
  auteurslinks[2] = 'Auteur3';
  auteurslinks[3] = 'Auteur4';
 
  const displayAuteursLinks = auteurslinks.map((auteur, index) => (
    <p key={index}>{auteur}</p>
  ));


  const institutionslinks = new Array(3); 

  institutionslinks[0] = 'Institution1';
  institutionslinks[1] = 'Institution2';
  institutionslinks[2] = 'Institution3'; 
 
  const displayInstitutionsLinks = institutionslinks.map((inst, index) => (
    <p key={index}>{inst}</p>
  ));

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


<div style={{ display: 'flex',flexDirection: 'column', }} >
<p style={{ fontSize: '17px', marginTop: '-520px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>Résumé</p>
<p style={{ fontSize: '17px', marginTop: '1px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>References</p>
<p style={{ fontSize: '17px', marginTop: '1px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>Mots clés</p>
<p style={{ fontSize: '17px', marginTop: '1px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>Auteurs</p>
<p style={{ fontSize: '17px', marginTop: '1px' , marginBottom: '20px', marginLeft: '-35px', color:'#0E00AF' }}>Institutions</p>
<div style={{ padding:'11px', marginLeft: '-60px',textAlign: 'center' }}>
        <button style={{backgroundColor:'#FFFFFF', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px' , paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px'}} onClick={handlePDFCreation} >Telecharger PDF</button>
      </div>
<div style={{ padding:'11px', marginLeft: '-60px',textAlign: 'center' }}>
  <button style={{backgroundColor:'#FFFFFF', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px' , paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px'}} onClick={handleButtonClick}>Ajouter aux favoris</button>
</div>

</div>





        <div id="contentToConvert" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', width: '70%', marginLeft: '110px', borderColor: 'B6B6B6', border: '1px solid #b6b6b6', marginTop:'56px'}}>
          <h1 style={{ fontSize: '40px', marginBottom: '20px', marginLeft: '40px', marginTop:'4px'}}>{title}</h1>
        <div style={{ display: 'grid', marginTop:'-30px',marginLeft: '15px', gridTemplateColumns: '1fr 1fr' }}>

        <p style={{ fontSize: '15px', marginLeft: '30px', color: '#0E00AF',  }}>{displayAuthors}</p>
        <p style={{ fontSize: '15px', marginLeft: '30px', color: '#0E00AF' }}>{displayInstitutions}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '117px 200px 200px 116px' }}>
      <h2 style={{ fontSize: '15px', marginBottom: '20px', marginLeft: '40px', paddingTop:'4px' }}>Publié le:</h2>
      <p style={{ fontSize: '16px'}}> {date} </p>
      <img style={{paddingTop:'12px', marginLeft:'-85px', cursor:'pointer'}} src={isIconActive ? favorisiconact : favorisicon} alt={isIconActive ? 'Active Favoris Icon' : 'Favoris Icon'} onClick={handleClick}/>
      <div style={{ padding:'11px', marginLeft: '-465px',textAlign: 'center' }}>
        <button style={{backgroundColor:'#E1EBF6', color:'#0E00AF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'10px' , paddingRight:'10px', border: '1.7px solid #0E00AF', borderRadius:'5px'}}  onClick={handlePDFOpening} >Acceder au PDF</button>
      </div>

      </div>

      <div style={{ borderBottom: '1px solid #ccc' }}></div> 

          <h2 style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Résumé</h2>
          <p style={{ fontSize: '16px', marginBottom: '20px' , marginLeft: '54px', marginRight:'85px'}}>
            {resume}
          </p>

          <div style={{ borderBottom: '1px solid #ccc' }}></div> 

          <h2 style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Article</h2>
          <p style={{ fontSize: '16px', marginBottom: '20px' , marginLeft: '54px', marginRight:'85px'}}>
            {article}
          </p>
          <div style={{ borderBottom: '1px solid #ccc' }}></div> 
          <h2 style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Réferences</h2>
          <p style={{ fontSize: '15px', marginLeft: '45px', color: '#0E00AF', marginTop:'-10px'  }}>{displayReferences}</p>
          <div style={{ borderBottom: '1px solid #ccc' }}></div> 
          <h2 style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Mots clés</h2>
          <p style={{ fontSize: '15px', marginLeft: '45px', color: '#0E00AF', marginTop:'-10px'  }}>{displayMots}</p>
          <div style={{ borderBottom: '1px solid #ccc' }}></div> 
          <h2 style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}>Auteurs</h2>
          <p style={{ fontSize: '15px', marginLeft: '45px', color: '#0E00AF', marginTop:'-10px'  }}>{displayAuteursLinks}</p>
          <div style={{ borderBottom: '1px solid #ccc' }}></div> 
          <h2 style={{ fontSize: '20px', marginBottom: '20px', marginLeft: '40px' }}> Institutions</h2>
          <p style={{ fontSize: '15px', marginLeft: '45px', color: '#0E00AF', marginTop:'-10px'  }}>{displayInstitutionsLinks}</p>

        </div>
      </div>


</div>


);


};

export default ArticlePage;