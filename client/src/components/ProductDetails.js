import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { changeSize } from '../utils/imageSizeModifier'
import { fetchProductDetails } from '../app/productDetailsSlice'
import { toastOptions } from '../utils/constants'
import "../css/product_detail.css"
import Loader from './Loader';
import MetaData from './MetaData';
import { addItemToCart } from '../app/userSlice';
import { handleLink } from '../utils/helperFuction';


const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { product, isLoading, error } = useSelector(state => state.productDetails)
    const { isAuthenticated, isLoading: userLoading, user } = useSelector(state => state.user)

    const [quantity, setQuantity] = useState(1)

    const [timg, setTimg] = useState(null)


    useEffect(() => {
        handleLink()
        dispatch(fetchProductDetails(id))
    }, [dispatch, id])

    useEffect(() => {
        if (product && product.images.length > 0) {
            setTimg(changeSize(product.images[0], 416, 416))
        }
    }, [product])

    if (error) {
        toast.error(error, toastOptions);
    }

    const increaseQuantity = () => {
        setQuantity(quantity >= 1 ? quantity + 1 : 1)
    }
    const decreaseQuantity = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1)
    }
    const handleCart = () => {
        if (isAuthenticated) {
            dispatch(addItemToCart({ uid: user._id, productId: id, quantity }))
            toast.success("Item successfully added in cart", toastOptions);

        } else {
            console.log("inside else");
            // toast.error("You need to login first", toastOptions);
            navigate("/account/login", { state: { from: location } })
        }
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
                                    <button className='btn' onClick={decreaseQuantity}>-</button>
                                    <input type="number" readOnly value={quantity} />
                                    <button className='btn' onClick={increaseQuantity}>+</button>

                                    <button className='atc' onClick={handleCart}>{userLoading && <Loader />}ADD TO CART</button>
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
            <ToastContainer />
        </>
    )
}

export default ProductDetails
