import React, { useEffect } from 'react'
import Product from '../components/Product'
import "../css/page.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../app/productSlice'

const Mobiles = () => {
  const dispatch = useDispatch()
  const { products, isLoading, isError, productsCount } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div>
      <h1>Smartphones</h1>
      <div className="p-card-container">
        {
          products && products.map(item=>(
            <Product key={item._id} product={item}/>
          ))

        }
      </div>
    </div>
  )
}

export default Mobiles
