import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { useParams, useSearchParams } from 'react-router-dom'
import Pagination from "react-js-pagination"
import 'react-toastify/dist/ReactToastify.css';

import { fetchProducts } from '../app/productSlice'
import { toastOptions } from '../utils/constants'
import ProductCard from '../components/ProductCard'
import Loader from "../components/Loader"
import "../css/page.css"
import MetaData from '../components/MetaData';
import { handleLink } from '../utils/helperFuction';

const Products = () => {

  //to get the query paramerter from url
  const [searchParams] = useSearchParams()

  //to prevent keyword from null value
  const keyword = searchParams.get('q') || ""
  // const { keyword } = useParams()

  //if keyword then category will be undefined
  const { category } = useParams()

  const dispatch = useDispatch()
  const { products, isLoading, error, resultPerPage, filteredProductsCount } = useSelector(state => state.products)

  const [currentPage, setCurrentPage] = useState(1)

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  useEffect(() => {
    handleLink()
    dispatch(fetchProducts({ keyword, currentPage, category }))
  }, [dispatch, keyword, currentPage, category])

  let count = filteredProductsCount;

  if (error) {
    toast.error(error, toastOptions);
    return (
      <ToastContainer />
    )
  }
  return (
    <>
      <MetaData title={`${category ? category.toUpperCase(): keyword} || CARTFORUS`}/>
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
                  totalItemsCount={count}
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

export default Products
