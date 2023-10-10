import React from 'react'
import { Route, Routes } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Products from "./pages/Products"
import AuthLandingPage from './components/AuthLandingPage'
import RequireAuth from './components/RequireAuth'
import Cart from './pages/Cart'
import WhishList from './pages/WhishList'

import "./App.css"
import ProductDetails from './components/ProductDetails'
import ProductsCategory from './pages/ProductsCategory'

//can use lazy loading to improve the inital loading time

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/account/:auth' element={<AuthLandingPage />} />
          {/* <Route path='/password/forget' element={}/> */}
          <Route path='/products' element={<Products />} />
          <Route path='/products/:category' element={<Products />} />
          <Route path='/search' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
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
