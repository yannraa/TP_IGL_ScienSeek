import React, { useState } from 'react';

const PDFUploader = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div>
    <button style={{border: '2px solid #0E00AF ',borderRadius : '10px', padding : '0' , margin : '0'}}>
      <div style={{ backgroundColor:'#76B5FF', color:'white', padding: '10px',borderRadius : ' 10px 10px 0px 0px',paddingRight :'30px' , paddingLeft :'30px', fontSize :'20px' }}>
        Ajouter un Article
      </div>
   
      <label htmlFor="pdfInput" style={labelStyle}>
      appuyer pour importer le fichier PDF
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          id="pdfInput"
          style={inputStyle}
        />
      </label>
     
 
    </button>
     {selectedFile && <p>Le fichier sélectionné : {selectedFile.name}</p>}
     </div>
  );
};

const labelStyle = {
  display: 'inline-block',
  backgroundColor: 'white',
  borderRadius : '0px 0px 10px 10px',
  padding: '10px',
  paddingRight :'30px' ,
  paddingLeft :'30px' ,
  cursor: 'pointer',
  textDecoration: 'underline',
  color: '#313131',
  fontSize :'20px'
};

const inputStyle = {
  display: 'none', 
 
};

export default PDFUploader;