import ultematetreat from '../assets/img/ultimatetreate.webp'
function Ultimate() {
    return (
        <>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="  bg-[#E7E8D8] flex items-center px-8"> <div>  <p className='text-xl mb-8'>Ultimate Treat Pouch</p>
                        <ul className="uppercase text-3xl text-[#53565A] font-bold leading-loose">
                            <li className='hover:border-b-[1px] hover:border-black'>Standard - 16 oz</li>
                            <li className='hover:border-b-[1px] hover:border-black'>Large - 24 oz</li>
                            <li className='hover:border-b-[1px] hover:border-black'>Sealable - 20 oz</li>
                            <li className='hover:border-b-[1px] hover:border-black'>MINI - 12 oz</li>
                        </ul>
                    </div>
                    </div>
                    <div className="w-fit overflow-hidden">
                        <img
                            src={ultematetreat}
                            alt=""
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                            style={{ transformOrigin: "center" }}
                        />
                    </div>

                </div>
            </section>
        </>
    )
}
export default Ultimate