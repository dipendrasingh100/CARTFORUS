import React, { useEffect } from 'react'
import Product from '../components/Product'
import "../css/page.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../app/productSlice'
import { useParams } from 'react-router-dom'
import Loader from "../components/Loader"

const Mobiles = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const { products, isLoading, isError, productsCount } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <h1>{category}</h1>
      {
        isLoading ? <Loader />
          :
          <div className="p-card-container">
            {
              products && products.map(item => (
                <Product key={item._id} product={item} />
              ))

            }
          </div>
      }
    </>
  )
}

export default Mobiles
