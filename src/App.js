import {React, useState, useEffect} from 'react';
import Navbar from './component/Navbar/Navbar'
import { commerce } from './lib/commerce';
import Products from './component/Products/Products';
import Cart from './component/Cart/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () =>{
    const { data } = await commerce.products.list();

    setProducts(data);
  } 

  const fetchCart = async () =>{
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  } 

  const handleAddToCart = async (productId, quantity) =>{
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return(
    <div>
      <Navbar totalItems={cart.total_items}/>
      {/* <Products products = {products} onAddToCart={handleAddToCart}/> */}
      <Cart cart={cart}/>
    </div>  
  );

}

export default App;