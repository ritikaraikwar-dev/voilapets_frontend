import pet1 from '../assets/img/pet1.webp';
import pet2 from '../assets/img/pet2.webp';
import freefood from '../assets/img/freefood.webp';
import widthmouth from '../assets/img/widthmouth.webp';
import easyclean from '../assets/img/easyclean.webp';
import lifetime from '../assets/img/lifetime.webp'
const data = [
    {
        img: easyclean,
        des: "Easy to clean, bacteria and odor resistent"
    },
    {
        img: widthmouth,
        des: "Easy, wide access opening and secure snap closure"
    },
    {
        img: freefood,
        des: "100% BPA food grade silicone"
    },
    {
        img: lifetime,
        des: "Lifetime Warranty: Confidence in Every Purchase"
    },
]
function Elegance() {
    return (
        <>
            <section className='  bg-[#D8E2DC] py-16 px-10'>
                <div className='py-16 px-6 bg-[#F5FCF8]'>
                    <div><p className="text-xl uppercase tracking-wider lg:text-3xl text-center font-bold text-[#53565A]"> Elegance and Sustainability for Modern Pet Lovers </p>
                        <p className='text-center py-4 text-[#53565A] text-md  lg:text-lg lg:px-40'>Voilà is dedicated to fostering meaningful connections between people and their pets. We design aesthetically pleasing, eco-friendly products that prioritize both sustainability and user-friendliness.</p></div>

                    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <img src={pet1} alt="" className='rounded-md h-full' />
                        <img src={pet2} alt="" className='rounded-md h-full ' />
                    </div>

                     

                    <div className='py-6 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                       
                       {
                        data.map((item,index)=>{
                            return(
                                <>
                                  <div key={index} className='rounded-md py-6 px-6 flex justify-center items-center gap-6 bg-[#D8E2DC] text-[#5B565A] '>
                            <img src={item.img} alt="" className='h-16' />
                            <p className='font-bold'>{item.des}</p>
                        </div>
                                </>
                            )
                        })
                       }             
                    </div>
                </div>
            </section>
        </>
    )
}
export default Elegance;