import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from './ItemList.jsx';
import db from './Firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

function ItemListContainer() {
  const [item, setItem] = useState([]);
  const { categoryId } = useParams();

 useEffect(() => {
  const productosRef = collection(db, 'productos');
  const q = categoryId ? query(productosRef, where('categoria', '==', categoryId)) : productosRef;

  getDocs(q)
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItem(items);
    })
    .catch((error) => {
      console.log(error);
    });
}, [categoryId]);

  return (
    <div className="contenedor-home">
      <ItemList productos={item} />
    </div>
  );
}

export default ItemListContainer;
