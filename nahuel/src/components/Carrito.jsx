import React from 'react';
import './Carrito.css';

function Carrito() {
  return (
    // <div className="carrito-popup">
    //   <h3>Carrito</h3>
    //   <ul>
    //     {carritoItems.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <h1>Carrito</h1>
      <h4>Tu carrito contiene...</h4>
      <img src="https://media.tenor.com/M-ibWYQzmiIAAAAC/cat-cute.gif" alt="Sitio en Construccion" className='imagen-carrito' />
      <h5>Sitio en construccion, estamos trabajando para usted.</h5>
    </div>
  );
}

export default Carrito;
