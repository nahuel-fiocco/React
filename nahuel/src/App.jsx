import { React } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Soporte from './components/Soporte.jsx';
import NotFound from './components/NotFound.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categoria from './components/Categoria';
import Carrito from './components/Carrito';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Categoria />} />
        <Route path="/Soporte" element={<Soporte />} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);
