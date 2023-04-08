import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ dentist, addToFavs }) => {
  return (
    <div className='card'>
      <Link to={`/dentist/${dentist.id}`}>
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
      </Link>
      <button onClick={() => addToFavs(dentist)}>Agregar a destacados</button>
    </div>
  );
};
export default Card;
