import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Navigations from './Navigations'
import Search from './Search'
import User from './User'
import logo from "../assets/logo/png/logo-no-background.png"
import "../css/header.css"

const Header = () => {
    const { user } = useSelector(state => state.user)
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
                    <Link to='/user/cart'>
                        <div className="cart-container">
                            <span>{user ? user?.cart?.length : 0}</span>
                            <FontAwesomeIcon icon={faCartShopping} size='lg' />
                        </div>
                    </Link>
                </div>
            </div>
            <Navigations />
        </header>
    )
}

export default Header
