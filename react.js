import React, { useState, useEffect } from 'react';

const MyComponent = () => {
 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Remplacez l'URL de l'API par votre propre point d'API
        const response = await fetch('https://example.com/api/data');
        const result = await response.json();

      
        setData(result);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste d'éléments depuis l'API</h1>
      <ul>
      
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
