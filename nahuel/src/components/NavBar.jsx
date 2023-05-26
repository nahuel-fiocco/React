import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div className='container-fluid d-flex justify-content-center sticky-top'>
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <img width={30} src='https://upload.wikimedia.org/wikipedia/commons/f/f6/Samsung_icon.svg' alt="Samsung Icon" />
                </a>
                <a className="nav-link text-light" aria-current="page" href="#">
                    Serie S
                </a>
                <a className="nav-link text-light" aria-current="page" href="#">
                    Serie A
                </a>
                <a className="nav-link text-light" aria-current="page" href="#">
                    Accesorios
                </a>
                <a className="nav-link text-light" aria-current="page" href="#">
                    Soporte
                </a>
                <a className='nav-link' aria-current='page' href='#'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Antu_amarok_cart_add.svg" alt="Cart Icon White" width={30} />
                </a>
            </nav>
        </div>
    )
}

export default NavBar