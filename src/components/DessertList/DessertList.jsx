import React from 'react'
import data from '../../data/data.json'
import DessertCard from '../DessertCard/DessertCard'
import './DessertList.css'

export default function DessertList({addToCart}) {
  return (
    <div className='dessert-list-container'>
    <h1>Desserts</h1>
    <div className='dessert-card-container'>
      {data.map((item, index) => (
        <DessertCard
         key={index}
         name={item.name}
         category={item.category}
         price={item.price}
         thumbimage={item.image.thumbnail} 
         desktopImg={item.image.desktop} 
         mobileImg={item.image.mobile} 
         tabletImg={item.image.tablet}
         addToCart={() => addToCart(item)} 
         />
      ))}
    </div>
    
    
    </div>
    
  )
}
