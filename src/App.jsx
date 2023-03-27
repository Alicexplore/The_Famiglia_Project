import React from "react"
import { useState } from 'react'
import {BrowserRouter as router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/About"
import Food from "./components/Food"
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import {Login} from './pages/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
        <router> 
          <Routes>
            <Route path='/' element={<Banner/>}/> 
            <Route path='/' element={<About/>}/> 
            <Route path='/' element={<Food/>}/> 
            <Route path='/login' element={<Login/>}/>  
          </Routes>
        </router>
      <Footer />
      <Copyright />
    </div>
    
  )
}

export default App
