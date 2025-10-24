import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const baseUrl = process.env.REACT_APP_BASE_URL;

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleForm = async (e) => {
        try {
            const { name, value } = e.target;
            setFormData((prev) => ({
                ...prev, [name]: value
            }))
        } catch (error) {
            console.log("error occur", error);
        }

    }

    const submitForm = async (e) => {
        try {
            e.preventDefault();

            const res = await axios.post(`${baseUrl}/voilapets/userLogin`, formData);

            console.log("user login successfully", res.data);
            toast.success('User Login successfully !');

        } catch (error) {
            console.log("error occur", error);
        }

    }



    return (
        <>
            <section className='relative bg-[#F5FCF8] py-24 px-8 '>
                <Toaster />


                <div className='  pt-24 pb-8'>

                    <h2 className='uppercase text-center   text-3xl tracking-wide font-bold text-[#53565A] '>Login</h2>

                </div>

                <div className="flex justify-center items-center">
                    <form onSubmit={submitForm} className='w-1/3 px-0 bg-transparent   rounded-md  '>

                        <div className="relative w-full mb-6">
                            <input
                                type="email"
                                id="email"
                                name="email" value={formData.email} onChange={handleForm}
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full pt-6 pb-2 px-3 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder-transparent"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-1 text-sm text-[#7B7F81] transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
      bg-[#F5FCF8] px-1 pointer-events-none"
                            >
                                Email *
                            </label>
                        </div>

                        <div className="relative w-full mb-2">
                            <input
                                type="password"
                                id="password"
                                name="password" value={formData.password} onChange={handleForm}
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full pt-6 pb-2 px-3 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder-transparent"
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-3 top-1 text-sm text-[#7B7F81] transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
      bg-[#F5FCF8] px-1 pointer-events-none"
                            >
                                Password *
                            </label>
                        </div>
                        <div className="   ">
                            <Link to="/forgotpass" className="text-[#4B5563]  underline">
                                Forgot your password?
                            </Link>
                        </div>
                        <div className='w-2/4 mx-auto flex justify-center'>
                            <button
                                type="submit"
                                className=' mt-10   bg-[#435870]   text-md text-white px-9 py-4 rounded  '
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/register" className="text-[#4B5563]  underline">
                                Create Account
                            </Link>
                        </div>

                        <div className="text-center mt-7">
                            <Link to="/wholesale" className="text-[#4B5563]  underline">
                                Create Wholsale Account
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Login;