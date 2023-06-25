import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from './ItemList.jsx';
import db from './Firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Loading from './Loading';

function ItemListContainer() {
  const [item, setItem] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productosRef = collection(db, 'productos');
    const q = categoryId ? query(productosRef, where('categoria', '==', categoryId)) : productosRef;

    getDocs(q)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItem(items);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setItem([]);
        setLoading(false);
      });
  }, [categoryId]);

  useEffect(() => {
    setLoading(false);
  }, [item]);

  if (loading) {
    <Loading />;
  } else {
    return (
      <div className="contenedor-home">
        <ItemList productos={item} />
      </div>
    );
  }
}

export default ItemListContainer;
