import React from 'react'
import ReactStars from "react-rating-stars-component"
import "../css/product.css"
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    const options = {
        edit: false,
        color: 'rgba(20,20,20,0.1)',
        activeColor: '#ffd700',
        size: window.innerWidth < 600 ? 18 : 22,
        value: product.rating,
        isHalf: true
    }
    return (
        <Link to={`/product/${product._id}`}>
            <div className='productCard'>
                <img src={product.images[0].replace(/128/g, "416")} alt="mobile" />
                <p>{product.title}</p>
                <div className='p-rating-cont'>
                    <ReactStars {...options} />
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

export default Product
