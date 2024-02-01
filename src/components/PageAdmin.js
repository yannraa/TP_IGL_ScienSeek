import React, { useState } from 'react';
import PDFUploader from './PDFUploader';
import PDFViewer from './PDFViewer';
import AjoutModerateurButton from './AjoutModerateurButton.js';
import TabModera from './TabModera.js';
import backgroundAdmin from '../Image/backgroundAdmin.png';
import Navvbar from './Navvbar.js';

function PageAdmin() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleFileSelect = (file) => {
    setSelectedFile(URL.createObjectURL(file));
    setPdfLoaded(true); 
  };

  const handleConfirmClick = () => {
  
    setConfirmation(true);
    setPdfLoaded(false); 
  };

  return (
    
    <div style={{ display: 'flex', backgroundSize: 'contain',backgroundRepeat: 'no-repeat',
    minHeight: '100vh',backgroundImage: `url(${backgroundAdmin})` }}>
        

        <div><Navvbar /></div>
      <div style={{display: 'flex',flexDirection: 'row', margin:'20px', }}>
        
      
        <TabModera/>

      </div>
     
      <div style={{ width: '50%' , display :'flex' ,flexDirection: 'column'}}>
        <div style={{ width: '50%' , margin:'10px'}}>
        <AjoutModerateurButton/>
        </div>
        <div style={{margin:'10px' }}>
      <PDFUploader onFileSelect={handleFileSelect} />
      {selectedFile && pdfLoaded && <PDFViewer file={selectedFile} />}
      {pdfLoaded && !confirmation && (
        <div>
          <p>Clicker sur "Confirmer" apres avoir consulter le PDF.</p>
          <button style={{border: '2px solid #0E00AF ',borderRadius : '10px', padding : '0' , margin : '0'}} onClick={handleConfirmClick}>Confirm</button>
        </div>
      )}
      {confirmation && <p>PDF importé avec success ! </p>}
    </div>
    </div>

    </div>
   
  
   

  );
}

export default PageAdmin;