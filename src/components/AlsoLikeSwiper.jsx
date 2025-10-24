import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import var2 from '../assets/img/var2.webp';
import card1 from '../assets/img/card1.webp';
import card12 from '../assets/img/card12.webp';
import card22 from '../assets/img/card22.webp';
import card3 from '../assets/img/card3.webp';
import card2 from '../assets/img/card2.webp';
import card4 from '../assets/img/card4.webp';
import card5 from '../assets/img/card5.webp';
import card33 from '../assets/img/card33.webp';
import card55 from '../assets/img/card55.webp';


function AlsoLikeSwiper() {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [hasSlides, setHasSlides] = useState(true); // Track if slides exist

    // Update button states based on Swiper's position
    const updateNavigationState = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
        // Check if there are enough slides to require navigation
        setHasSlides(swiper.slides.length > swiper.params.slidesPerView);
    };

    const goNext = () => {
        swiperRef.current?.slideNext();
    };

    const goPrev = () => {
        swiperRef.current?.slidePrev();
    };

    useEffect(() => {
        // Initialize state when Swiper is mounted
        if (swiperRef.current) {
            updateNavigationState(swiperRef.current);
        }
    }, []);


    const data = [
        {
            img1: card1,
            img2: card12,
            title: "Sealable Edition ...",
            ratno: "(39)",
            des: "Perfect for wet or raw treats",
            price: "$124 AUD"
        },
        {
            img1: card2,
            img2: card22,
            title: "Large Ultimate Tr...",
            ratno: "(222)",
            des: "Ideal for bigger bellies and longer outings",
            price: "$108 AUD"
        },
        {
            img1: card3,
            img2: card33,
            title: "Adventure Clip (S...",
            ratno: "(24)",
            des: "Add versatility to your Ultimate Treat Pouch",
            price: "$31 AUD"
        },
        {
            img1: card4,
            img2: card4,
            title: "The Ultimate Belt",
            ratno: "(6)",
            des: "A perfect accessory for pants and pouches",
            price: "$40 AUD"
        },
        {
            img1: card5,
            img2: card55,
            title: "The Essential Hat",
            ratno: "(39)",
            des: "Your elevated everyday",
            price: "$54 AUD"
        },
    ]

    return (
        <section className="py-8 relative px-8 bg-[#F5FCF8]">
            <div className="flex justify-center">
                <p className="text-3xl font-bold pb-6 text-[#53565A] uppercase">You may also like</p>

            </div>

            {/* Custom Navigation Buttons */}
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

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
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

                {
                    data.map((item, index) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <div key={index} className="group bg-white rounded-lg  w-[280px] overflow-hidden flex flex-col h-[520px]">
                                        <div className="relative w-full h-[260px] cursor-pointer overflow-hidden rounded-md">
                                            <img
                                                src={item.img1}
                                                alt="Image 1"
                                                className="w-full h-full object-cover rounded-md transition-opacity duration-500 ease-in-out group-hover:opacity-0 absolute top-0 left-0"
                                            />
                                            <img
                                                src={item.img2}
                                                alt="Image 2"
                                                className="w-full h-full object-cover rounded-md transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                                            />
                                        </div>

                                        <div className="p-4 flex flex-col flex-grow pb-8"> {/* Increased bottom padding */}
                                            <p className="text-center text-gray-600 font-semibold text-lg mb-1">
                                                {item.title}
                                            </p>

                                            <div className="flex justify-center items-center gap-2 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        sx={{ fontSize: 16 }}
                                                        className="text-[#FDCC0D]"
                                                    />
                                                ))}
                                                <p>{item.ratno}</p>
                                            </div>

                                            <p className="text-center text-gray-600 mb-2 flex-grow overflow-hidden">
                                                {item.des}
                                            </p>

                                            <p className="text-center text-gray-700 font-semibold mb-4">
                                                {item.price}
                                            </p>

                                            <div className="flex justify-center mt-auto">
                                                <button className="font-bold bg-[#D8E2DC] py-2 px-16 font-semibold text-[#5B6162] rounded transition">
                                                    Shop Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default AlsoLikeSwiper;