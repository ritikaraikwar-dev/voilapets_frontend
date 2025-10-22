import React, { createContext, useContext, useEffect, useState } from 'react';
import products from '../data/Product';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [reloadCart, setReloadCart] = useState(false);
  const [cart, setCart] = useState(false);
 

  const showCart = () => {
    setCart((prev) => !prev)
  }
  const handleCart = async (id) => {
    try {

       
      const product = products.find(item => item.id === id);

      const data = await axios.post('http://localhost:4000/voilapets/addCart', product, {
        withCredentials: true,
      });


        
    setReloadCart(prev => !prev);

      console.log("data send successfully", data.data.userData);



    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <CartContext.Provider
      value={{ handleCart, cartItems,   reloadCart, setReloadCart,  cart,   setCart, showCart,}}
    >
      {children}
    </CartContext.Provider>
  );
};
