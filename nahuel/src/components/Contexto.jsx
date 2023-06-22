import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [carritoItems, setCarritoItems] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarritoItems([...carritoItems, producto]);
  };

  const eliminarDelCarrito = (productoId) => {
    const nuevosItems = carritoItems.filter((item) => item.id !== productoId);
    setCarritoItems(nuevosItems);
  };

  return (
    <AppContext.Provider value={{ carritoItems, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
