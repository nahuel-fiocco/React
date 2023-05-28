import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Productos from './productos.js';
import './Categoria.css';

function Categoria() {
    const { categoryId } = useParams();
    const productosCategoria = Productos.filter(producto => producto.categoria.toLowerCase() === categoryId.toLowerCase());

    return (
        <div>
            <h1>{categoryId}</h1>
            {productosCategoria.map(producto => (
                <div key={producto.idx}>
                    <img src={producto.imagen1} alt={producto.titulo} className='imagen' />
                    <h2>{producto.titulo}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Precio: ${producto.precio}</p>
                </div>
            ))}
        </div>
    );
}

export default Categoria;
