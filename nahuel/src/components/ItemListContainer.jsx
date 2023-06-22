import React, { useEffect, useState, useContext } from 'react';
import { BounceLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from './ItemList.jsx';
import AppContext from './Contexto';
import productos from './Productos.json';

function ItemListContainer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();
  const { setProductList } = useContext(AppContext);

  const getList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  };

  useEffect(() => {
    setLoading(true);
    getList()
      .then((result) => {
        const filteredProducts = categoryId
          ? result.filter((product) => product.categoria === categoryId)
          : result;
        setProductList(filteredProducts);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        console.log('Finalizó la petición');
      });
  }, [categoryId, setProductList]);

  return (
    <div className="contenedor-home">
      {loading && (
        <div className="spinner">
          <BounceLoader color={'#4891DC'} loading={true} size={50} speedMultiplier={2} />
          <p>Loading</p>
        </div>
      )}
      {error && <p>Hubo un error: {error.message}</p>}
      {!loading && !error && <ItemList />}
    </div>
  );
}

export default ItemListContainer;
