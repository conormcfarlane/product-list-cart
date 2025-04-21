import React from 'react'
import './DessertCard.css'
import iconAddToCart from '/images/icon-add-to-cart.svg'

export default function DessertCard({name, category, price, thumbimage, desktopImg, mobileImg, tabletImg, addToCart}) {
  return (
    <div className='dessert-card'>
      <div className='img-container'>
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopImg} />
        <source media="(min-width: 768px)" srcSet={tabletImg} />
        <img src={mobileImg} />
      </picture>
      <button className='add-to-cart-btn' onClick={addToCart}>
        
        <img src={iconAddToCart} id='cart-img' alt="" />
        <p>Add to Cart</p>
      </button>
      </div>

      <div className='dessert-card-info'>
        <h4 className='text-preset-4'>{category}</h4>
        <h3 className='text-preset-3'>{name}</h3>
        <p className='text-preset-3 dessert-card-info-price'>$ {price}</p>
        
      </div>
    </div>
  )
}
