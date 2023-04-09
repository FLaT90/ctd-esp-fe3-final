import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';


const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [favs, setFavs] = useState([]);

  // Obtenemos los datos de la API al cargar la página
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setDentists(data);
    };
    fetchData();
  }, []);

  const addToFavs = (dentist) => {
    const existingDentist = favs.find((fav) => fav.id === dentist.id);
    if (!existingDentist) {
      setFavs([...favs, dentist]);
    }
  };

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists?.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} addToFavs={addToFavs} />
        ))}
      </div>
    </main>
  );
};

export default Home;
