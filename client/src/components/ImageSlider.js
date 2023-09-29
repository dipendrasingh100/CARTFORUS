import React, { useEffect, useState } from 'react'
import "../css/image-slider.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = ({ images }) => {
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
