import React from 'react'

const Card = ({price,name, imageUrl,cartItems,setCartItem,key}) => { 
    
    
    return (
        <div className='card'>
         <img className='card-img' src={imageUrl}/>
         <div className="npb">
         <p>{name}</p>
         <p>{price} $</p>
         <button type='submit' className='buy-btn' >Buy</button>
         </div>
        </div>
    )
}

export default Card
