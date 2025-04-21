import React from 'react'
import './Cart.css'
import emptyCart from '/images/illustration-empty-cart.svg'


export default function Cart({cartTotal, cartItems}) {
  
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name) //Searches acc array for item with same name as current item, otherwise adds new object to the acc array
    if(existingItem) { //If true, increments quantity and adds price to combined price
      existingItem.quantity += 1
      existingItem.combinedPrice += item.price
    } else{
      acc.push({...item, quantity: 1, combinedPrice: item.price})
    }
    return acc
  }, [])
  return (
    <div className='cart-container'>
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ?
        (<div className='cart-empty'>
          <img src={emptyCart} alt="" />
          <p>Your added items will appear here</p>
        </div>
        )
        :
        ( <div className='cart-items'>
            {groupedItems.map((item,index) => (
              <div key={index} className='cart-item'>
                <h4>{item.name}</h4>
                <div className='cart-item-numbers'>
                  <p>{item.quantity}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>${item.combinedPrice.toFixed(2)}</p>
                </div>
              </div>
            ))}
        </div> )
    
    
    }
      
    </div>
  )
}
