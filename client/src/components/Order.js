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
                            <span>Address</span>: Opp Patel Stadium, Jaipur Road, Ajmer, Rajasthan, 305001
                            <br />
                            <span>Mobile No</span>: 0145 243 2297
                        </div>
                        <hr />
                        <div className="payment-options">
                            <div>Pay With :</div>
                            <br />
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
