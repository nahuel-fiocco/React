import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './main.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Soporte from './components/Soporte.jsx';
import NotFound from './components/NotFound.jsx';
import Carrito from './components/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer';
import { AppProvider } from './components/Contexto';
import Checkout from './components/Checkout';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const App = () => {
  const [carritoItems, setCarritoItems] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarritoItems((prevCarritoItems) => [...prevCarritoItems, producto]);
  };

  return (
    <div>
      <BrowserRouter>
        <AppProvider value={{ carritoItems, agregarAlCarrito }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/producto/:productId" element={<ItemDetailContainer />} />
            <Route path="/Soporte" element={<Soporte />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
};

root.render(<App />);
