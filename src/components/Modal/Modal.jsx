import React from 'react'
import './Modal.css'
import iconConfirmed from '/images/icon-order-confirmed.svg'

export default function Modal({cart, handleCloseModal, total, clearCart}) {
  const handleStartNewOrder = () => {
    clearCart()
    handleCloseModal()
  }
  return (

    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className='modal-container'>
        <div className="modal-container-message">
            <img src={iconConfirmed} alt="" />
            <h2 className='text-preset-1'>Order Confirmed</h2>
            <p>We hope you enjoy your food</p>
        </div>
        <div className="modal-container-cart">
            {cart.map((dessert) => (
                <div key={dessert.id} className='modal-container-cart-item'>
                <div className='modal-container-cart-left'>
                  <img src={dessert.thumbnail} alt="" />
                  <div className="modal-container-item-text-container">
                    <p className='text-preset-4-bold'>{dessert.name}</p>
                    <div className='modal-container-prices'>
                    <p>{dessert.quantity}x</p>
                    <p className=''>${dessert.price.toFixed(2)}</p>
                    </div>
                  
                  </div>
                </div>
                <p className='modal-cart-item-price text-preset-4-bold'>{(dessert.price * dessert.quantity).toFixed(2)}</p>
                </div>

            ))}
            <div className='modal-total'>
          <p className='text-preset-4'>Order Total</p>
          <p className='text-preset-2'>${total.toFixed(2)}</p>
        </div>
        </div>
        
        <div className="modal-container-button">
            <button onClick={handleStartNewOrder}>Start New Order</button>
        </div>
    </div>

    </div>
    
  )
}
