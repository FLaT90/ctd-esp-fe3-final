import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); // Obtener el parámetro dinámico de la URL
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario

  useEffect(() => {
    // Realizar el fetch al usuario específico
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <>
      <h1>Detail Dentist id {id}</h1>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
