import { React } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Soporte from './components/Soporte.jsx';
import NotFound from './components/NotFound.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import Carrito from './components/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemList />} />
        <Route path='/producto/:productId' element={<ItemDetailContainer/>} />
        <Route path="/Soporte" element={<Soporte />} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

//:D