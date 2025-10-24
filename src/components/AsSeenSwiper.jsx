import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import yahoolife from '../assets/img/Yahoo-Life-Logo.png';
import esquire from '../assets/img/esquire.svg';
import msn from '../assets/img/MSN_logo_PNG.webp';
import mashable from '../assets/img/mashable-logo-logo_5.png';

function AsSeenSwiper() {
    const swiperRef = useRef(null);

    const handleMouseEnter = () => {
        swiperRef.current?.autoplay?.stop();
    };

    const handleMouseLeave = () => {
        swiperRef.current?.autoplay?.start();
    }
    return (
        <section className="bg-white py-14">
            <p className="text-3xl pb-8 text-[#53565A] px-8 font-bold mb-6">AS SEEN IN</p>

            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 0, // no delay between slides
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        250: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 }
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="overflow-hidden"
                    speed={3000}
                    allowTouchMove={false}
                    grabCursor={false}

                >


                    <SwiperSlide  >
                        <div className="flex items-center justify-center h-[100px]">
                            <img src={yahoolife} alt="logo" className="h-16 object-contain" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="flex items-center justify-center h-[100px]">
                            <img src={esquire} alt="logo" className="h-8 w-[8]  object-contain" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="flex items-center justify-center h-[100px]">
                            <img src={msn} alt="logo" className="h-16 w-[200px] object-contain" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="flex items-center justify-center h-[100px]">
                            <img src={mashable} alt="logo" className="h-24 w-[200px] object-contain" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="flex items-center justify-center h-[100px]">
                            <img src={yahoolife} alt="logo" className="h-16 object-contain" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="flex items-center justify-center h-[100px]">
                            <img src={esquire} alt="logo" className="h-8 w-[8]  object-contain" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="flex items-center justify-center h-[100px]">
                            <img src={msn} alt="logo" className="h-16 object-contain" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="flex items-center justify-center h-[100px]">
                            <img src={mashable} alt="logo" className="h-24 w-[200px] object-contain" />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    );
}

export default AsSeenSwiper;
