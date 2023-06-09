import React, { useEffect, useState } from 'react'
import productos from './Productos.js'
import './ItemListContainer.css'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'

function ItemListContainer() {

  const [productList, setProductList] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const filteredProducts = categoryId
      ? productos.filter((producto) => producto.categoria === categoryId) : productos;
    setProductList(filteredProducts)
  }, [categoryId])

  return (
    <div className='contenedor-home'>
      <ItemList products={productList} />
    </div>
  )
}

export default ItemListContainer;