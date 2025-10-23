import React, { createContext, useContext, useEffect, useState } from 'react';
import products from '../data/Product';
import axios from 'axios';
 
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [reloadCart, setReloadCart] = useState(false);
  const [cart, setCart] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;

 

  const showCart = () => {
    setCart((prev) => !prev)
  }
  const handleCart = async (id) => {
    try {
         // Find the full product object from your local products list
    const product = products.find(item => item.id === id);

    // Add quantity field if needed
    const payload = {
      ...product,
      quantity: 1,
    };
    const data = await axios.post(`${baseUrl}/voilapets/addCart/${id}`, payload, {
      withCredentials: true,
    }); 
    setReloadCart(prev => !prev);

      console.log("data send successfully", data.data.userData);
    }
    catch (error) {
      console.log(error.message);
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
