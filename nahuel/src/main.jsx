import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Catalogo from './components/Catalogo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Catalogo />
    <Footer />
  </React.StrictMode>
);
