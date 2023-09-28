import React from 'react'
import "../css/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const SideBar = ({burger, setBurger}) => {
    return (
        <div>
            <div className={`sidebar ${burger && "active"}`}>
                <ul>
                    <li>Register/Login</li>
                    <li>Cart</li>
                </ul>
                <hr />
                <ul>
                    <li>Mobiles</li>
                    <li>Laptops</li>
                    <li>Cameras</li>
                    <li>Accessories</li>
                    <li>Books</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
