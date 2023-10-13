import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import "../css/image-slider.css"

const images = [
    {
        url: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: "50% sale"
    },
    {
        url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        title: 'mobile'
    },
    {
        url: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "books"
    },
    {
        url: 'https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'laptops'
    },
    {
        url: 'https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'accessories'
    }
]

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const slideInterval = setInterval(() => {
            currentIndex === 4 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
        }, 3000)
        return () => clearInterval(slideInterval)
    }, [currentIndex])

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastIndex = currentIndex === images.length - 1
        const newIndex = isLastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className='slider-container'>
            <div className='left-arrow' onClick={goToPrevious}>
                <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{ color: "#ffffff", }} />
            </div>
            <div className='right-arrow' onClick={goToNext}>
                <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{ color: "#ffffff", }} />
            </div>

            <div style={{ backgroundImage: `url(${images[currentIndex]?.url})` }} className='slide'></div>

            <div className='dot-container'>
                {images.map((slide, index) => (
                    <div key={index} className='dotStyle' onClick={() => goToSlide(index)}>
                        <div className={`dot ${index === currentIndex ? 'bg-color' : ''}`}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider
