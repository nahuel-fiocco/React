import React from 'react';

function Item({ product }) {
  const { imagen1, titulo, precio } = product;

  return (
    <div>
      <img src={imagen1} alt={titulo} />
      <h4>{titulo}</h4>
      <p>Precio: ${precio}</p>
    </div>
  );
}

export default Item;
