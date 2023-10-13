import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../css/product_slider.css"
import SliderCard from './SliderCard';

const ProductSlider = ({ data }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1400 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1400, min: 1100 },
            items: 5
        },
        lap: {
            breakpoint: { max: 1100, min: 850 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 850, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='product-sl-cont'>
            {data && <Carousel responsive={responsive}>
                {
                    data?.map(item => (
                        <SliderCard key={item._id} id={item._id} img={item.images[0]} title={item.title} offer={item.discount} />
                    ))
                }
            </Carousel>}
        </div>
    )
}

export default ProductSlider
