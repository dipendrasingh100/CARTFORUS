import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "../css/mob_nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Hamburger = ({ setIsRotated, isRotated }) => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate()
    const handleClick = (category, brand) => {
        setIsRotated(false)
        navigate(`/products/${category}/${brand}`)
    }
    useEffect(()=>{
        if (isRotated===false){
            setActive(0)
        }
    },[isRotated])
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
                        <FontAwesomeIcon icon={faAngleDown} size="xs" style={{ color: "#2A9D8F", }} onClick={() => active === 1 ? setActive(0) : setActive(1)} />
                        <ul className={`sub-category ${active === 1 && "disp"}`}>
                            <li onClick={() => handleClick("mobile", "apple")}>Apple</li>
                            <li onClick={() => handleClick("mobile", "mi")}>MI</li>
                            <li onClick={() => handleClick("mobile", "moto")}>Motorola</li>
                            <li onClick={() => handleClick("mobile", "realme")}>Realme</li>
                            <li onClick={() => handleClick("mobile", "oneplus")}>Oneplus</li>
                        </ul>
                    </li>
                    <li className='cat-cont'>
                        <NavLink to='/products/laptop' className={({ isActive }) => (isActive ? "show-border" : "")}>
                            Laptops
                            <FontAwesomeIcon icon={faAngleDown} size="xs" style={{ color: "#2A9D8F", }} onClick={() => active === 2 ? setActive(0) : setActive(2)} />
                        </NavLink>
                        <ul className={`sub-category ${active === 2 && "disp"}`}>
                            <li onClick={() => handleClick("laptop", "acer")}>Acer</li>
                            <li onClick={() => handleClick("laptop", "apple")}>Apple</li>
                            <li onClick={() => handleClick("laptop", "asus")}>Asus</li>
                            <li onClick={() => handleClick("laptop", "hp")}>HP</li>
                            <li onClick={() => handleClick("laptop", "msi")}>MSI</li>
                        </ul>
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
