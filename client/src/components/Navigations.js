import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/nav.css"

const Navigations = ({burger}) => {

    return (
        <nav>
            <div className={`navbar ${burger && "mob-nav"}`}>
                <ul>
                    <NavLink to='/products/mobile' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Mobiles</li>
                    </NavLink>
                    <NavLink to='/products/laptop' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Laptops</li>
                    </NavLink>
                    <NavLink to='/products/camera' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Cameras</li>
                    </NavLink>
                    <NavLink to='/products/accessories' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Accessories</li>
                    </NavLink>
                    <NavLink to='/products/book' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Books</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navigations
