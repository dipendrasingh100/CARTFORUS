import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProducts } from '../app/productSlice'
import { useParams } from 'react-router-dom'
import Loader from "../components/Loader"
import ProductCard from '../components/ProductCard'
import { toastOptions } from '../utils/constants'
import Pagination from "react-js-pagination"
import "../css/page.css"

const ProductsCategory = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const { products, isLoading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector(state => state.products)

  const [currentPage, setCurrentPage] = useState(1)

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  useEffect(() => {
    dispatch(fetchProducts({ category, currentPage }))
  }, [dispatch, category, currentPage])

  let count = filteredProductsCount;

  if (error) {
    toast.error(error, toastOptions);
    return (
      <ToastContainer />
    )
  }
  return (
    <>
      <h1>{category}</h1>
      <h6 className=''>Showing {currentPage === 1 ? (count === 0 ? 0 : 1) : (resultPerPage * currentPage) - 4}-{count < resultPerPage ? count : resultPerPage * currentPage} of {count} results</h6>
      {
        isLoading
          ? <Loader />
          : <>
            <div className="p-card-container">
              {
                products && products.map(item => (
                  <ProductCard key={item._id} product={item} />
                ))
              }
            </div>

            {resultPerPage < count &&
              <div className="pagination-box">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText='Last'
                  itemClass='page-item'
                  linkClass='page-link'
                  activeClass='pageItemActive'
                  activeLinkClass='pageLinkActive'
                />
              </div>}
          </>
      }
    </>
  )
}

export default ProductsCategory
