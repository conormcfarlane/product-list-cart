import React from 'react'
import './DessertCard.css'
import cartImage from '/images/icon-add-to-cart.svg'
import iconDecrement from '/images/icon-decrement-quantity.svg'
import iconIncrement from '/images/icon-increment-quantity.svg'
export default function DessertCard({
  id,
  name,
  category,
  price,
  thumbimage,
  desktopImg,
  mobileImg,
  tabletImg,
  addToCart,
  cart,
  decreaseQuantity
}) {

  const itemInCart = cart.find((item) => item.id === id)
  return (
    <div className='card'>
      <div className="card-top">
        <picture>
          <source media='(min-width: 1024px)' srcSet={desktopImg}/>
          <source media='(min-width: 768px)' srcSet={tabletImg}/>
          <img src={mobileImg} alt="" />
        </picture>

      <button className={`cart-button ${itemInCart ? 'in-cart' : ''}`}>
        {itemInCart ? (
          <div className='quantity-control'>
            <span className='quantity-button' onClick={() => decreaseQuantity(id)}><img src={iconDecrement} /></span>
            <p className='quantity-display'>{itemInCart.quantity}</p>
            <span className='quantity-button' onClick={() => addToCart({id, name, price, quantity: 1})}><img src={iconIncrement} /></span>
          </div>
        ) : (
          <div className='add-to-cart-content'>
            <span onClick={() => addToCart({id, name, price, quantity: 1})}>
              <img src={cartImage} alt="" />
              <p>Add to Cart</p>
            </span>
          </div>
        )}
      </button>

      </div>
      <div className="card-bottom">
        <p className='text-preset-4'>{category}</p>
        <p className='text-preset-3-bold'>{name}</p>
        <p className='text-preset-3'>${price.toFixed(2)}</p>
      </div>

    </div>
  )
}
