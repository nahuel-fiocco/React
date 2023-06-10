import React, { useEffect, useState } from 'react'
import productos from './Productos.js'
import './ItemListContainer.css'
import ItemList from './ItemList.jsx'
import { BounceLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'
import { set } from 'react-hook-form'

function ItemListContainer() {

  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { categoryId } = useParams()

  const getList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 1000)
    })
  }

  useEffect(() => {
    setLoading(true)
    getList()
      .then((result) => {
        const filteredProducts = categoryId
          ? result.filter((product) => product.categoria === categoryId) : result;
        setProductList(filteredProducts)
      })
      .catch((error) => {
        setError(error)
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
        console.log('Finalizó la petición')
      })
  }, [categoryId])

  return (
    <div className='contenedor-home'>
      {loading && (
        <div className="spinner">
          <BounceLoader color={'#4891DC'} loading={true} size={50} speedMultiplier={2} />
          <p>Loading</p>
        </div>
      )}
      {error && <p>Hubo un error: {error.message}</p>}
      {!loading && !error && <ItemList products={productList} />}
    </div>
  )
}

export default ItemListContainer;
