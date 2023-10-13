import React, { useEffect, useState } from 'react'
import { changeSize } from '../utils/imageSizeModifier'
import { Link } from 'react-router-dom'

const SliderCard = ({ id, img, title, offer }) => {
    const [timg, setTimg] = useState(null)

    useEffect(() => {
        if (img) {
            setTimg(changeSize(img, 312, 312))
        }
    }, [img])
    return (
        <Link to={`/product/${id}`}>
            <div className="product-card">
                <div className='image-cont'>
                    <img src={timg} alt={title} />
                </div>
                <div className="product-title">
                    {title}
                </div>
                <div className="offer">
                    <strong>{offer}% OFF</strong>
                </div>
            </div>
        </Link>
    )
}

export default SliderCard
