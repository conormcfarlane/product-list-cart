import React from 'react'
import './Cart.css'
import emptyCart from '/images/illustration-empty-cart.svg'

export default function Cart() {
  return (
    <div className='cart-container'>
      <h2>Your Cart (0)</h2>
      <div className='cart-empty'>
        <img src={emptyCart} alt="" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  )
}
