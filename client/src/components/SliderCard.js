import React from 'react'

const SliderCard = ({ img, title, offer }) => {
    return (
        <div className="product-card">
            <div className='image-cont'>
                <img src={img} alt={title} />
            </div>
            <div className="product-title">
                {title}
            </div>
            <div className="offer">
                <strong>{offer} OFF</strong>
            </div>
        </div>
    )
}

export default SliderCard
