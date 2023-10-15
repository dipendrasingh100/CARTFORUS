import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import Navigations from './Navigations'
import Search from './Search'
import User from './User'
import logo from "../assets/logo/png/logo-no-background.png"
import "../css/header.css"
import Hamburger from './Hamburger'

const Header = () => {
    const { user } = useSelector(state => state.user)
    const [isRotated, setIsRotated] = useState(false);

    return (
        <header>
            <div className="head-container">
                <div className="ham" onClick={() => setIsRotated(!isRotated)}>
                    {isRotated ?
                        <FontAwesomeIcon icon={faXmark} size="lg" /> :
                        <FontAwesomeIcon icon={faBars} size='lg' />
                    }
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <Search />
                <div className="user-main">
                    <User />
                    <Link to='/user/cart' className='cart-link'>
                        <div className="cart-container">
                            <span>{user ? user?.cart?.length : 0}</span>
                            <FontAwesomeIcon icon={faCartShopping} size='lg' />
                        </div>
                    </Link>
                </div>
            </div>
            <nav>
                {window.screen.width <= 500 && <Hamburger setIsRotated={setIsRotated} isRotated={isRotated} />}
                <Navigations />
            </nav>
        </header>
    )
}

export default Header
