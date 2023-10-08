import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Navigations from './Navigations'
import Search from './Search'
import User from './User'
import logo from "../assets/logo/png/logo-no-background.png"
import "../css/header.css"

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
                        <Link to='/user/cart'>
                            <FontAwesomeIcon icon={faCartShopping} size='lg' />
                        </Link>
                    </div>
                </div>
            </div>
            <Navigations />
        </header>
    )
}

export default Header
