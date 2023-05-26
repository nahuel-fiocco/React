import React from 'react'
import a54 from '../assets/a54.webp'
import s23 from '../assets/s23-series.jpg'
import buds from '../assets/buds.webp';
import './Home.css'

function Home() {
  return (
    <div className='contenedor-home'>
      <div className='contenedor-imagen-destacada'>
        <img className='imagen-destacada' src={s23} alt="Galaxy S23" />
      </div>
      <div className='contenedor-imagen-destacada'>
        <img className='imagen-destacada' src={a54} alt="Galaxy A54" />
      </div>
      <div className='contenedor-imagen-destacada'>
        <img className='imagen-destacada' src={buds} alt="Galaxy Buds" />
      </div>
    </div>
  )
}

export default Home