import story from '../assets/img/story.webp';
import story1 from '../assets/img/story1.webp';
import story2 from '../assets/img/story2.webp'
function OurStory() {
    return (
        <>
            <section>
                <div className="relative group overflow-hidden">
                    <img
                        src={story}
                        alt="FAQ"
                        className="w-full object-cover h-[500px]"
                    />
                    {/* Overlay */}
                    <div className=" absolute inset-0 bg-black bg-opacity-20  flex flex-col items-center justify-center lg:px-6 text-white text-center">

                        <p className='  text-3xl text-white  font-semibold'>Our Story</p>
                        <p className='text-sm  text-white lg:text-lg px-4 lg:px-28 py-2'>At Voilà Pets, we believe the best moments in life are shared with our furry companions. If you’ve found us, chances are you feel the same. Based in Irvine, California, Voilà Pets was created to support and elevate the lives of pets and their people, fostering stronger bonds while honoring the planet. Our thoughtfully designed products aim to bring joy and ease to everyday moments.</p>
                    </div>
                </div>
                <div className='  bg-[#F5FCF8]  px-8 py-16 '>
                    <div className=' container mx-auto lg:h-[670px] overflow-hidden rounded-md grid grid-cols-1 lg:grid-cols-2  bg-white  rounded-md'>
                        <div className='  '>
                            <img src={story1} alt="" className=' lg:w-[620px] w-full h-[670px]  ' />
                        </div>
                        <div className='flex flex-col justify-center items-center bg-white'>
                            <p className='text-4xl text-[#53565A] font-semibold my-4'>Our Mission</p>
                            <p className='text-center text-[#53565A] text-lg px-4   py-4'>From the very beginning, our mission has been simple: to craft premium-quality products that combine innovation, style, and functionality.</p>

                            <p className='text-center text-[#53565A] text-lg px-4   py-4'>We understand that the connection between people and their pets is one of life’s most meaningful relationships. That’s why we’re dedicated to enhancing that bond through products that encourage joyful and fulfilling interactions.</p>

                            <p className='text-center text-[#53565A] text-lg px-4 py-4'>We stand by our creations with a Limited Lifetime Warranty, and our Satisfaction Guarantee reflects our commitment to delivering the best possible experience. When you choose Voilà, you’re not just purchasing a product—you’re becoming part of the Voilà family.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#D8E2DC]    py-24 px-8'>
                    <div className='   overflow-hidden grid grid-cols-1 lg:grid-cols-2  bg-white  rounded-md'>

                        <div className='flex flex-col justify-center items-center bg-white'>
                            <p className='text-4xl text-[#53565A] font-semibold my-4'>WHO WE ARE</p>
                            <p className='text-center text-[#53565A] text-lg px-6 py-4'>Voilà Pets was founded in 2022 by husband-and-wife team Hoyt and Lynn Yang, driven by their shared passion for creating smart, innovative solutions for pet lovers. As a dog trainer with over 20 years of experience, Hoyt had tested countless treat pouches but couldn’t find one that met his needs. Fabric pouches absorbed odors and bacteria, while silicone options were hard to use and prone to tearing. Frustrated but determined, Hoyt set out to design the perfect treat pouch. After two years and dozens of prototypes—Voilà!—the Ultimate Treat Pouch was born.</p>

                            <p className='text-center text-[#53565A] lg:text-lg px-4 py-4'>Today, Voilà Pets is supported by a small yet passionate team of pet lovers with expertise in design, engineering, and manufacturing. We remain committed to innovation, crafting products that make life with pets even more enjoyable.</p>
                        </div>
                        <div>
                            <img src={story2} alt="" className=' w-full  h-full' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OurStory