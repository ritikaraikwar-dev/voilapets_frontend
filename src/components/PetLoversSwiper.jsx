 
import { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import StarIcon from '@mui/icons-material/Star';
 
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function PetLoversSwiper(){
    return(
        <>
          <section className="bg-[#F5FCF8]">
            <p className="uppercase font-bold text-3xl text-[#53565A] text-center">What Pet Lovers Are Saying</p>
              <div className='py-12 mb-2'> 
             <Swiper
             className="custom-swiper-pagination h-[170px]"
       
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
       autoplay={{
          delay:"2000"
       }}
       speed={1000}
       loop={true}
      pagination={{ clickable: true }}
       
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
         
      <SwiperSlide className='text-center'>            
        <div class="description-testimonial">
            <div className='py-2'> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/>  </div>
        <p className='text-lg py-2 text-[#838785]'>"Stylish and durable, impressed by the quality. I take it with me anywhere my dogs go. Highly recommended!"</p>
            <div class="author-name font-semibold text-[#53565A]"> <p>- Nick C. (Boston, MA)</p></div>
           
        </div></SwiperSlide>
      <SwiperSlide className='text-center'>
        
         
        <div class="description-testimonial">
             <div className='py-2'> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/>  </div>
        <p className='text-lg py-2 text-[#838785]' >“As a dog trainer, I've gone through so many treat pouches. This may be the last one I'll ever buy.”</p>
            <div class="author-name font-semibold text-[#53565A]"> <p>- Sandy T. (Austin, TX)</p></div>
        </div>    
         
      </SwiperSlide>
      <SwiperSlide className='text-center'>
        
          
        
        <div class="description-testimonial">
             <div className='py-2'> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/> <StarIcon className='text-[#F6B12E]'/>  </div>
        <p className='text-lg py-2 text-[#838785]'>“As a dog trainer, I've gone through so many treat pouches. This may be the last one I'll ever buy.”</p>
            <div class="author-name font-semibold text-[#53565A]"> <p>- Sandy T. (Austin, TX)</p></div>
        </div>    
      
      </SwiperSlide>
       
    </Swiper>
 </div>
          </section>
        </>
    )
}
export default PetLoversSwiper;




 