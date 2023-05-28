import React from 'react';
import { useParams } from 'react-router-dom';
import Productos from './productos.js';
import './Producto.css';

function Producto() {
  const { productId } = useParams();
  const producto = Productos.find((p) => p.idx.toString() === productId);

  if (!producto) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className='container-producto'>
      <div className="left col-md-6">
        <img src={producto.imagen1} alt={producto.titulo} className='img' />
      </div>
      <div className="right col-md-6">
        <h1>{producto.titulo}</h1>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
      </div>
    </div>
  );
}

export default Producto;
