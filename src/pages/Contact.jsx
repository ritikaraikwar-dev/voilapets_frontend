import contact from '../assets/img/contact.webp';
import { useState } from 'react';
function Contact() {


    const [fileName, setFileName] = useState(null);

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            // You can do other logic here, like uploading or validating the file
        }
    }

    const [selectedEnquiry, setSelectedEnquiry] = useState('');

    const handleSelectChange = (e) => {
        setSelectedEnquiry(e.target.value);
    };
    return (
        <>
            <section className='bg-[#F5FCF8]  relative'>

                <div className='pt-20'>
                    <h2 className='uppercase text-center py-10 text-3xl tracking-wide font-bold text-[#53565A] '>Contact Us</h2>
                    <p className='text-center  pb-4 text-lg tracking-wide text-[#53565A]'>Have a question about our products? Need to request a return? Send us a message below and we’ll respond as quickly as we can!</p>
                </div>

                <div className='flex justify-center '>
                    <img src={contact} alt="" className='' />
                </div>
                <div className='py-20'>
                    <div className='flex justify-center'>


                        <div className="relative w-2/4 mb-6">
                            <select
                                onChange={handleSelectChange}
                                name="enquiry"
                                id="enquiry"
                                defaultValue=""
                                required
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] text-[#535664] appearance-none invalid:text-gray-400"
                            >

                                <option value="" disabled className="bg-[#F5FCF8]">
                                    Select your Inquiry type
                                </option>
                                <option value="return" className="bg-[#F5FCF8]">Initiate a Return</option>
                                <option value="assistance" className="bg-[#F5FCF8]">Assistance with Product</option>
                                <option value="warranty" className="bg-[#F5FCF8]">File a Warranty Claim</option>
                                <option value="general" className="bg-[#F5FCF8]">General Enquiry</option>
                            </select>

                            <label
                                htmlFor="enquiry"
                                className="absolute left-3 top-4 text-[#93A2AE] text-lg transition-all
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#93A2AE]
      peer-invalid:top-4 peer-invalid:text-base peer-invalid:text-gray-400
      bg-[#F5FCF8] px-1 pointer-events-none"
                            >
                                Select your Inquiry type *
                            </label>
                        </div>



                    </div>


                    <div className='mt-2 flex justify-center w-full '>
                        {/* Conditionally render forms */}
                        {selectedEnquiry === 'return' && (
                            <form className='w-2/4 px-0 bg-transparent p-6 rounded-md  '>

                                <div className='flex gap-4 mb-4'>



                                    <div className="relative w-full mb-6">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder=" "
                                            className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE]"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                        >
                                            Name *
                                        </label>
                                    </div>



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
               bg-[#F5FCF8] px-1 pointer-events-none"
                                        >

                                            Email *
                                        </label>
                                    </div>

                                </div>
                                <div className="relative w-full mb-6">
                                    <input
                                        type="text"
                                        id="invoice"
                                        placeholder=" "
                                        className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE]"
                                    />
                                    <label
                                        htmlFor="Invoice"
                                        className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                    >
                                        Invoice Number *
                                    </label>
                                </div>


                                <div className="relative w-full mb-6">
                                    <textarea
                                        id="reason"
                                        placeholder=" "
                                        rows={4} // or whatever height you want
                                        className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] resize-none"
                                    ></textarea>
                                    <label
                                        htmlFor="reason"
                                        className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                    >
                                        Reason for Return *
                                    </label>
                                </div>
                            </form>
                        )}

                        {selectedEnquiry === 'assistance' && (
                            <form className='w-2/4 px-0 bg-transparent p-6 rounded-md  '>

                                <div className='flex gap-4 mb-4'>
                                    <div className="relative w-full mb-6">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder=" "
                                            className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE]"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                        >
                                            Name *
                                        </label>
                                    </div>
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
               bg-[#F5FCF8] px-1 pointer-events-none"
                                        >

                                            Email *
                                        </label>
                                    </div>

                                </div>
                                <div className="relative w-full mb-6">
                                    <input
                                        type="text"
                                        id="invoice"
                                        placeholder=" "
                                        className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE]"
                                    />
                                    <label
                                        htmlFor="Invoice"
                                        className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                    >
                                        Phone Number *
                                    </label>
                                </div>
                                <div className="relative w-full mb-6">
                                    <textarea
                                        id="reason"
                                        placeholder=" "
                                        rows={4} // or whatever height you want
                                        className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] resize-none"
                                    ></textarea>
                                    <label
                                        htmlFor="reason"
                                        className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                    >
                                        Reason for Return *
                                    </label>
                                </div>
                            </form>
                        )}

                        {selectedEnquiry === 'warranty' && (
                            <form className='w-2/4 px-0 bg-transparent p-6 rounded-md  '>

                                <div className='flex gap-4 mb-4'>



                                    <div className="relative w-full mb-6">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder=" "
                                            className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE]"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                        >
                                            Name *
                                        </label>
                                    </div>



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
               bg-[#F5FCF8] px-1 pointer-events-none"
                                        >

                                            Email *
                                        </label>
                                    </div>

                                </div>
                                <div className="relative w-full mb-6">
                                    <input
                                        type="text"
                                        id="invoice"
                                        placeholder=" "
                                        className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE]"
                                    />
                                    <label
                                        htmlFor="Invoice"
                                        className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                    >
                                        Phone Number *
                                    </label>
                                </div>


                                <div className="relative w-full mb-6">
                                    <textarea
                                        id="reason"
                                        placeholder=" "
                                        rows={4} // or whatever height you want
                                        className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] resize-none"
                                    ></textarea>
                                    <label
                                        htmlFor="reason"
                                        className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                    >
                                        Description of issue(s) *
                                    </label>
                                </div>
                                <div className="w-full     mb-6">
                                    <label
                                        htmlFor="file-upload"
                                        className="  flex flex-col items-center justify-center border border-dashed border-[#93A2AE] rounded p-6
               text-gray-500 cursor-pointer hover:bg-[#f0f5f4] transition text-center"
                                    >
                                        <span className="mb-2 text-lg">Choose file or drag here</span>
                                        <span className="mb-2 text-xs">Supported format: JPG, JPEG, PNG, GIF, SVG.</span>
                                        <span className="bg-white text-gray-600 border px-5 py-3 rounded font-semibold text-xs">
                                            Browse File
                                        </span>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden bg-white"
                                            onChange={handleFileChange}
                                        />
                                        {fileName && (
                                            <p className="mt-3 text-sm text-[#374151] font-medium">
                                                Selected file: {fileName}
                                            </p>
                                        )}
                                    </label>
                                </div>

                            </form>
                        )}

                        {selectedEnquiry === 'general' && (
                            <form className='w-2/4 px-0 bg-transparent p-6 rounded-md  '>

                                <div className='flex gap-4 mb-4'>



                                    <div className="relative w-full mb-6">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder=" "
                                            className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE]"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                        >
                                            Name *
                                        </label>
                                    </div>



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
               bg-[#F5FCF8] px-1 pointer-events-none"
                                        >

                                            Email *
                                        </label>
                                    </div>

                                </div>
                                <div className="relative w-full mb-6">
                                    <input
                                        type="text"
                                        id="invoice"
                                        placeholder=" "
                                        className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE]"
                                    />
                                    <label
                                        htmlFor="Invoice"
                                        className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                    >
                                        Phone Number *
                                    </label>
                                </div>


                                <div className="relative w-full mb-6">
                                    <textarea
                                        id="reason"
                                        placeholder=" "
                                        rows={4} // or whatever height you want
                                        className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] resize-none"
                                    ></textarea>
                                    <label
                                        htmlFor="reason"
                                        className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                                    >
                                        Comment *
                                    </label>
                                </div>


                            </form>
                        )}
                    </div>
                    <div className='w-2/4 mx-auto flex justify-center'>
                        <button
                            type="submit"
                            className=' w-full    bg-[#435870]   text-xl text-white px-4 py-2 rounded  '
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;