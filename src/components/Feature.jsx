import feature1 from '../assets/img/feature1.webp';
import feature2 from '../assets/img/feature2.webp';
import feature3 from '../assets/img/feature3.jpg';
import feature4 from '../assets/img/feature4.webp';
const data = [
    {
        img: feature1,
        title: "new arrivals"
    },
    {
        img: feature2,
        title: "ultimate treat pouch"
    },
    {
        img: feature3,
        title: "accessories"
    },
    {
        img: feature4,
        title: "bestsellers"
    },
]
function Feature() {

    return (
        <>
            <section className='bg-[#D8E2DC] py-16 px-8'>
                <div className='flex justify-between items-center'><p className='text-2xl uppercase lg:text-4xl font-semibold text-[#53565A]'>Featured Collections</p> <p className='text-xl font-thin  border-black text-[#535688] border-b'>shop all</p></div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                    {
                        data.map((items, index) => {
                            return (
                                <>


                                    <div className="py-10">
                                        <div className="relative rounded group overflow-hidden">
                                            <img
                                                src={items.img}
                                                alt={items.title}
                                                className="h-[28rem] w-full rounded-md object-cover transform transition duration-500 group-hover:scale-105"
                                            />
                                         
                                            <div className="absolute bottom-0 left-0 w-full bg-[#53565A] bg-opacity-80 text-white py-4 font-bold flex justify-center items-center lg:text-2xl uppercase rounded-b-md">
                                                <p>{items.title}</p>
                                            </div>
                                        </div>
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
export default Feature