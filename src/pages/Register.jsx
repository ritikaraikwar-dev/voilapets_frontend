import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const baseUrl = process.env.REACT_APP_BASE_URL;

function Register() {

    const [showOtp, setShowOtp] = useState(false);
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        otp: ""
    });

    const handleForm = async (e) => {
        try {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } catch (error) {
            console.log(error);
        }
    }

    function validate() {
        setError({});
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const emailError = error.email;
        if (!formData.firstName.trim()) {
            isValid = false;
            setError(prev => ({ ...prev, firstName: "firstName is required." }))
        }
        else if (formData.firstName.length < 3) {
            isValid = false;
            setError(prev => ({ ...prev, firstName: "firstName is too short" }))
        }
        if (!formData.lastName.trim()) {
            isValid = false;
            setError(prev => ({ ...prev, lastName: "lastName is required." }))
        }
        else if (formData.lastName.length < 3) {
            isValid = false;
            setError(prev => ({ ...prev, lastName: "lastName is too short" }))
        }
        if (!formData.email.trim()) {
            isValid = false;
            setError(prev => ({ ...prev, email: "email is required" }))
        }
        else if (!emailRegex.test(formData.email)) {
            isValid = false;
            setError(prev => ({ ...prev, email: "invalid email" }))
        }
        if (!formData.password.trim()) {
            isValid = false;
            setError(prev => ({ ...prev, password: "password is required." }))
        }
        else if (formData.password.length < 6) {
            isValid = false;
            setError(prev => ({ ...prev, password: "password must be 6 character" }))
        }

        return isValid;
    }


    const sentOtp = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        try {
            const res = await axios.post(`${baseUrl}/voilapets/sendVerificationOtp`, formData);

            console.log("email sent successfully", res.data);
            setShowOtp(true);
        } catch (error) {
            console.log(error);
        }

    }

    const register = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${baseUrl}/voilapets/verifyRegistrationOtp`, formData);

            console.log("register successfully", res.data);
            toast.success('User register successfully !');
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <>
            <section className='relative bg-[#F5FCF8] py-16 px-8 '>
                <Toaster />
                <div className='pt-4 '>
                    <h2 className='uppercase text-center pt-14  text-3xl tracking-wide font-bold text-[#53565A]'>Create account</h2>

                </div>

                <div className="flex justify-center items-center">
                    <form className='w-1/3 px-0 bg-transparent p-6 rounded-md  '>




                        <div className="relative w-full mb-6">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleForm}
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full pt-6 pb-2 px-3 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder-transparent"
                            />
                            <label
                                htmlFor="firstName"
                                className="absolute left-3 top-1 text-sm text-[#7B7F81] transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
      bg-[#F5FCF8] px-1 pointer-events-none"
                            >
                                First Name *
                            </label>

                            {error.firstName && (
                                <p className="text-red-500 text-sm mt-1">{error.firstName}</p>
                            )}
                        </div>

                        <div className="relative w-full mb-6">
                            <input
                                  type="text"
                                id="email"
                                onChange={handleForm} value={formData.lastName} name="lastName"
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full pt-6 pb-2 px-3 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder-transparent"
                            />
                            <label
                                htmlFor="firstName"
                                className="absolute left-3 top-1 text-sm text-[#7B7F81] transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
      bg-[#F5FCF8] px-1 pointer-events-none"
                            >
                                Last Name *
                            </label>

                            {error.firstName && (
                                <p className="text-red-500 text-sm mt-1">{error.lastName}</p>
                            )}
                        </div>


                         

                        <div className="relative w-full mb-6">
                            <input
                                type="email"
                                id="email"
                                onChange={handleForm} value={formData.email} name="email"
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

                            {
                                error.email && <p className="text-red-500">{error.email}</p>
                            }

                        </div>

                        <div className="relative w-full mb-2">
                            <input
                                type="password"
                                id="email"
                                onChange={handleForm} value={formData.password} name="password"
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

                                Password *
                            </label>
                            {
                                error.password && <p className="text-red-500">{error.password}</p>
                            }

                        </div>


                        {showOtp && (
                            <div className="relative w-full mb-2">
                                <input
                                    type="text"
                                    id="otp"
                                    onChange={handleForm} value={formData.otp} name="otp"
                                    className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder:text-[#6B7280] placeholder:text-2xl placeholder:font-medium"
                                />
                                <label
                                    htmlFor="otp"
                                    className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                >

                                    Otp *
                                </label>

                                {
                                    error.otp && <p className="text-red-500">{error.otp}</p>
                                }
                            </div>
                        )}

                        <div> <input type="checkbox" className="text-xl" /> <label htmlFor="" className="px-1 text-[#4B5563]"> Email me with news and offers. </label>  </div>





                        <div className='w-2/4 mx-auto flex justify-center'>
                            {
                                showOtp ? (
                                    <button
                                        type="submit"
                                        className=' mt-10   bg-[#435870]   text-md text-white px-9 py-4 rounded  '
                                        onClick={register}
                                    >
                                        register
                                    </button>

                                ) : (
                                    <button
                                        type="submit"
                                        className=' mt-10   bg-[#435870]   text-md text-white px-9 py-4 rounded  '
                                        onClick={sentOtp}
                                    >
                                        sent Otp
                                    </button>
                                )
                            }




                        </div>



                        <div className="text-center mt-4">
                            <Link to="/login" className="text-[#4B5563]  underline">
                                Login
                            </Link>
                        </div>

                    </form>


                </div>

            </section >
        </>
    )
}
export default Register;