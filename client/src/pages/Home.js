import React from 'react'
import ImageSlider from '../components/ImageSlider'
import ProductSlider from '../components/ProductSlider'
import MetaData from '../components/MetaData'

const Home = () => {

  return (
    <>
      <MetaData title="Home || CARTFORUS" />
      <div>
        <ImageSlider />

        <div className="p-container">
          <p className='p-bar-title'>Featured Products</p>
          <ProductSlider />
        </div>
        <div className="p-container">
          <p className='p-bar-title'>Best of Electronics</p>
          <ProductSlider />
        </div>
        <div className="p-container">
          <p className='p-bar-title'>Deal of the Day</p>
          <ProductSlider />
        </div>
      </div>
    </>
  )
}

export default Home
