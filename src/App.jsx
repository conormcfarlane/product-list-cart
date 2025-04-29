import React, {useState} from 'react'
import DessertList from './components/DessertList/DessertList'
import Cart from './components/Cart/Cart'
import './App.css'

export default function App() {

  //Cart State - Holds array of project objects
    const [cart, setCart] = useState([])

  // Adds a product to the cart 
    const addToCart = (dessert) => {
      // First check if dessert is in the cart
      const existing = cart.find(item => item.id === dessert.id)

      // If its already in the cart, increase its quantity
      if(existing) {
        setCart(cart.map(item =>
          item.id === dessert.id ? {...item, quantity: item.quantity + 1} : item))
      }else{
        // Else, add it to the cart and set its quantity to 1
        setCart([...cart, {...dessert, quantity:1}])
      }
    }

    // Remove an item completely from the cart 
    const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id))

    }

    // Decrease quantity of an item and remove if its quantity hits 0
    const decreaseQuantity = (id) => {
      setCart(cart.map(item => {
        if (item.id === id) return{...item, quantity: item.quantity - 1}
        return item
      }).filter(item => item.quantity > 0))
    }
    const clearCart = () => {
      setCart([])
    }
  return (
    <div className='wrapper'>
      <DessertList addToCart={addToCart} decreaseQuantity={decreaseQuantity} cart={cart}/>
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>

    </div>
  )
}
