import React, { useContext, useState } from 'react';
import './Checkout.css';
import { AppContext } from './Contexto';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

function Checkout() {
  const { carritoItems, vaciarCarrito } = useContext(AppContext);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const generarOrden = () => {
    const comprador = { nombre: nombre, correo: correo, telefono: telefono };
    const productosAgrupados = carritoItems.reduce((acumulador, producto) => {
      const { id, titulo, precio, cantidad } = producto;

      if (acumulador[id]) {
        acumulador[id].cantidad += cantidad;
      } else {
        acumulador[id] = { id, titulo, precio, cantidad };
      }

      return acumulador;
    }, {});

    const items = Object.values(productosAgrupados);
    const fecha = new Date();
    const fechaNueva =
      fecha.getDate() +
      '/' +
      (fecha.getMonth() + 1) +
      '/' +
      fecha.getFullYear() +
      ' ' +
      fecha.getHours() +
      ':' +
      fecha.getMinutes() +
      ':' +
      fecha.getSeconds();
    const total = items.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    const orden = { comprador: comprador, items: items, fecha: fechaNueva, total: total };
    const db = getFirestore();
    const OrdersCollection = collection(db, 'orders');
    addDoc(OrdersCollection, orden)
      .then((resultado) => {
        setOrdenId(resultado.id);
      })
      .catch((resultado) => {
        console.log('Error: ', resultado);
      });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    e.target.reset();
    generarOrden();
    vaciarCarrito();
  };

  return (
    <div className="container-general-checkout">
      <div className="container-checkout">
        {carritoItems.length > 0 ? (
          <div>
            <h3>Resumen de la compra:</h3>
            <ul>
              {Object.values(
                carritoItems.reduce((acumulador, producto) => {
                  const { id, titulo, precio, cantidad } = producto;
                  if (acumulador[id]) {
                    acumulador[id].cantidad += cantidad;
                  } else {
                    acumulador[id] = { ...producto };
                  }
                  return acumulador;
                }, {})
              ).map((producto) => (
                <li key={producto.id}>
                  <img src={producto.imagen1} alt={producto.titulo} width={100} />
                  <h6>{producto.titulo}</h6>
                  <p>Cantidad: {producto.cantidad}</p>
                  <p>Precio: ${producto.precio}</p>
                </li>
              ))}
            </ul>
            <form onSubmit={handleCheckout}>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required onInput={(e) => setNombre(e.target.value)} />
              <label htmlFor="correo">Correo:</label>
              <input type="email" id="correo" name="correo" required onInput={(e) => setCorreo(e.target.value)} />
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" required onInput={(e) => setTelefono(e.target.value)} />
              <button type="submit">Realizar checkout</button>
            </form>
          </div>
        ) : (
          ''
        )}
        <div className="col text-center">
          {ordenId ? (
            <div className="alert alert-success" role="alert">
              Tu orden de compra fue generada con éxito. Tu número de orden es: {ordenId}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
