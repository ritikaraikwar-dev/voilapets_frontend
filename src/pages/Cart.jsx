import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { circularProgressClasses } from '@mui/material/CircularProgress';
const baseUrl = process.env.REACT_APP_BASE_URL;
function Cart() {
  const [localCartItems, setLocalCartItems] = useState([]);
  const { cart, guestId, setCart, reloadCart, setReloadCart, getGuestId, removeFromCart, clearCart } = useCart();



  // const { cartItems, setCartItems, cart, setCart, removeFromCart, clearCart } = useCart();

  const deleteCart = async (cartId) => {

    try {
      const cartDelete = await axios.delete(`${baseUrl}/voilapets/deleteCart/${cartId}`, {
        withCredentials: true
      });
      // Trigger reload so useEffect runs again
      setReloadCart(prev => !prev);
      console.log("card deleted successfully", cartDelete);

    } catch (error) {
      console.log("error occur ", error)
    }

  }


  useEffect(() => {
    const fetchCartItems = async () => {
      const guest_Id = guestId;
      try {
    // Frontend request
const res = await axios.get(`${baseUrl}/voilapets/getCart/${guest_Id}`, {
  withCredentials: true
});

        console.log("Cart API Response:", res.data);

        // Fix this line based on API structure
        if (Array.isArray(res.data.product)) {
          setLocalCartItems(res.data.product);
        } else if (res.data.product) {
          setLocalCartItems([res.data.product]);
        } else {
          console.warn("Unexpected cart response", res.data);
        }
      } catch (error) {
        console.error("Failed to fetch cart items", error.message);
      }
    };

    fetchCartItems();
  }, [reloadCart]);


  return (
    
    <>
      <section className='relative'>
        <div className={`px-4 fixed top-0 right-0 h-full w-96 bg-[#F5FCF8] shadow-lg z-50 transform transition-transform duration-600 ease-in-out ${cart ? 'translate-x-0' : 'translate-x-full'
          }`}
                   
        >
          {
            localCartItems.length > 0 ? (
              <div>
                <div className=" text-[#53565A] flex  py-10 items-center justify-between text-black">
                  <h2 className="text-3xl mb-4">Your Cart</h2>

                  <button
                    onClick={() => setCart(false)}
                    className="z-50 text-[#53565A] "
                  >
                    <CloseIcon sx={{ fontSize: 40 }} />
                  </button>
                </div>


                <div className=" text-base font-semibold pb-2 border-b uppercase text-[#53565A] flex   items-center justify-between ">
                  <h2  >Product</h2>
                  <h2  >Total</h2>

                </div>

                <div>

                 

                  <div className="max-h-[500px] overflow-y-auto flex flex-col gap-6 pr-2">
                    {localCartItems.map(item => (
                      <div key={item._id} className="border-b pb-4 flex gap-4">

                       
                        <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />

                      
                        <div className="flex flex-col justify-between flex-1">
                          <div>
                            <h3 className="font-semibold text-base">{item.title}</h3>
                            <p className="text-sm text-[#53565A]">Color: {item.color}</p>
                            <p className="font-bold text-[#53565A] mt-2">${item.price} AUD</p>
                          </div>

                      
                          <div className="flex justify-between items-center mt-4">
                            
                            <div className="flex items-center border px-4 py-2 rounded text-[#53565A] gap-4">
                              <button>-</button>
                              <span>{item.quantity}</span>
                              <button>+</button>
                            </div>

                            {/* Delete Button */}
                            <button
                              className="text-[#53565A] hover:text-red-500 transition"
                              onClick={() => deleteCart(item._id)}
                            >
                              <DeleteOutlineIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>


                </div>
              </div>


            ) : (

              <div className="relative w-full h-screen bg-[#F5FCF8]">

                <button
                  onClick={() => setCart(false)}
                  className="absolute top-4 right-4 z-50 text-[#53565A]"
                >
                  <CloseIcon sx={{ fontSize: 30 }} />
                </button>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#53565A] space-y-4 px-6 z-10">
                  <p className="text-3xl">Your cart is empty</p>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                    Continue Shopping
                  </button>
                  <p>Have an account?</p>
                  <p>
                    <Link to="/login" className="  underline">
                      Log in
                    </Link>{" "}
                    to check out faster.
                  </p>
                </div>
              </div>


            )
          }



        </div>

        
      </section>
    </>
  );
}
export default Cart;




