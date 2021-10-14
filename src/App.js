import React , {useState} from "react";
import CardsList from "./components/CardsList";
import Navbar from "./components/Navbar";
import Pub from "./components/Pub";
import Cart from "./components/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

 
function App() {
  const [cards,setCards] = useState()
 const [cartItems, setCartItems] = useState([]);
 
 

  return (
   <Router>
     <div> 
       <Navbar/> 
      <Pub/>
      
       
       <Switch>
       <Route exact path='/'render={(props) => (<CardsList {...props} cartItems={cards}  setCartItem={setCards} />)}/> 
        <Route path='/cart'  render={(props) => (<Cart {...props} cartItems={cartItems}  setCartItem={setCartItems} />)}/>
      </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
