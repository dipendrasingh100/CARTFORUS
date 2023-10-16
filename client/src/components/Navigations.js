import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../css/nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Navigations = () => {
    const navigate = useNavigate()
    const handleClick = (category, brand) => {
        navigate(`/products/${category}/${brand}`)
    }
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li className='cat-cont'>
                        <NavLink to='/products/mobile' className={({ isActive }) => (isActive ? "show-border" : "")}>
                            Mobiles
                            <FontAwesomeIcon icon={faAngleDown} size="xs" style={{ color: "#2A9D8F", }} />
                        </NavLink>
                        <ul className='sub-category'>
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
                            <FontAwesomeIcon icon={faAngleDown} size="xs" style={{ color: "#2A9D8F", }} />
                        </NavLink>
                        <ul className='sub-category'>
                            <li onClick={() => handleClick("laptop", "acer")}>Acer</li>
                            <li onClick={() => handleClick("laptop", "apple")}>Apple</li>
                            <li onClick={() => handleClick("laptop", "asus")}>Asus</li>
                            <li onClick={() => handleClick("laptop", "hp")}>HP</li>
                            <li onClick={() => handleClick("laptop", "msi")}>MSI</li>
                        </ul>
                    </li>
                    <li className='cat-cont'>
                        <NavLink to='/products/camera' className={({ isActive }) => (isActive ? "show-border" : "")}>
                            Cameras
                        </NavLink>
                    </li>
                    <li className='cat-cont'>
                        <NavLink to='/products/accessories' className={({ isActive }) => (isActive ? "show-border" : "")}>
                            Accessories
                        </NavLink>
                    </li>
                    <li className='cat-cont'>
                        <NavLink to='/products/sport' className={({ isActive }) => (isActive ? "show-border" : "")}>
                            Sports
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigations
