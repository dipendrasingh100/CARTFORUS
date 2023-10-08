import React from 'react'
import "../css/nav.css"
import { NavLink } from 'react-router-dom'

const Navigations = ({burger}) => {

    return (
        <nav>
            <div className={`navbar ${burger && "mob-nav"}`}>
                <ul>
                    <NavLink to='/mobiles' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Mobiles</li>
                    </NavLink>
                    <NavLink to='/laptops' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Laptops</li>
                    </NavLink>
                    <NavLink to='/cameras' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Cameras</li>
                    </NavLink>
                    <NavLink to='/accessories' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Accessories</li>
                    </NavLink>
                    <NavLink to='/books' className={({ isActive }) => (isActive ? "show-border" : "")}>
                        <li>Books</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navigations
