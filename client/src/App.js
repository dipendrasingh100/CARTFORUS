import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import { useDispatch } from 'react-redux'

import { loadUser } from './app/userSlice'
import AuthLandingPage from './components/AuthLandingPage'
import ProductDetails from './components/ProductDetails'
import RequireAuth from './components/RequireAuth'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Products from "./pages/Products"
import WhishList from './pages/WhishList'
import Home from './pages/Home'
import Cart from './pages/Cart'

import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword.js'


//can use lazy loading to improve the inital loading time

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/account/:auth' element={<AuthLandingPage />} />
          <Route path='/password/forgot' element={<ForgotPassword />} />
          <Route path='/password/reset/:token' element={<ResetPassword />} />
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
