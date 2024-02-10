import React from 'react';

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div style={overlayStyle}>
      <div style={dialogStyle}>
        <div style={messageStyle}>{message}</div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={onConfirm}>Yes</button>
          <button style={buttonStyle} onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const dialogStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const messageStyle = {
  marginBottom: '10px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  margin: '0 10px',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#76B5FF',
  color: 'white',
  border: 'none',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};