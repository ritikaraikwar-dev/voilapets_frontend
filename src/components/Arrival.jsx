import { useEffect, useState } from 'react';
function Arrival() {

    const [data, setData] = useState([]);

    const fetchApi = async () => {

        const api = "https://fakestoreapi.com/products"
        const fetchData = await fetch(api);
        const productData = await fetchData.json();
        setData(productData)
        console.log("fetchData", productData);
    }
    useEffect(() => {
        fetchApi(data[0]);
    }, []);

    console.log("finally our data is fetched", data);

    return (
        <>
            <section className="   bg-[#E1EDE4] pb-20 px-8 ">
                <p className='text-3xl font-bold text-[#53565A] pb-10  container mx-auto'>NEW ARRIVALS</p>

                <div className=" ">
                    <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:px-0  ">

                        {
                            data.slice(0, 4).map((item, index) => {
                                return (
                                    <>


                                        <div className="w-full sm:w-64 md:w-72 lg:w-64 group relative bg-white rounded-lg shadow-md overflow-hidden">

                                            {/* Top badges */}
                                            <div className="absolute z-10 p-3 flex gap-2">
                                                {item.showButtons && (
                                                    <button className="bg-[#53565A] rounded-md text-white px-3 py-1 text-xs sm:text-sm">
                                                        {item.soldbtn}
                                                    </button>
                                                )}
                                                {item.showButtons2 && (
                                                    <button className="bg-[#53565A] rounded-md text-white px-3 py-1 text-xs sm:text-sm">
                                                        {item.newbtn}
                                                    </button>
                                                )}
                                            </div>

                                            {/* Product Image */}
                                            <div className="relative">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className={`w-full h-[220px] sm:h-[240px] md:h-[260px] object-cover transition duration-300 ease-in-out ${item.img2 ? "group-hover:hidden" : ""
                                                        }`}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-4">
                                                <p className="text-center font-semibold text-base sm:text-lg mb-1">
                                                    {item.title.split(' ').slice(0, 3).join(' ')}
                                                    {item.title.split(' ').length > 3 ? '...' : ''}
                                                </p>

                                                <p className="text-center text-gray-600 text-sm sm:text-base mb-2">
                                                    {item.title.split(' ').slice(0, 5).join(' ')}
                                                    {item.title.split(' ').length > 5 ? '...' : ''}
                                                </p>

                                                <p className="text-center text-gray-700 font-semibold text-sm sm:text-base mb-4">
                                                    {item.price}
                                                </p>

                                                {/* Button */}
                                                <div className="flex justify-center">
                                                    <button
                                                        className="bg-[#D8E2DC] py-2 px-6 sm:px-10 md:px-14 lg:px-16 font-semibold text-[#5B6162] text-sm sm:text-base rounded transition"
                                                    >
                                                        Shop Now
                                                    </button>
                                                </div>
                                            </div>
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
export default Arrival;