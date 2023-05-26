import React from 'react'
import Cart from './Cart'
import './NavBar.css'
import samsung from '../assets/samsung-icon-white.png';

function NavBar() {
    return (
        <div className='container-fluid'>
            <a className="navbar-brand" href="#">
                <img width={110} src={samsung} alt="Samsung Icon" />
            </a>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <a className="nav-link" aria-current="page" href="#">
                    Celulares
                </a>
                <a className="nav-link" aria-current="page" href="#">
                    Notebooks
                </a>
                <a className="nav-link" aria-current="page" href="#">
                    Soporte
                </a>
            </nav>
            <a className='nav-link' aria-current='page' href='#'>
                <Cart />
            </a>
        </div>
    )
}

export default NavBar