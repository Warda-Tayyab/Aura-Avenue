import './CartItems.css'
import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartItems'>
            <h2>Shopping Cart</h2>
            <div className='cartitems-header'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className='cartitem'>
                            <img src={e.image} alt={e.name} className='cart-product-image' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <div className='quantity-container'>
                                <input
                                    type="number"
                                    value={cartItems[e.id]}
                                    className='cart-quantity-input'
                                    readOnly
                                />
                            </div>
                            <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                            <img
                                src={remove_icon}
                                className='remove-icon'
                                alt="Remove"
                                onClick={() => removeFromCart(e.id)}
                            />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cart-summary">
                <div className="cart-total">
                    <h3>Cart Totals</h3>
                    <div className="cart-total-item">
                        <span>Subtotal</span>
                        <span>${getTotalCartAmount()}</span>
                    </div>
                    <div className="cart-total-item">
                        <span>Shipping Fee</span>
                        <span>Free</span>
                    </div>
                    <div className="cart-total-item total">
                        <strong>Total</strong>
                        <strong>${getTotalCartAmount()}</strong>
                    </div>
                    <button className='checkout-button'>Proceed to Checkout</button>
                </div>

               
            </div>
        </div>
    )
}

export default CartItems;
