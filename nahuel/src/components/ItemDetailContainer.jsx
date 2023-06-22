import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import db from './Firebase';
import { doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {
  const { productId } = useParams();
  const [ producto, setProducto ] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoRef = doc(db, 'productos', productId);
        const docSnapshot = await getDoc(productoRef);

        if (docSnapshot.exists()) {
          const productoData = { id: docSnapshot.id, ...docSnapshot.data() };
          setProducto(productoData);
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.log(error);
        setProducto(null);
      }
    };

    fetchProducto();
  }, [productId]);

  if (!producto) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className='container-detail'>
      <div className="container-producto">
        <div className="left">
          <img src={producto.imagen1} alt={producto.titulo} className='img' />
        </div>
        <div className="right">
          <h1>{producto.titulo}</h1>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
      </div>
      <div className="moreInfo">
        <img src={producto.imagen2} alt="More Info" />
        <img src={producto.imagen3} alt="More Info" />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
