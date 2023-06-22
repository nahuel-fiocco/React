import React, { useEffect, useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from './ItemList.jsx';
// import AppContext from './Contexto';
import db from './Firebase';
import { getDoc, doc } from 'firebase/firestore';

function ItemListContainer() {
  const [item, setItem] = useState([]);
  // const { categoryId } = useParams();
  // const { setProductList } = useContext(AppContext);

  useEffect(() => {
    const producto = doc(db, 'productos', '1');
    getDoc(producto).then(resultado => {
      if(resultado.exists()){
        setItem({id: resultado.id, ...resultado.data()});
        console.log("Se encontro el producto :)");
      } else{
        console.error("No existe el producto :(");
      }
    });
  }, []);

  return (
    <div className="contenedor-home">
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
