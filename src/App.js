import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './Pages/Books';
import Product from './Pages/Product';

function App() {
  return (
    <div style={{ backgroundColor: "#c9ffee"}}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/books/:id' element={<Product/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App
