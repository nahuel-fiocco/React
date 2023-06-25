import React, { createContext, useEffect, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [carritoItems, setCarritoItems] = useState([]);

  useEffect(() => {
    const carritoData = localStorage.getItem('carritoItems');
    if (carritoData) {
      setCarritoItems(JSON.parse(carritoData));
    }
  }, []);

  const agregarAlCarrito = (producto) => {
    const existente = carritoItems.find((item) => item.id === producto.id);
    if (existente) {
      const nuevosItems = carritoItems.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarritoItems(nuevosItems);
    } else {
      setCarritoItems((prevCarritoItems) => [...prevCarritoItems, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (productoId) => {
    const nuevosItems = carritoItems.filter((item) => item.id !== productoId);
    setCarritoItems(nuevosItems);
  };

  const vaciarCarrito = () => {
    setCarritoItems([]);
    localStorage.removeItem('carritoItems');
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

  useEffect(() => {
    localStorage.setItem('carritoItems', JSON.stringify(carritoItems));
  }, [carritoItems]);

  return (
    <AppContext.Provider
      value={{ carritoItems, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, productosConCantidad }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
