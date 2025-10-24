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
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const[guestId,setguestId] = useState();



  const showCart = () => {
    setCart((prev) => !prev)
  }


  function getGuestId() {
    let guestId = localStorage.getItem('guest_id');

    if (!guestId) {
      guestId = uuidv4();
      localStorage.setItem('guest_id', guestId);
      setguestId(guestId);
    }

    return guestId;
  }

   // Run once on mount to set guestId
  useEffect(() => {
    const id = getGuestId();
    setguestId(id);
  }, []);

  const handleCart = async (id) => {
    try {
      // Find the full product object from your local products list
      const product = products.find(item => item.id === id);
      
      console.log("guest id from context",guestId);
      
      const payload = {
        ...product,
        quantity: 1,
        guest_id:guestId
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
      value={{ handleCart, cartItems, reloadCart, setReloadCart, cart, setCart, guestId, showCart, getGuestId }}
    >
      {children}
    </CartContext.Provider>
  );
};
