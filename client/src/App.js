import React from 'react'
import { Route, Routes } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Mobiles from "./pages/Mobiles"
import Laptops from "./pages/Laptops"
import Cameras from "./pages/Cameras"
import Accessories from "./pages/Accessories"
import Books from "./pages/Books"
import AuthLandingPage from './components/AuthLandingPage'
import RequireAuth from './components/RequireAuth'
import Cart from './pages/Cart'
import WhishList from './pages/WhishList'

import "./App.css"
import ProductDetail from './components/ProductDetail'
import Loader from './components/Loader'
//can use lazy loading to improve the inital loading time

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/account/:auth' element={<AuthLandingPage />} />
          <Route path='/:category' element={<Mobiles />} />
          {/* <Route path='/laptop-store' element={<Loader />} /> */}
          {/* <Route path='/camera-store' element={<Cameras />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/book-store' element={<Books />} /> */}
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route element={<RequireAuth />}>
            <Route path='/user/cart' element={<Cart />} />
            <Route path='/user/whishlist' element={<WhishList />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
