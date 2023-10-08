import React from 'react'
import ReactStars from "react-rating-stars-component"
import "../css/product.css"
import { Link } from 'react-router-dom'
const options = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    activeColor: '#ffd700',
    size: window.innerWidth < 600 ? 18 : 22,
    value: 2.5,
    isHalf: true
}
const Product = ({ product }) => {
    return (
        <Link to={`/product/${product._id}`}>
            <div className='productCard'>
                <img src={product.images[0].replace(/128/g, "416")} alt="mobile" />
                <p>{product.title}</p>
                <div>
                    <ReactStars {...options} />
                    <span>256 Reviews</span>
                </div>
                <span>₹{product.act_price}</span>
            </div>
        </Link>
    )
}

export default Product
