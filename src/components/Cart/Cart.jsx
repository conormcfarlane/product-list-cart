import React, {useState} from 'react'
import './Cart.css'
import emptyCartImg from '/images/illustration-empty-cart.svg'
import removeButton from '/images/icon-remove-item.svg'
import iconCarbon from '/images/icon-carbon-neutral.svg'
import Modal from '../Modal/Modal'

export default function Cart({cart, addToCart, removeFromCart, thumbnail, clearCart}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity,0)
  const totalQuantity = cart.reduce((sum,item) => sum + item.quantity,0)
  
  const handleConfirmOrder = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setIsModalOpen(true)
    document.body.classList.add('no-scroll')
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
    document.body.classList.remove('no-scroll')
  }
  
  return (
    <>
      <div className='cart-container'>
        <h2 className='text-preset-2'>Your cart ({totalQuantity})</h2>

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
                </div>
                <div className="price-container">
                  <p className='text-preset-4-bold'>{dessert.quantity}x</p>
                  <p className='text-preset-4'>@ ${dessert.price.toFixed(2)}</p>
                  <p className='text-preset-4-bold'>${(dessert.price * dessert.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div className="cart-content-right">
                <button onClick={() => removeFromCart(dessert.id)}>
                  <img src={removeButton} alt="" />
                </button>
              </div>
            </div>
              ))}
              
              <div className='cart-total'>
                <p className='text-preset-4'>Order Total: </p>
                <p className='text-preset-2'>${total.toFixed(2)}</p>
              </div>

              <div className="carbon-neutral-wrapper">
                <img src={iconCarbon} alt="" />
                <p className='text-preset 4'> This is a <strong>carbon-neutral</strong> delivery
                </p>
              </div>

              <button onClick={handleConfirmOrder} className='confirm-order-btn text-preset-3'>
                Confirm Order
              </button>
            </div>
            
        )}
      </div>
      {isModalOpen && <Modal cart={cart} handleCloseModal={handleCloseModal} thumbnail={thumbnail} total={total} clearCart={clearCart}/>}
    </>
  )
}
