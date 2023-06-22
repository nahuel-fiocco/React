import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './main.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Soporte from './components/Soporte.jsx';
import NotFound from './components/NotFound.jsx';
import Carrito from './components/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer';
import AppContext from './components/Contexto';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const App = () => {
  const [productList, setProductList] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <AppContext.Provider value={{ productList, setProductList }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/producto/:productId" element={<ItemDetailContainer />} />
            <Route path="/Soporte" element={<Soporte />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
};

root.render(<App />);
