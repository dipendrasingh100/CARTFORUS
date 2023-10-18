import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { clearError, loadUser } from './app/userSlice'
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
import Order from './components/Order'


//can use lazy loading to improve the inital loading time

const App = () => {
  const dispatch = useDispatch()
  console.log(process.env.REACT_APP_HOST_URL);
  const { error } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  useEffect(() => {
    if (error==="Please Login") {
      dispatch(clearError())
    }
  }, [dispatch, error])

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
          <Route path='/products/:category/:brand' element={<Products />} />
          <Route path='/search' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route element={<RequireAuth />}>
            <Route path='/user/cart' element={<Cart />} />
            <Route path='/user/order' element={<Order />} />
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
