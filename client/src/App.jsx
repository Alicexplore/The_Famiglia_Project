import React from "react"
import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Food from "./components/Food"
import Footer from "./components/Footer";
import {Login} from './pages/Login';
import {Cart} from './pages/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/About' element={<About/>}/> 
            <Route path='/Food' element={<Food/>}/> 
            <Route path='/login' element={<Login/>}/> 
            <Route path='/cart' element={<Cart/>}/>  
          </Routes>
      <Footer />
      {/* <Copyright /> */}
    </div>
    
  )
}

export default App
