import React from 'react'
import ImageSlider from '../components/ImageSlider'

const Home = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: "50% sale"
    },
    {
      url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'mobile'
    },
    {
      url: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "books"
    },
    {
      url: 'https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'laptops'
    },
    {
      url: 'https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'accessories'
    }
  ]
  return (
    <div>
      <ImageSlider images={images} />
      <h1>Home</h1>
    </div>
  )
}

export default Home
