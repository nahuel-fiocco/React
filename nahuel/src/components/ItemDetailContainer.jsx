import React from 'react';
import { useParams } from 'react-router-dom';
import Productos from './Productos.json';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const { productId } = useParams();
  const producto = Productos.find((p) => p.idx.toString() === productId);

  if (!producto) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className='container-detail'>
      <div className="container-producto">
        <div className="left col-md-6">
          <img src={producto.imagen1} alt={producto.titulo} className='img' />
        </div>
        <div className="right col-md-6">
          <h1>{producto.titulo}</h1>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
      </div>
      <div className="moreInfo">
        <img src={producto.imagen2} />
        <img src={producto.imagen3} />
        <img src={producto.imagen4} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
