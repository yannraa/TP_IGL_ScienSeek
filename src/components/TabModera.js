import React from 'react';

const TabModera = () => {
  const data = [
    // Your data goes here
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    
  ];

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' ,}}>
      <thead>
        <tr>
          <th style={{ backgroundColor: '#76B5FF', color: 'white', padding: '10px', textAlign: 'center' }}>Nom du Modérateur</th>
          <th style={{ backgroundColor: '#76B5FF', color: 'white', padding: '10px', textAlign: 'center' }}>L’action</th>
        </tr>
      </thead>
      <tbody >
        {data.map(item => (
          <tr key={item.id} style = {{backgroundColor:'#F9F9F9'}}>
            <td style={{ border: '1px solid #ddd', padding: '10px',textAlign: 'center' , }}>{item.name}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px',textAlign: 'center' , }}>
              <button style={{color:'#0E00AF',textAlign: 'center' ,border: '1px solid #ddd', padding: '10px',textAlign: 'center' ,border: 'none', textDecoration: 'underline', cursor: 'pointer', background: 'none' ,fontWeight:'bold'   }} onClick={() => handleModifier(item.id)}>Modifier</button>
              <button style={{color:'#0E00AF',  border: '1px solid #ddd', padding: '10px',textAlign: 'center' ,border: 'none', textDecoration: 'underline', cursor: 'pointer', background: 'none',fontWeight:'bold' }} onClick={() => handleSupprimer(item.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const handleModifier = (id) => {
 
  console.log(`Modifier clicked for item with id: ${id}`);
};

const handleSupprimer = (id) => {
  
  console.log(`Supprimer clicked for item with id: ${id}`);
};

export default TabModera;
