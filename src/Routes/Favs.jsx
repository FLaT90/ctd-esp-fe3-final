import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

const Favs = () => {
  const [dentistsFavs, setDentistsFavs] = useState([]);

  useEffect(() => {
    const dentistsFavs = JSON.parse(localStorage.getItem('dentistsFavs')) || [];
    setDentistsFavs(dentistsFavs);
  }, []);

  const addToFavs = (dentist) => {
    if (!dentistsFavs.find((fav) => fav.id === dentist.id)) {
      const updatedDentistsFavs = [...dentistsFavs, dentist];
      localStorage.setItem('dentistsFavs', JSON.stringify(updatedDentistsFavs));
      setDentistsFavs(updatedDentistsFavs);
    }
  };

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      {dentistsFavs.length === 0 && <p>No hay dentistas favoritos aún.</p>}
      <div className='card-grid'>
        {dentistsFavs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} isInFavs={true} />
        ))}
      </div>
    </>
  );
};

export default Favs;
