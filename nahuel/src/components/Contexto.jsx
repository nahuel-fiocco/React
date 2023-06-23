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
    setCarritoItems([...carritoItems, producto]);
  };

  const eliminarDelCarrito = (productoId) => {
    const nuevosItems = carritoItems.filter((item) => item.id !== productoId);
    setCarritoItems(nuevosItems);
  };

  const vaciarCarrito = () => {
    setCarritoItems([]);
    localStorage.removeItem('carritoItems');
  };

  useEffect(() => {
    localStorage.setItem('carritoItems', JSON.stringify(carritoItems));
  }, [carritoItems]);

  return (
    <AppContext.Provider value={{ carritoItems, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };