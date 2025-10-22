import sealable1 from '../assets/img/sealable1.webp';
import sealable2 from '../assets/img/sealable2.webp';
import freefood from '../assets/img/freefood.webp';
import widthmouth from '../assets/img/widthmouth.webp';
 import advetureClip from '../assets/img/adventureclip.webp';
import dRing from '../assets/img/dRing.webp';
const data = [
    {
        img: freefood,
        des: "Easy to clean, bacteria and odor resistent"
    },
    {
        img: advetureClip,
        des: "Easy, wide access opening and secure snap closure"
    },
    {
        img: widthmouth,
        des: "100% BPA food grade silicone"
    },
    {
        img: dRing,
        des: "Lifetime Warranty: Confidence in Every Purchase"
    },
]
function Sealable(){
    return(
        <>
        <section className='bg-[#F5FCF8] lg:px-8  py-12 '>
            <div className='bg-[#D8E2DC] py-16 rounded-md'>
                <div>
                     
                    <p className="px-4 py-6 text-xl text-center font-semibold lg:text-4xl uppercase text-[#53565A]">World's First Sealable Treat Pouch</p>
                    <p className='text-md px-4 lg:px-36 text-center text-[#53565E] lg:text-xl'>Introducing the world’s first airtight sealable treat pouch, thoughtfully designed with a spring-assisted wide-mouth opening for easy access.</p>
                   <div className='flex justify-center my-8'>  <button className='bg-[#435870] text-white text-md px-10 font-base py-3 rounded-md'>See Vedio</button> </div>
                     
                </div>

                <div className='flex '>
                    <img src={sealable1} alt=""  className='w-2/4 h-1/4 '/>
                    <img src={sealable2} alt="" className='w-2/4 h-1/4'  />
                </div>

              <div className='py-6 px-8 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                       
                       {
                        data.map((item,index)=>{
                            return(
                                <>
                                  <div key={index} className='rounded-md py-6 px-6  flex justify-center items-center gap-6 bg-[#F5FCF8] text-[#5B565A] '>
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
export default Sealable
 