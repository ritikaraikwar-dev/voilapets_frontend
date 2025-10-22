import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import var2 from '../assets/img/var2.webp';

function ShopByColorSwiper() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [hasSlides, setHasSlides] = useState(true);  
 
  const updateNavigationState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    
    setHasSlides(swiper.slides.length > swiper.params.slidesPerView);
  };

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goPrev = () => {
    swiperRef.current?.slidePrev();
  };

  useEffect(() => {
    
    if (swiperRef.current) {
      updateNavigationState(swiperRef.current);
    }
  }, []);

  return (
    <section className="py-8    relative px-8 bg-[#F5FCF8]">
      <div className="lg:flex   lg:justify-between justify-center pb-2">
        <p className="text-xl lg:text-3xl text-center font-bold lg:pb-6 text-[#53565A] uppercase">shop by color</p>
        <p className='text-center '>Shop all</p>
      </div>

      
      {hasSlides && !isBeginning && (
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-12 z-10 -translate-y-1/2 bg-[#53565A] text-white rounded-full h-10 w-10 flex justify-center items-center shadow-md transition"
          aria-label="Previous Slide"
        >
          <KeyboardArrowLeftIcon />
        </button>
      )}

      {hasSlides && !isEnd && (
        <button
          onClick={goNext}
          className="absolute top-1/2 right-12 z-10 -translate-y-1/2 bg-[#53565A] text-white rounded-full h-10 w-10 flex justify-center items-center shadow-md transition"
          aria-label="Next Slide"
        >
          <KeyboardArrowRightIcon />
        </button>
      )}

<div className='container mx-auto'> 
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateNavigationState(swiper);
        }}
        onSlideChange={(swiper) => {
          console.log('slide change');
          updateNavigationState(swiper);
        }}
        breakpoints={{
                        300: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
      >
        <SwiperSlide>
          <div className="bg-[#D8E2DC] group w-fit overflow-hidden px-4 py-4 rounded-[15px]">
            <div className="flex justify-center mb-4">
              <img
                src={var2}
                alt="Charcoal product"
                width={400}
                className="rounded-md"
              />
            </div>
            <p className="mb-4 text-center text-2xl font-semibold text-[#53565A] leading-tight">
              Charcoal / Longer Length (fits up to 60" waist)
            </p>
            <p className="text-center mb-10">Explore Now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D8E2DC] px-4 py-4 rounded-[15px]">
            <div className="flex justify-center mb-4">
              <img src={var2} alt="Charcoal product" width={400} className="rounded-md" />
            </div>
            <p className="mb-4 text-center text-2xl font-semibold text-[#53565A] leading-tight">
              Charcoal / Longer Length (fits up to 60" waist)
            </p>
            <p className="text-center mb-10">Explore Now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D8E2DC] px-4 py-4 rounded-[15px]">
            <div className="flex justify-center mb-4">
              <img src={var2} alt="Charcoal product" width={400} className="rounded-md" />
            </div>
            <p className="mb-4 text-center text-2xl font-semibold text-[#53565A] leading-tight">
              Charcoal / Longer Length (fits up to 60" waist)
            </p>
            <p className="text-center mb-10">Explore Now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D8E2DC] px-4 py-4 rounded-[15px]">
            <div className="flex justify-center mb-4">
              <img src={var2} alt="Charcoal product" width={400} className="rounded-md" />
            </div>
            <p className="mb-4 text-center text-2xl font-semibold text-[#53565A] leading-tight">
              Charcoal / Longer Length (fits up to 60" waist)
            </p>
            <p className="text-center mb-10">Explore Now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D8E2DC] px-4 py-4 rounded-[15px]">
            <div className="flex justify-center mb-4">
              <img src={var2} alt="Charcoal product" width={400} className="rounded-md" />
            </div>
            <p className="mb-4 text-center text-2xl font-semibold text-[#53565A] leading-tight">
              Charcoal / Longer Length (fits up to 60" waist)
            </p>
            <p className="text-center mb-10">Explore Now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D8E2DC] px-4 py-4 rounded-[15px]">
            <div className="flex justify-center mb-4">
              <img src={var2} alt="Charcoal product" width={400} className="rounded-md" />
            </div>
            <p className="mb-4 text-center text-2xl font-semibold text-[#53565A] leading-tight">
              Charcoal / Longer Length (fits up to 60" waist)
            </p>
            <p className="text-center mb-10">Explore Now</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}

export default ShopByColorSwiper;