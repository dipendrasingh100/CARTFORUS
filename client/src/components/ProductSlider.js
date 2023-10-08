import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../css/product_slider.css"
import SliderCard from './SliderCard';

const ProductSlider = () => {
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

    const productData = [
        {
            id: 1,
            imageurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70",
            title: "APPLE iPhone 15 Plus",
            offer: "20%"
        },
        {
            id: 2,
            imageurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70",
            title: "OnePlus Nord CE 2 Lite 5G",
            offer: "15%"
        },
        {
            id: 3,
            imageurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/d/t/c/-original-imagsz6yn8qzwvsn.jpeg?q=70",
            title: "ASUS Vivobook 16X",
            offer: "25%"
        },
        {
            id: 4,
            imageurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/y/3/-original-imagtdwdegzuqhse.jpeg?q=70",
            title: "Lenovo Yoga Slim 6",
            offer: "31"
        },
        {
            id: 5,
            imageurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/v/q/-original-imagnrbv7ur8v4wq.jpeg?q=70",
            title: "boAt Nirvana Ion with 120 Hours Playback & Crystal Bion...",
            offer: "74%"
        },
        {
            id: 6,
            imageurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/e/g/-original-imagrh3th8hhnvf4.jpeg?q=70",
            title: "JBL Tune 770NC Active Noise Cancelling, 70Hr Playtime, ...",
            offer: "30%"
        },
        {
            id: 7,
            imageurl: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/x/u/e/sony-apsc-ilce-6100y-b-in5-mirrorless-original-imafm6msr4fghzfw.jpeg?q=70",
            title: "SONY Alpha ILCE-6100Y APS-C Mirrorless Camera with Dual Lens 16-50 mm & 55-210 mm Zoom Featuring Eye A...",
            offer: "12%"
        },
        {
            id: 8,
            imageurl: "https://rukminim2.flixcart.com/image/312/312/juwzf680/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imaffvrhzyqzayys.jpeg?q=70",
            title: "Canon EOS 200D II DSLR Camera EF-S18-55mm IS STM",
            offer: "13%"
        },
        {
            id: 9,
            imageurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/8/7/e/rich-dad-poor-dad-original-imagqjgv7v4y89ek.jpeg?q=70",
            title: "RICH DAD POOR DAD",
            offer: "50%"
        },
        {
            id: 10,
            imageurl: "https://rukminim2.flixcart.com/image/612/612/kzsqykw0/regionalbooks/r/e/z/the-7-habits-of-highly-effective-people-original-imagbq39ks6tjpwu.jpeg?q=70",
            title: "The 7 Habits Of Highly Effective People",
            offer: "64%"
        },
    ]
    return (
        <div className='product-sl-cont'>
            <Carousel responsive={responsive}>
                {
                    productData.map(item=>(
                        <SliderCard key={item.id} img={item.imageurl} title={item.title} offer={item.offer}/>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default ProductSlider
