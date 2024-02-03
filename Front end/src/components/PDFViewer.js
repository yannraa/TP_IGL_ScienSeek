import React from 'react';

const PDFViewer = ({ file }) => {
  return (
    <div style={{ marginBottom: '20px' }}> {/* Adjust spacing */}
      <embed src={file} type="application/pdf" width="100%" height="500px" />
    </div>
  );
};

export default PDFViewer;