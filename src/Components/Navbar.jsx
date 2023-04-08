import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/Home">Inicio </Link>
        </li>
        <li>
          <Link to="/Contact">Contacto </Link>
        </li>
        <li>
          <Link to="/Detail">Detalle </Link>
        </li>
        <li>
          <Link to="/Favs">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
