import React from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css"
import logo from "../assets/logo/png/logo-no-background.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Navigations from './Navigations'
import Search from './Search'
import User from './User'

const Header = () => {
    return (
        <header>
            <div className="head-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <Search />
                <div className="user-main">
                    <User />
                    <div className="cart-container">
                        <FontAwesomeIcon icon={faCartShopping} size='lg' />
                    </div>
                </div>
            </div>
            <Navigations />
        </header>
    )
}

export default Header
