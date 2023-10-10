import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { changeSize } from '../utils/imageSizeModifier'
import { fetchProductDetails } from '../app/productDetailsSlice'
import { toastOptions } from '../utils/constants'
import "../css/product_detail.css"
import Loader from './Loader';
import MetaData from './MetaData';


const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { product, isLoading, error } = useSelector(state => state.productDetails)

    const [quantity, setQuantity] = useState(1)

    const [timg, setTimg] = useState(null)


    useEffect(() => {
        dispatch(fetchProductDetails(id))
    }, [dispatch, id])

    useEffect(() => {
        if (product && product.images.length > 0) {
            setTimg(changeSize(product.images[0], 416, 416))
        }
    }, [product])

    if (error) {
        toast.error(error, toastOptions);
        return (
            <ToastContainer />
        )
    }


    const handleThumb = (img) => {
        setTimg(product && product.images.length > 0 ? changeSize(img, 416, 416) : null)
    }
    return (
        <>
            <MetaData title={`${product?.title} || CARTFORUS`} />

            {
                isLoading
                    ? <Loader />
                    : <div className='p-main-cont'>
                        <div className='p-sub-cont'>
                            <div className='p-left-cont'>
                                <div className="thumb-container">
                                    <div className="all-images">
                                        {product?.images.map((img, index) => (
                                            <div key={index} onClick={() => handleThumb(img)}>
                                                <img src={img} alt={index} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="main-image">
                                        <img src={timg} alt="iphone" />
                                    </div>
                                </div>
                            </div>
                            <div className='p-right-cont'>
                                <div className="p-title">
                                    {product?.title}
                                </div>
                                <div className="p-rating">
                                    {product?.rating}
                                </div>
                                <div className="p-price-cont">
                                    <div className="dis-p">₹{product?.dis_price}</div>
                                    <div className="act-p">₹{product?.act_price}</div>
                                    <div className="discount">{product?.discount}% OFF</div>
                                </div>

                                <div className="offers-cont">
                                    <p className='offers-title'>Available offers</p>
                                    <ul>
                                        {
                                            product?.offers?.map((offer, index) => (
                                                <li key={index}>
                                                    <span>{offer[0]}, {offer[1]}</span>
                                                    <span>T&C</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="addtocart">
                                    <button className='btn' onClick={() => setQuantity(quantity >= 1 ? quantity + 1 : 1)}>+</button>
                                    <input type="number" name="" id="" value={quantity} onChange={(e) => setQuantity(Number(e.target.value) >= 1 ? Number(e.target.value) : 1)} />
                                    <button className='btn' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                                    <button className='atc'>ADD TO CART</button>
                                </div>

                                <div className="additional-cont">
                                    <div className="pp-cont">
                                        <div className="d-name">Highlights</div>
                                        <div className="d-info high">
                                            <ul>
                                                {product?.highlights?.map((feature, index) => (
                                                    <li key={index}>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pp-cont">
                                        <div className="d-name">Description:</div>
                                        <div className="d-info desc">
                                            {product?.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
        </>
    )
}

export default ProductDetails
