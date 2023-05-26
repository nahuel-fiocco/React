import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import SerieA from './components/SerieA.jsx'
import SerieS from './components/SerieS.jsx'
import Accesorios from './components/Accesorios.jsx'
import Soporte from './components/Soporte.jsx'
import Carrito from './components/Carrito.jsx'
import NotFound from './components/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/SerieA"} element={<SerieA />} />
        <Route path={"/SerieS"} element={<SerieS />} />
        <Route path={"/Accesorios"} element={<Accesorios />} />
        <Route path={"/Soporte"} element={<Soporte />} />
        <Route path={"/Carrito"} element={<Carrito />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
)
