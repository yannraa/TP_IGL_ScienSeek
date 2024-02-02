import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import pageRechBack from '../Image/pageRechBack.png';
import Navvbar from './Navvbar';
import Logo from '../Image/Logo.PNG';
import favorisicon from '../Image/favorisIcon.svg';
import arrowFilters from '../Image/arrowFilters.svg';
import favorisiconact from '../Image/favorisIconact.svg';
const ResultatRechPage = () => {

  
////////////////////////////////////////////////////////////////////////////////////////

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





return(
    <div>
<Navvbar />



<div
        style={{
          backgroundColor: '#E2EBF6',
          minHeight: '100vh',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          
        }}
      >
 <h2 style={{ color: '#0E00AF', fontSize: '23px', marginTop:'60px', marginLeft:'90px' }}>
        Résultats
      </h2>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '50px' }}>
      {/* Title */}
     

      {/* White rectangle with buttons */}
      <div style={{ border: '1px solid #B6B6B6', paddingTop: '6px', paddingBottom:'5px', paddingRight:'110px', width: '80%', marginBottom: '20px', display: 'flex',
       flexDirection: 'row', backgroundColor:'#FFFFFF', borderRadius:'2px', gap:'30px'}}>
        <h2 style={{color:'#343434', marginLeft:'25px', fontSize:'17px',fontWeight: '500'}}>Filtres</h2>
        <h2 style={{color:'#343434', marginLeft:'0px', fontSize:'17px',fontWeight: '200'}}>|</h2>
        <button style={{ display: 'flex', flexDirection: 'row', gap:'15px',alignItems: 'center',border: '1px solid #B6B6B6',borderRadius:'6px',backgroundColor:'#FFFFFF', color: '#5B5B5B', width: '100%' , paddingLeft:'20px',paddingRight:'20px', fontSize:'15px', fontWeight:'600'}}>mot clé 
        <img style={{position:'absolute',paddingLeft:'130px'}} src={arrowFilters} alt="Arrow Filters" width="20" height="20"  /> </button>
        <button style={{ display: 'flex', flexDirection: 'row', gap:'15px',alignItems: 'center',border: '1px solid #B6B6B6',borderRadius:'6px',backgroundColor:'#FFFFFF', color: '#5B5B5B', width: '100%' , paddingLeft:'20px',paddingRight:'20px', fontSize:'15px', fontWeight:'600'}}>auteur <img style={{position:'absolute',paddingLeft:'130px'}}  src={arrowFilters} alt="Arrow Filters" width="20" height="20" /></button>
        <button style={{ display: 'flex', flexDirection: 'row', gap:'15px',alignItems: 'center',border: '1px solid #B6B6B6',borderRadius:'6px',backgroundColor:'#FFFFFF', color: '#5B5B5B', width: '100%' , paddingLeft:'20px',paddingRight:'20px', fontSize:'15px', fontWeight:'600'}}>institution <img style={{position:'absolute',paddingLeft:'130px'}}  src={arrowFilters} alt="Arrow Filters" width="20" height="20" /></button>
        <button style={{ display: 'flex', flexDirection: 'row', gap:'15px',alignItems: 'center',border: '1px solid #B6B6B6',borderRadius:'6px',backgroundColor:'#FFFFFF', color: '#5B5B5B', width: '100%' , paddingLeft:'20px',paddingRight:'20px', fontSize:'15px', fontWeight:'600'}}>date <img style={{position:'absolute',paddingLeft:'130px'}}  src={arrowFilters} alt="Arrow Filters" width="20" height="20" /></button>
      </div>
      </div>
      {/* White big rectangle with sections */}

      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #B6B6B6', padding: '10px', width: '80%', backgroundColor:'#FFFFFF'}}>
        {/* Replace the following with the content of each section */}

        <div style={{ display: 'flex', flexDirection: 'column'}}>
        
        <h1 style={{ }}>{title}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

<p style={{  }}>{displayAuthors}</p>
<p style={{ }}>{displayInstitutions}</p>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '117px 200px 200px 116px' }}>
      <h2 style={{  }}>Publié le:</h2>
      <p style={{ }}> {date} </p>
</div>

          {/* Section 1 content */}
        </div>
        <hr style={{ border: '0.5px solid #B6B6B6', margin: '20px 0' }} />
        <div>
          {/* Section 2 content */}
        </div>
        <hr style={{ border: '0.5px solid #B6B6B6', margin: '20px 0' }} />
        {/* Repeat the pattern for other sections */}
    </div>
  


















    </div>
      


</div>


);


};

export default ResultatRechPage;