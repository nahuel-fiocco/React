import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import AppContext from './Contexto';

function ItemList() {
  const { productList } = useContext(AppContext);

  return (
    <div className="card-container">
      {productList.map((product) => (
        <Link key={product.idx} to={`/producto/${product.idx}`}>
          <Item product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
