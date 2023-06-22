import React from 'react';

function Item({ product }) {
    return (
        <div>
            <img src={product.imagen1} alt={product.titulo} />
            <h4>{product.titulo}</h4>
            <p>Precio: ${product.precio}</p>
        </div>
    );
}

export default Item;
