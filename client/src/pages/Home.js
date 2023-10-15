import React, { useEffect } from 'react'
import ImageSlider from '../components/ImageSlider'
import ProductSlider from '../components/ProductSlider'
import MetaData from '../components/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { featuredProducts } from '../app/productSlice'
import Loader from '../components/Loader'
import { handleLink } from '../utils/helperFuction'

const Home = () => {
  const dispatch = useDispatch()
  const { isLoading, featured, topdeals } = useSelector(state => state.products)

  useEffect(() => {
    handleLink()
    dispatch(featuredProducts())
  }, [dispatch])

  return (
    <>
      <MetaData title="Home || CARTFORUS" />
      <div>
        <ImageSlider />

        <div className="p-container">
          <p className='p-bar-title'>Featured Products</p>
          {
            isLoading ?
              <Loader />
              : <ProductSlider data={featured} />
          }
        </div>

        <div className="p-container">
          <p className='p-bar-title'>Top Deals</p>
          {
            isLoading ?
              <Loader />
              : <ProductSlider data={topdeals} />
          }
        </div>
      </div>
    </>
  )
}

export default Home