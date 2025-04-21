import {useState} from 'react'

import './App.css'
import DessertList from './components/DessertList/DessertList'
import Cart from './components/Cart/Cart'
function App() {
  
  const [cartItems, setCartItems] = useState([]) //State for cart items
  const [cartTotal, setCartTotal] = useState(0) //State for cart total

  // Function to add items to cart & update cart total
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]) // Adds item to cart, uses prevItem as current cart item array and uses spread operator to create a new array insetad of changing the original one (ie. updates immutably). Must use comma and not + as + is only used in JS for numbers and string concatination.
    setCartTotal((prevTotal) => prevTotal + item.price) // Adds new item price to existing cart total.
  }
  return (
      <div className="wrapper">
        <DessertList addToCart={addToCart} />
        <Cart cartTotal={cartTotal} cartItems={cartItems}/>
      </div>
  )
}

export default App
