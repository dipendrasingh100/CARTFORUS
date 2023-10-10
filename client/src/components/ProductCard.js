import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'
import { reactStarsOptions } from '../utils/constants'
import "../css/product.css"

const ProductCard = ({ product }) => {

    return (
        <Link to={`/product/${product._id}`}>
            <div className='productCard'>
                <img src={product.images[0].replace(/128/g, "416")} alt="mobile" />
                <p>{product.title}</p>
                <div className='p-rating-cont'>
                    <ReactStars {...reactStarsOptions} value={product.rating} />
                    <span>256 Reviews</span>
                </div>
                <div className="p-price-cont">
                    <span className="discPrice">₹{product.dis_price}</span>
                    <span className='actPrice'>₹{product.act_price}</span>
                    <span className='discount'>{product.discount}% off</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
