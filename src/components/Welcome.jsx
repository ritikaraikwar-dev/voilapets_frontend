import { Link } from 'react-router-dom';
import welcome1 from '../assets/img/welcome1.webp';
import welcome2 from '../assets/img/welcome2.webp';
function Welcome(){
    return(
        <>
        <section className=' px-8 bg-[#F5FCF8] py-14'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                        <img src={welcome1} alt="" className='rounded-md w-full' height={400}   />
                    </div>
                    <div className='flex justify-center bg-[#EEE9E3] rounded-md items-center'> 
                    <div className=''>
                        <h2 className='py-2 text-center text-3xl text-[#53565A] font-semibold'>WELCOME!</h2>
                        <p className='px-8 text-[#626667] text-[18px]  text-center'>At Voilà, we believe that the relationship between people and their pets is one of life's most meaningful connections. We're dedicated to crafting thoughtful and stylish products with an emphasis on quality and sustainability. Our mission - to bring ease and joy into your everyday moments with your beloved pets! Voilà!</p>
                       <div className='flex justify-center '> <Link to="/story">  <button className=' my-4 rounded-md py-4 px-8 text-xl bg-[#435870] text-white'>Read More</button> </Link> </div>
                    </div>
                    </div> 
                    <div>
                        <img src={welcome2} alt="" height={400} className='rounded-md w-full'/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Welcome