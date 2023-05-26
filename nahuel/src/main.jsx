import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />  
    <Footer />
  </React.StrictMode>
)
