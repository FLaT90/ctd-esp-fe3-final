import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ dentist, addToFavs, isInFavs }) => {
  const handleAddToFavs = () => {
    addToFavs(dentist);
    if (isInFavs) {
      alert('Este dentista ya está en favoritos.');
    } else {
      alert('Dentista agregado a favoritos.');
    }
  };

  return (
    <div className='card'>
      <Link to={`/dentist/${dentist.id}`}>
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
      </Link>
      {!isInFavs && <button onClick={handleAddToFavs}>Agregar a destacados</button>}
    </div>
  );
};
export default Card;
