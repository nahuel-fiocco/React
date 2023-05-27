import React, { useState } from 'react';
import Productos from './productos.js';
import './Accesorios.css'
import './Serie_S.css'

function Serie_S({ cantidadProductos }) {
  const [carrito, setCarrito] = useState([]);

  const productosSerieS = Productos.filter(producto => producto.categoria === 'Serie S');

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const restarProducto = (producto) => {
    const productoIndex = carrito.findIndex(item => item.idx === producto.idx);
    if (productoIndex !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(productoIndex, 1);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <div>
      <h1>Serie S</h1>
      {productosSerieS.map(producto => (
        <div key={producto.idx}>
          <img className='imagenes' src={producto.imagen1} alt={producto.titulo} />
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <div className="contenedor-botones">
            <button onClick={() => agregarProducto(producto)}>+</button>
            <button onClick={() => restarProducto(producto)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Serie_S;
