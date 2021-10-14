import React from 'react'
import Card from './Card'

const Cart = ({cartItems,setCartItem}) => {
   
    
    return (
        <div className='cart-container'>
         
        {cartItems.length==0 && <div>cart is empty </div>}
        <ul className='todo-list'>
          {cartItems.map((cartItem)=>  (
              <Card 
             setCartItem={setCartItem}
              cartItem={cartItem}
              key={cartItem}
              
              />
          ))}
           </ul> 
        </div>
    )
}

export default Cart
