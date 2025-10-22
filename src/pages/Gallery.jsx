import gallery1 from '../assets/img/gallery1.webp';
import gallery2 from '../assets/img/gallery2.webp';
import gallery3 from '../assets/img/gallery3.webp';
import gallery4 from '../assets/img/gallery4.webp';
import gallery5 from '../assets/img/gallery5.webp';
import gallery6 from '../assets/img/gallery6.webp';
import gallery7 from '../assets/img/gallery7.webp';
import gallery8 from '../assets/img/gallery8.webp';
import gallery9 from '../assets/img/gallery9.webp';
import gallery10 from '../assets/img/gallery10.webp';
import gallery11 from '../assets/img/gallery11.webp';
import gallery12 from '../assets/img/gallery12.webp';
 
 
 
const data = [
    
     {
        img:gallery1
    },
    
     {
        img:gallery2
    },
    {
        img:gallery3
    },
    {
        img:gallery4
    },
    {
        img:gallery5
    },
    {
        img:gallery6
    },
    {
        img:gallery7
    },
    {
        img:gallery8
    },
    {
        img:gallery9
    },
    {
        img:gallery10
    },
    {
        img:gallery11
    },
    {
        img:gallery12
    }
]
function Gallery(){
    return(
        <> 
         <section className='bg-[#F5FCF8] py-16 px-8 '>

                <div className='pt-4 '>
                  <h2 className='uppercase text-center pt-14  text-3xl tracking-wide font-bold text-[#53565A] '>Gallery</h2>
                    
                </div>
 
                <div className=' py-8 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                            {
                                data.map((item,index)=>{
                                    return(
                                        <>
                                        <div className='border w-full h-96 p rounded-md px-2 py-2 overflow-hidden'>
                        <img src={item.img} alt="" className=' h-full  w-full transform transition-transform duration-300 rounded-md hover:scale-[1.01]'/>
                    </div>
                                        </>
                                    )
                                })
                            }
                </div>
                
                 
            </section>
          
        </>
    )
}
export default Gallery;