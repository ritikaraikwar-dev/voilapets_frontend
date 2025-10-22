import mini1 from '../assets/img/mini1.webp';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LanguageIcon from '@mui/icons-material/Language';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import beltc1 from '../assets/img/beltc1.webp';
import beltc2 from '../assets/img/beltc2.webp';
import beltc3 from '../assets/img/beltc3.webp';
import beltc4 from '../assets/img/beltc4.webp';
import beltc5 from '../assets/img/beltc5.webp';
import beltc6 from '../assets/img/beltc6.webp';
import beltc7 from '../assets/img/beltc7.webp';
import beltc8 from '../assets/img/beltc8.webp';
import { useCart } from '../context/CartContext';
import products from '../data/Product';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { circularProgressClasses } from '@mui/material/CircularProgress';

function LargeShop() {

    const { id } = useParams();

     

  const product = products.find((p) => String(p.id) === String(id));
  console.log('product id',product.id);
  console.log('URL ID:', id);

    const [quantity, setQuantity] = useState([]);

    const increament = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

      const decreament = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 1) - 1
        }));
    };

    const { handleCart } = useCart();
    return (
        <>
            <section className="relative px-8 py-16 pt-40 bg-[#F5FCF8]">


                 
                <div   className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <img src={product.image} alt="" className='w-dvw' />
                                    </div>

                                    <div>
                                        <p className='uppercase text-2xl font-bold pb-4'>{product.title}</p>

                                        <p className='pb-6 flex items-center gap-2'> <span className='text-[#FFC200]'> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarHalfIcon sx={{ fontSize: 17 }} /> </span> <span className='text-[#53565A] font-bold text-xl'>23 reviews</span> </p>
                                        <p className='text-[#53565A] pb-6  text-xl' >Our lightest weight and most compact version</p>
                                        <p className='text-[#53565A] font-bold pb-6 text-xl'>${product.price}AUD</p>

                                        <p className='text-[#53565A]   pb-4 text-xl'>{product.color}</p>

                                        <ul className='flex gap-2 pb-8'>
                                            <li className='flex items-center justify-center hover:border-2 w-10 h-10 rounded-full'><img src={beltc1} alt="" className='object-fit w-8 border rounded-full hover:border' /></li>
                                            <li className='flex items-center justify-center hover:border-2 w-10 h-10 rounded-full'><img src={beltc2} alt="" className=' w-8 border rounded-full hover:border' /></li>
                                            <li className='flex items-center justify-center hover:border-2 w-10 h-10 rounded-full' ><img src={beltc3} alt="" className=' w-8 border rounded-full hover:border' /></li>
                                            <li className='flex items-center justify-center hover:border-2 w-10 h-10 rounded-full' ><img src={beltc4} alt="" className=' w-8 border rounded-full hover:border' /></li>
                                            <li className='flex items-center justify-center hover:border-2 w-10 h-10 rounded-full' ><img src={beltc5} alt="" className=' w-8 border rounded-full hover:border' /></li>
                                            <li className='flex items-center justify-center hover:border-2 w-10 h-10 rounded-full' ><img src={beltc6} alt="" className=' w-8 border rounded-full hover:border' /></li>
                                            <li className='flex items-center justify-center hover:border-2 w-10 h-10 rounded-full' ><img src={beltc7} alt="" className=' w-8 border rounded-full hover:border' /></li>
                                            <li className='flex items-center justify-center hover:border-2 w-10 h-10 rounded-full' ><img src={beltc8} alt="" className=' w-8 border rounded-full hover:border' /></li>
                                        </ul>

                                        <div className='flex  gap-4 justify-center text-xl   pb-6'>

                                            <button className='bg-[#D8E2DC] border text-[#53565A] py-4 px-4 rounded w-5/6'>Regular length fit up to</button>
                                            <button className='bg-transparent border text-[#53565A] py-4 px-4 rounded w-5/6'>Longer length fit up to</button>

                                        </div>

                                        <div className='flex gap-4 pb-4'>



                                            <div className='flex gap-16 justify-center text-xl bg-transparent border text-[#53565A] py-4 px-4 rounded  w-3/6 text-[#5B5E62] '>
                                                <button onClick={() => decreament(product.id)} >-</button>
                                                <span>{quantity[product.id] || 1}</span>
                                                <button onClick={() => increament(product.id)} >+</button>
                                            </div>



                                            <button onClick={() => handleCart(product.id)} className='bg-[#435870] text-white rounded w-5/6'>Add to Cart</button> </div>


                                        <div className='bg-[#D8E2DC] mt-2 text-[#5B5E62] w-full py-6 rounded text-lg px-4'>
                                            <p className='pb-4'><LanguageIcon /> Free shipping above $125 (U.S. Only)</p>

                                            <p>   12 in stock</p>
                                        </div>

                                    </div>
                                </div>

            </section >
        </>
    )
}
export default LargeShop;