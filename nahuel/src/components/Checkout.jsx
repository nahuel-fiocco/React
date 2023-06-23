import React, { useContext } from 'react';
import './Checkout.css';
import { AppContext } from './Contexto';

function Checkout() {
    const { carritoItems } = useContext(AppContext);

    const handleCheckout = (e) => {
        e.preventDefault();
        alert('Gracias por tu compra!');
    };

    return (
        <div className='container-general-checkout'>
            <div className='container-checkout'>
                {carritoItems.length > 0 ? (
                    <div>
                        <h3>Resumen de la compra:</h3>
                        <ul>
                            {carritoItems.map((producto) => (
                                <li key={producto.id}>
                                    <img id='img' src={producto.imagen1} alt={producto.titulo} width={100} />
                                    <h6>{producto.titulo}</h6>
                                    <p>${producto.precio}</p>
                                </li>
                            ))}
                        </ul>
                        <form onSubmit={handleCheckout}>
                            <label htmlFor='nombre'>Nombre:</label>
                            <input type='text' id='nombre' name='nombre' required />
                            <label htmlFor='correo'>Correo:</label>
                            <input type='email' id='correo' name='correo' required />
                            <button type='submit'>Realizar checkout</button>
                        </form>
                    </div>
                ) : (
                    <p>Tu carrito está vacío. Agrega elementos antes de proceder al checkout.</p>
                )}
            </div>
        </div>

    );
}

export default Checkout;
