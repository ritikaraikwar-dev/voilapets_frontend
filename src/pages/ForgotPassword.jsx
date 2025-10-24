import { Link } from "react-router-dom";
function ForgotPassword(){
    return(
        <>
           <section className='relative bg-[#F5FCF8] py-24 px-8 '>

                <div className='pt-10'>
                    <h2 className='uppercase text-center  text-3xl tracking-wide font-bold text-[#53565A] '>Reset your password</h2>
                   
                </div>

                  <p className="tracking-wide text-center py-4 text-lg text-[#53565A]">We will send you an email to reset your password</p>

                <div className="flex justify-center items-center">
                    <form className='w-1/3 px-0 bg-transparent p-6 rounded-md  '>
                        <div className="relative w-full mb-6">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder:text-[#6B7280] placeholder:text-2xl placeholder:font-medium"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 text-[#4B5563] text-lg transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
      bg-[#F5FCF8] px-1"
                            >
                                Email *
                            </label>
                        </div>

                       



                        <div className='w-2/4 mx-auto flex justify-center'>
                           <button
                                type="submit"
                                className=' mt-4  bg-[#435870]   text-md text-white px-9 py-4 rounded  '
                            >
                                Submit
                            </button>


                        </div>
                        <div className="text-center mt-4">
                            <Link to="/login" className="text-[#4B5563]  underline">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default ForgotPassword