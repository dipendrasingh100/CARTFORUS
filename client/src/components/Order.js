import React, { useEffect, useState } from 'react'
import "../css/order.css"
import PaypalCheckoutButton from './PaypalCheckoutButton'

import { Link } from 'react-router-dom'
import completion from "../assets/success.gif"
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItems } from '../app/userSlice'


const Order = () => {
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    useEffect(() => {
        if (success) {
            dispatch(removeCartItems(user._id))
        }
    }, [dispatch, success, user._id])
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
                            <button onClick={() => setSuccess(true)}>Cash On Delivery</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default Order
