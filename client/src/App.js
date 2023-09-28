import React from 'react'
import Header from './components/Header'
import "./App.css"
import { Route, Routes } from "react-router-dom"
import NotFound from './pages/NotFound'

import Home from './pages/Home'
import Footer from './components/Footer'
import Mobiles from "./pages/Mobiles"
import Laptops from "./pages/Laptops"
import Cameras from "./pages/Cameras"
import Accessories from "./pages/Accessories"
import Books from "./pages/Books"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/mobile-store' element={<Mobiles />} />
          <Route path='/laptop-store' element={<Laptops />} />
          <Route path='/camera-store' element={<Cameras />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/book-store' element={<Books />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
