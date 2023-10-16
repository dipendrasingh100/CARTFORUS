import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircleMinus, faCirclePlus, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { handleLink } from '../utils/helperFuction'
import logo from "../assets/logo/png/logo-color-resized.png"
import "../css/footer.css"

const Footer = () => {
    const [cat, setCat] = useState(false)
    const [info, setInfo] = useState(false)
    const [ser, setSer] = useState(false)
    return (
        <footer>
            <div className="footer container">
                <div className="subfooter">
                    <div className="subfooter-top">
                        <div className="about-container">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="about-text">
                                CARFORUS is your ultimate online shopping destination, offering a curated selection of high-quality products. With a user-friendly interface, seamless navigation, and a wide range of categories, makes shopping a breeze. Explore the best deals, discover trending items, and experience convenience like never before.
                            </div>
                        </div>
                        <div className="link-container">
                            <div className="title">QUICK LINK</div>
                            <div className="grid-3">
                                <div onClick={() => setCat(!cat)}>
                                    <div className="flex">
                                        <h5>Categories</h5>
                                        <FontAwesomeIcon icon={cat ? faCircleMinus : faCirclePlus} style={{ "--fa-primary-color": "#264653", "--fa-secondary-color": "#ffffff", }} />
                                    </div>
                                    <ul className={`col-1 ${cat && "show"}`}>
                                        <Link to='/products/mobile' onClick={() => handleLink()}><li>Mobiles</li></Link>
                                        <Link to='/products/laptop' onClick={() => handleLink()}><li>Laptops</li></Link>
                                        <Link to='/products/camera' onClick={() => handleLink()}><li>Cameras</li></Link>
                                        <Link to='/products/accessories' onClick={() => handleLink()}><li>Accessories</li></Link>
                                        <Link to='/products/book' onClick={() => handleLink()}><li>Books</li></Link>
                                    </ul>
                                </div>
                                <div onClick={() => setInfo(!info)}>
                                    <div className="flex">
                                        <h5>Information</h5>
                                        <FontAwesomeIcon icon={info ? faCircleMinus : faCirclePlus} style={{ "--fa-primary-color": "#264653", "--fa-secondary-color": "#ffffff", }} />
                                    </div>
                                    <ul className={`col-2 ${info && "show"}`}>
                                        <li>Track Your Order</li>
                                        <li>Shop All</li>
                                        <li>About us</li>
                                        <li>Blog</li>
                                        <li>Terms of use</li>
                                        <li>Careers</li>
                                    </ul>
                                </div>
                                <div onClick={() => setSer(!ser)}>
                                    <div className="flex">
                                        <h5>Service</h5>
                                        <FontAwesomeIcon icon={ser ? faCircleMinus : faCirclePlus} style={{ "--fa-primary-color": "#264653", "--fa-secondary-color": "#ffffff", }} />
                                    </div>
                                    <ul className={`col-3 ${ser && "show"}`}>
                                        <li>Refund Policy</li>
                                        <li>Replacement Policy</li>
                                        <li>Home appliances</li>
                                        <li>Brands</li>
                                        <li>Support</li>
                                        <li>Shipping Faq</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="contact-cont">
                            <div className="right-cont">
                                <div className="details">
                                    <div className="title">
                                        CONTACT US
                                    </div>
                                    <div className="sources">
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faMapPin} size="lg" style={{ color: "#fa0000", }} />
                                                <span>Plot # 53/19, Sector 31 Main Road, Near Housing Board Colony HSIIDC Apartments, Gurgaon, Haryana 122003</span>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} />
                                                <a href="mailto:support@cartforus.in">support@cartforus.in</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="right-cont">
                                <div className="details">
                                    <div className="title">SUBSCRIBE NOW</div>
                                    <div className="input-group sources">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email Address"
                                        />
                                        <span className="input-group-text" id="basic-addon1">
                                            <FontAwesomeIcon icon={faChevronRight} size="sm" style={{ color: "#264653" }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="subfooter-bottom">
                        <div className="copyright-text">
                            © Copyright 2023 by CARTFORUS
                        </div>
                        <div className="others">
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
