import React, { useContext } from 'react';
import './Carrito.css';
import { AppContext } from './Contexto';

function Carrito() {
  const { carritoItems } = useContext(AppContext);

  return (
    <div className="container-carrito">
      <h2>El carrito contiene:</h2>
      <div className='carrito-content'>
        <ul>
          {carritoItems.map((producto) => (
            <li key={producto.id}>
              <img src={producto.imagen1} alt={producto.titulo} width={100} />
              <h6>{producto.titulo}</h6>
              <p>${producto.precio}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="carrito-total">
        <h3>Total: ${carritoItems.reduce((acc, item) => acc + item.precio, 0)}</h3>
      </div>
    </div>
  );
}

export default Carrito;
