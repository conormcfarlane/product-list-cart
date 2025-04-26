import React from 'react'
import './Cart.css'
import emptyCartImg from '/images/illustration-empty-cart.svg'

export default function Cart({cart, addToCart, removeFromCart}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity,0)
  
  return (
    <>
      <div className='cart-container'>
        <h2 className='text-preset-2'>Your cart ({cart.length})</h2>

        {cart.length === 0 ? (
            <div className='empty-cart-content'>
            <img src={emptyCartImg} alt="" />
            <p>Your added items will appear here</p>
          </div>
        ) : (
            <div className='cart-content'>
              {cart.map((dessert) => (
                <div key={dessert.id} className='cart-item'>
                  <div className="cart-content-left">
                <div className="name-container">
                 <p>{dessert.name}</p> 
                 <p>{dessert.id}</p>
                </div>
                <div className="price-container">
                  <p>{dessert.quantity}x</p>
                  <p>@ ${dessert.price}</p>
                </div>
              </div>
              <div className="cart-content-right">
                <button onClick={() => removeFromCart(dessert.id)}>REMOVE</button>
              </div>
            </div>
              ))}
              
              <div className='cart-Total'>
                <p>Total: ${total.toFixed(2)}</p>
              </div>
            </div>
            
        )}
      </div>
    </>
  )
}
