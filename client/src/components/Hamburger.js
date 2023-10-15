import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "../css/mob_nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Hamburger = ({ setIsRotated, isRotated }) => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const handleClick = (category, brand) => {
        setIsRotated(false)
        navigate(`/products/${category}/${brand}`)
    }
    return (
        <>
            <div className={`mob-navbar ${isRotated ? "slide-in" : ""}`}>
                <ul>
                    <li>
                        <Link to='/user/cart' onClick={() => setIsRotated(false)}>Your Cart</Link>
                    </li>
                </ul>
                <hr />
                <ul>
                    <li className='cat-cont'>
                        <NavLink to='/products/mobile' className={({ isActive }) => (isActive ? "show-border" : "")} onClick={() => setIsRotated(false)}>
                            Mobiles
                        </NavLink>
                        <FontAwesomeIcon icon={faAngleDown} size="xs" style={{ color: "#2A9D8F", }} onClick={() => setActive(!active)} />
                        <ul className={`sub-category ${active && "disp"}`}>
                            <li onClick={() => handleClick("mobile", "mi")}>MI</li>
                            <li onClick={() => handleClick("mobile", "realme")}>Realme</li>
                            <li onClick={() => handleClick("mobile", "apple")}>Apple</li>
                            <li onClick={() => handleClick("mobile", "oneplus")}>Oneplus</li>
                        </ul>
                    </li>
                    <li className='cat-cont'>
                        <NavLink to='/products/laptop' className={({ isActive }) => (isActive ? "show-border" : "")} onClick={() => setIsRotated(false)}>
                            Laptops
                        </NavLink>
                    </li>
                    <li className='cat-cont'>
                        <NavLink to='/products/camera' className={({ isActive }) => (isActive ? "show-border" : "")} onClick={() => setIsRotated(false)}>
                            Cameras
                        </NavLink>
                    </li>
                    <li className='cat-cont'>
                        <NavLink to='/products/accessories' className={({ isActive }) => (isActive ? "show-border" : "")} onClick={() => setIsRotated(false)}>
                            Accessories
                        </NavLink>
                    </li>
                    <li className='cat-cont'>
                        <NavLink to='/products/book' className={({ isActive }) => (isActive ? "show-border" : "")} onClick={() => setIsRotated(false)}>
                            Books
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Hamburger