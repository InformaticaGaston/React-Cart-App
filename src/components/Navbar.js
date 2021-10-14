import React ,{useState} from 'react'
import Cart from './Cart';
import {Link} from "react-router-dom";


const Navbar = () => {
    const [on, setOn] = useState(false) ;
    const toggleCart = () => {
        setOn(!on);
    }

    return (
        <div className='navbar'>
        <Link to="/" className="logo">
            <h1>James<br/> Jeans</h1>
            </Link>
            <ul className='navbar-list'>
                <li><Link exact to='/'>Shop</Link></li>
                <li><a href="#">Women</a></li>
            </ul>
            <div className='search'>
            <input type="text" 
            placeholder='Search for items and brands'
            className="search-input" 
            />
          <button className='search-btn' type='submit'><i class="fas fa-search"></i></button>
          <button className='cart-btn' > <Link to='/cart'><i class="fas fa-shopping-cart"></i></Link></button>
            </div>
            { on? <Cart/> : null }
            
        </div>
    )
}

export default Navbar
