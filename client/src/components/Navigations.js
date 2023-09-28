import React from 'react'
import "../css/nav.css"
import { NavLink } from 'react-router-dom'

const Navigations = ({burger}) => {

    return (
        <nav>
            <div className={`navbar ${burger && "mob-nav"}`}>
                <ul>
                    <NavLink to='/mobile-store' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Mobiles</li>
                    </NavLink>
                    <NavLink to='/laptop-store' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Laptops</li>
                    </NavLink>
                    <NavLink to='/camera-store' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Cameras</li>
                    </NavLink>
                    <NavLink to='/accessories' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Accessories</li>
                    </NavLink>
                    <NavLink to='/book-store' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Books</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navigations
