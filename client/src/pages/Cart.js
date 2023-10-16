import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, removefromCart, increaseQuantity, decreaseQuantity } from '../app/userSlice'
import { handleLink } from '../utils/helperFuction'
import "../css/cart.css"
// import PaypalCheckoutButton from '../components/PaypalCheckoutButton'
// import completion from "../assets/success.gif"
import emptycart from "../assets/emptycart.gif"

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  // const [success, setSuccess] = useState(false)
  const { user, error } = useSelector(state => state.user)

  useEffect(() => {
    handleLink()
    // Dispatch loadUser action when the component first renders
    dispatch(loadUser());
  }, [dispatch, error, navigate, location]);

  useEffect(() => {
    if (error) {
      window.location.reload()
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

  const handleOrder = () => {
    navigate("/user/order")
  }

  return (
    <>
      <div className='p-main-cont'>
        <div className='p-main-cont'>
          <div className="p-sub-cont">
            <div className="cart-left">
              <h2>Your Shopping Cart</h2>
              {user.cart.length === 0 ?
                <div className="gif">
                  <img src={emptycart} alt="emptycart" />
                </div>
                : user.cart.map(item => (
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
                <div className="items">
                  <span>Shipping Fee</span>
                  <span>Free</span>
                </div>
                <div className="items">
                  <span>Tax</span>
                  <span>₹0</span>
                </div>
                <div className="total">
                  <span>Total Amount</span>
                  <span>₹{findPrice()}</span>
                </div>
              </div>
              {user.cart.length > 0 &&
                <button className='btn place-order' onClick={handleOrder}>Place Order</button>
              }
              {/* 
                  <hr />

                  <div className="paypal-button-cont">
                    {user?.cart.length > 0 && <PaypalCheckoutButton total={findPrice()} setSuccess={setSuccess} />}
                  </div> */}
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default Cart
