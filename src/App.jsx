import React from "react"
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
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
    <Banner/>
    <About />
    <Food />
    <Footer />
    <Copyright />
      {/* <>
      <Routes>
        <Route path='/login' element={<Login/>}/>  
      </Routes>
      </>   */}
   
    </div>
    
  )
}

export default App
