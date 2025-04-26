import React from 'react'
import './DessertCard.css'
import cartImage from '/images/icon-add-to-cart.svg'
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
}) {
  return (
    <div className='card'>
      <div className="card-top">
        <picture>
          <source media='(min-width: 1024px)' srcSet={desktopImg}/>
          <source media='(min-width: 768px)' srcSet={tabletImg}/>
          <img src={mobileImg} alt="" />
        </picture>
        <button onClick={() => addToCart({id, name, price})}>
          <img src={cartImage} alt="" />
          <p>Add to Cart</p>
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
