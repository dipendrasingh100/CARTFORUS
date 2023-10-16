import React, { useState } from 'react'
import "../css/order.css"
import PaypalCheckoutButton from './PaypalCheckoutButton'

import { Link } from 'react-router-dom'
import completion from "../assets/success.gif"


const Order = () => {
    const [success, setSuccess] = useState(false)
    return (
        <>
            {
                success ?
                    <div className='p-main-cont success'>
                        <div> Order Placed Successfully</div>
                        <Link to='/'><span>Shop More</span></Link>
                        <img src={completion} alt="success gif" />
                    </div > :
                    <div className='o-main-cont'>
                        <div className="address-cont">
                            <span>Address</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis, nisi minus nemo, neque autem molestias et,203130
                        </div>
                        <hr />
                        <div className="payment-options">
                            <PaypalCheckoutButton setSuccess={setSuccess} />
                            <div>-------Or-------</div>
                            <button>Cash On Delivery</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default Order
