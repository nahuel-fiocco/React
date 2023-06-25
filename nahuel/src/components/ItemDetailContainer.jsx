import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import db from './Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { AppContext } from './Contexto';
import ItemQuantitySelector from './ItemQuantitySelector';
import Loading from './Loading';

function ItemDetailContainer() {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const { carritoItems, agregarAlCarrito, eliminarDelCarrito } = useContext(AppContext);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  useEffect(() => {
    const fetchProducto = async () => {
      setLoading(true);
      try {
        const productoRef = doc(db, 'productos', productId);
        const docSnapshot = await getDoc(productoRef);

        if (docSnapshot.exists()) {
          const productoData = { id: docSnapshot.id, ...docSnapshot.data() };
          setProducto(productoData);
        } else {
          setProducto(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setProducto(null);
        setLoading(false);
      }
    };
    fetchProducto();
  }, [productId]);

  useEffect(() => {
    if (producto) {
      const encontrado = carritoItems.find((item) => item.id === producto.id);
      setSelectedQuantity(encontrado ? encontrado.cantidad : 1);
      setSelectedQuantity(1);
    }
  }, [carritoItems, producto]);

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  const handleAgregarCarrito = () => {
    for (let i = 0; i < selectedQuantity; i++) {
      agregarAlCarrito(producto);
    }
    setSelectedQuantity(0);
  };

  const handleQuitarCarrito = () => {
    for (let i = 0; i < selectedQuantity; i++) {
      eliminarDelCarrito(producto.id);
    }
    setSelectedQuantity(0);
  };

  const enCarrito = producto && carritoItems.some((item) => item.id === producto.id);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container-detail">
        <div className="container-producto">
          <div className="left">
            <img src={producto.imagen1} alt={producto.titulo} className="img" />
          </div>
          <div className="right">
            <h1>{producto.titulo}</h1>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            {enCarrito ? (
              <div>
                <ItemQuantitySelector
                  key={selectedQuantity}
                  initialQuantity={selectedQuantity}
                  onQuantityChange={handleQuantityChange}
                />
                <button type="button" className="btn btn-danger" onClick={handleQuitarCarrito}>
                  Quitar del carrito
                </button>
              </div>
            ) : (
              <div>
                <ItemQuantitySelector
                  key={selectedQuantity}
                  initialQuantity={selectedQuantity}
                  onQuantityChange={handleQuantityChange}
                />
                <button type="button" className="btn btn-success" onClick={handleAgregarCarrito}>
                  Agregar al carrito
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="divider" onClick={toggleMoreInfo}>
          Mas Informacion
        </div>
        {showMoreInfo && (
          <div className="moreInfo">
            <img src={producto.imagen2} alt="More Info" />
            <img src={producto.imagen3} alt="More Info" />
          </div>
        )}
      </div>
    );
  }
}

export default ItemDetailContainer;
