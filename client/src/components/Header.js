import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css"
import logo from "../assets/logo/png/logo-no-background.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Navigations from './Navigations'
import SideBar from './SideBar'
import Search from './Search'
import User from './User'

const Header = () => {
    const [burger, setBurger] = useState(false)
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
                {/* <div className='hamburger-icon' onClick={() => setBurger(!burger)}>
                    {burger ? <FontAwesomeIcon icon={faXmark} size='lg' /> :
                        <FontAwesomeIcon icon={faBars} size='lg' />}
                </div> */}
            </div>
            {/* <SideBar burger={burger} setBurger={setBurger} /> */}
            <Navigations />
        </header>
    )
}

export default Header
