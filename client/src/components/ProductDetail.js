import React, { useEffect, useState } from 'react'
import "../css/product_detail.css"
import { changeSize } from '../utils/imageSizeModifier'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProductDetail = () => {
    const { id } = useParams()
    const { products } = useSelector(state => state.product)
    
    const [productDetails, setProductDetails] = useState(null)
    const [timg, setTimg] = useState(null)
    
    
    useEffect(() => {
        console.log("in useEffect");
        const product = products.find(item => item._id === id)
        console.log(product);
        setProductDetails(product)
        if (product && product.images.length > 0) {
            setTimg(changeSize(product.images[0], 416, 416))
        }
    }, [id, products])

    const handleThumb = (img) => {
        setTimg(productDetails && productDetails.images.length > 0 ? changeSize(img, 416, 416) : null)
    }
    return (
        <div className='p-main-cont'>
            <div className='p-sub-cont'>
                <div className='p-left-cont'>
                    <div className="thumb-container">
                        <div className="all-images">
                            {productDetails?.images.map((img, index) => (
                                <div key={index} onClick={() => handleThumb(img)}>
                                    <img src={img} alt={index} />
                                </div>
                            ))}
                        </div>
                        <div className="main-image">
                            <img src={timg} alt="iphone" />
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className='atc'>ADD TO CART</button>
                        <button className='bn'>BUY NOW </button>
                    </div>
                </div>
                <div className='p-right-cont'>
                    <div className="p-title">
                        {productDetails?.title}
                    </div>
                    <div className="p-rating">
                        {productDetails?.rating}
                    </div>
                    <div className="p-price-cont">
                        <div className="dis-p">₹{productDetails?.dis_price}</div>
                        <div className="act-p">₹{productDetails?.act_price}</div>
                        <div className="discount">{productDetails?.discount}% OFF</div>
                    </div>

                    <div className="offers-cont">
                        <p className='offers-title'>Available offers</p>
                        <ul>
                            {
                                productDetails?.offers?.map((offer, index) => (
                                    <li key={index}>
                                        <span>{offer[0]}, {offer[1]}</span>
                                        <span>T&C</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="additional-cont">
                        <div className="pp-cont">
                            <div className="d-name">Highlights</div>
                            <div className="d-info high">
                                <ul>
                                    {productDetails?.highlights?.map((feature, index) => (
                                        <li key={index}>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="pp-cont">
                            <div className="d-name">Description</div>
                            <div className="d-info desc">
                                {productDetails?.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
