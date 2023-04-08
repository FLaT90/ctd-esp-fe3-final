import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import './App.css'



// Importar los componentes de las páginas


function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/Home" element ={<Home/>} />
        <Route path="/Contact" element ={<Contact/>} />
        <Route path="/Favs" element ={<Favs/>} />
        <Route path="/Detail" element ={<Detail/>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

