import React, { useContext } from 'react';
import './Carrito.css';
import { AppContext } from './Contexto';
import { useNavigate } from 'react-router-dom';

function Carrito() {
    const { carritoItems, vaciarCarrito } = useContext(AppContext);
    const history = useNavigate();

    const handleComprar = () => {
        if (carritoItems.length === 0) {
            alert('No hay productos en el carrito');
        } else {
            history('/Checkout');
        }
    };

    const productosConCantidad = carritoItems.reduce((acumulador, producto) => {
        const existente = acumulador.find((item) => item.id === producto.id);
        if (existente) {
            existente.cantidad += producto.cantidad;
        } else {
            acumulador.push({ ...producto });
        }
        return acumulador;
    }, []);

    return (
        <div className="container-carrito">
            <div className="carrito-content">
                <ul>
                    {productosConCantidad.map((producto) => (
                        <li key={producto.id}>
                            <img src={producto.imagen1} alt={producto.titulo} width={100} />
                            <p>x{producto.cantidad}</p>
                            <h6>{producto.titulo}</h6>
                            <p>${producto.precio}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="carrito-detail">
                <h5>Total: ${carritoItems.reduce((acc, item) => acc + item.precio, 0)}</h5>
                <button type="button" className="btn btn-success" onClick={handleComprar}>
                    Comprar
                </button>
                <button id="vaciarCarrito" onClick={vaciarCarrito} type="button" className="btn btn-danger">
                    Vaciar carrito
                </button>
            </div>
        </div>
    );
}

export default Carrito;
