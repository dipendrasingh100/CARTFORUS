import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, removefromCart, increaseQuantity, decreaseQuantity } from '../app/userSlice'
import { handleLink } from '../utils/helperFuction'
import "../css/cart.css"

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { user, error } = useSelector(state => state.user)

  useEffect(() => {
    handleLink()
    // Dispatch loadUser action when the component first renders
    dispatch(loadUser());
  }, [dispatch, error, navigate, location]);

  useEffect(() => {
    if (error) {
      // window.location.reload()
    }
  }, [error])

  const increaseCartQuantity = (oid) => {
    dispatch(increaseQuantity({ uid: user._id, oid }))
  }

  const decreaseCartQuantity = (oid) => {
    dispatch(decreaseQuantity({ uid: user._id, oid }))
  }

  const removeItem = (id) => {
    dispatch(removefromCart({ uid: user._id, oid: id }))
  }

  const findPrice = () => {
    return user.cart.reduce((init, item) => (
      init + (item.productId.dis_price * item.quantity)
    ), 0)
  }

  return (
    <>
      {
        <div className='p-main-cont'>
          <div className="p-sub-cont">
            <div className="cart-left">
              <h2>Your Shopping Cart</h2>
              {user && user.cart.map(item => (
                <div className="p-cont" key={item._id}>
                  <div className="img-cont">
                    <img src={item.productId.images && item.productId?.images[0]} alt="item" />
                  </div>
                  <div className="mid">
                    <Link to={`/product/${item.productId?._id}`}>
                      <span>{item.productId.title}</span><br />
                    </Link>
                    <div className="p-price-cont cart">
                      <div className="dis-p">₹{item.productId?.dis_price}</div>
                      <div className="act-p">₹{item.productId?.act_price}</div>
                      <div className="discount">{item.productId?.discount}% OFF</div>
                    </div>
                    <div className="p-botton">
                      <div className="addtocart">
                        <button className='btn' onClick={() => decreaseCartQuantity(item._id)} disabled={item.quantity === 1}>-</button>
                        <input type="number" readOnly value={item.quantity} />
                        <button className='btn' onClick={() => increaseCartQuantity(item._id)}>+</button>
                      </div>
                      <span onClick={() => removeItem(item._id)}>Remove</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-right">
              <h3>Price Details</h3>
              <div>
                <div className="items">
                  <span>Price ({user.cart.length} item)</span>
                  <span>₹{findPrice()}</span>
                </div>
                <div className="total">
                  <span>Total Amount</span>
                  <span>₹{findPrice()}</span>
                </div>
              </div>
              <button className='btn place-order' >Place Order</button>
            </div>
          </div>
        </div >}
    </>
  )
}

export default Cart
