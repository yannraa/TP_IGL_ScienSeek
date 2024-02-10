import React, { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog.js';

const TabModera = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleModifier = (id) => {
    console.log(`Modifier clicked for item with id: ${id}`);
  };

  const handleSupprimer = (item) => {
    setSelectedItem(item);
  };

  const handleConfirmDelete = () => {
    if (selectedItem) {
      setData(prevData => prevData.filter(i => i.id !== selectedItem.id));
      console.log(`Supprimer clicked for item with id: ${selectedItem.id}`);
      // Call your backend function here to delete the item
    }
    setSelectedItem(null);
  };

  const handleCancelDelete = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <table style={{ width: '100%', borderRadius: '15px', overflow: 'hidden', height: '20px' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#76B5FF', color: 'white', padding: '15px', textAlign: 'center', height: '20px' }}>Nom du Modérateur</th>
            <th style={{ backgroundColor: '#76B5FF', color: 'white', padding: '15px', textAlign: 'center', height: '20px' }}>L’action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} style={{ backgroundColor: '#F9F9F9', overflow: 'hidden' }}>
              <td style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center' }}>{item.name}</td>
              <td style={{ padding: '15px', textAlign: 'center' }}>
                <button style={{ color: '#0E00AF', textDecoration: 'underline', cursor: 'pointer', background: 'none', fontWeight: 'bold', border: 'none' }} onClick={() => handleModifier(item.id)}>Modifier</button>
                <button style={{ color: '#0E00AF', marginLeft: '10px', textDecoration: 'underline', cursor: 'pointer', background: 'none', fontWeight: 'bold', border: 'none' }} onClick={() => handleSupprimer(item)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <ConfirmationDialog
          message={`Etes Vous sure vous voulez supprimer : "${selectedItem.name}"?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default TabModera;