import React from 'react'
import desserts from '../../data/desserts.json'
import DessertCard from '../DessertCard/DessertCard'
import './DessertList.css'

export default function DessertList({addToCart}) {

  // Assigning ID to each Dessert
  const products = desserts.map((item, index) => ({
    ...item,
    id: index + 1,
  }))
  console.log(products)
  return (
    <div className='dessert-list-container'>
      <h1>Desserts</h1>
      <div className='dessert-card-container'>
        {products.map(dessert => (
          <DessertCard 
          key={dessert.id}
          id={dessert.id}
          name={dessert.name}
          category={dessert.category}
          price={dessert.price}
          thumbimage={dessert.image.thumbnail}
          desktopImg={dessert.image.desktop}
          mobileImg={dessert.image.mobile}
          tabletImg={dessert.image.tablet}
          addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}
