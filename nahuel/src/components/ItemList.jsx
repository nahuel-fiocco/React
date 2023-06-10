import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

function ItemList({ products }) {
  return (
    <div className="card-container">
      {products.map((product) => (
        <Link to={`/producto/${product.idx}`} key={product.idx} className="card">
          <img src={product.imagen1} alt={product.titulo} />
          <h4>{product.titulo}</h4>
          <p>Precio: ${product.precio}</p>
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
