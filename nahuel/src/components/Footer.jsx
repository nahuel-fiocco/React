import React from 'react'
import './Footer.css'
import github from '../assets/github.svg'


function Footer() {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center navbar-container'>
  <a className='link-repo text-decoration-none text-light' href="https://github.com/nahuel-fiocco/react" target='_blank'>
    <div className="d-flex align-items-center contenedor">
      <img src={github} alt="Github Icon" width={20} />
      <p className="m-0 ml-2">Nahuel Fiocco | Git Repo</p>
    </div>
  </a>
</div>
  )
}

export default Footer