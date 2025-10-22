import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import miniswiper1 from '../assets/img/miniswiper1.webp';
import miniswiper3 from '../assets/img/miniswiper3.webp';
import miniswiper4 from '../assets/img/miniswiper4.webp';
import miniswiperv1 from '../assets/img/miniswiperv1.mp4';
import miniswiperv2 from '../assets/img/miniswiperv2.mp4';
import miniswiperv3 from '../assets/img/miniswiperv3.mp4';

function ShopSwiper() {

    return (
        <section className="bg-white py-14 px-8">
            
            <div

            >

                <Swiper
                    className="w-full"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                >
                    {/* Slide 1 - Image */}
                    <SwiperSlide>
                        <div className="w-full   aspect-[4/3]  ">
                            <img
                                src={miniswiper1}
                                alt="slide"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </SwiperSlide>

                   
                    <SwiperSlide>
                        <div className="w-full  aspect-[4/3]  ">
                            <video
                                src={miniswiperv1}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <div className="w-full   aspect-[4/3]  ">
                            <img
                                src={miniswiper3}
                                alt="slide"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 - Video */}
                    <SwiperSlide>
                        <div className="w-full  aspect-[4/3]  ">
                            <video
                                src={miniswiperv2}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </SwiperSlide>

                    {/* Slide 5 - Image */}
                    <SwiperSlide>
                        <div className="w-full   aspect-[4/3]  ">
                            <img
                                src={miniswiper4}
                                alt="slide"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </SwiperSlide>

                    {/* Slide 6 - Video */}
                    <SwiperSlide>
                        <div className="w-full   aspect-[4/3]  ">
                            <video
                                src={miniswiperv3}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>



            </div>
        </section>
    );
}

export default ShopSwiper;
