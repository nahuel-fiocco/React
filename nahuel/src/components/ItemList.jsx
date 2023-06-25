import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

function ItemList({ productos }) {

  return (
    <div className="card-container">
      {productos.map((product) => (
        <Link key={product.idx} to={`/producto/${product.idx}`}>
          <Item product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
