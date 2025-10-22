import { Link } from "react-router-dom";
import { useState } from "react";

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo - Brazzaville",
    "Congo - Kinshasa",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];



function WholeSaleAccount() {

    const [selectedCountry, setSelectedCountry] = useState("United States");
    return (
        <>
            <section className='relative bg-[#F5FCF8] py-24 px-8 '>

                <div className='py-10'>
                    <h2 className='uppercase text-center   text-3xl tracking-wide font-bold text-[#53565A] '>Request a wholesale account</h2>

                </div>

                <p className="text-center text-lg tracking-loose text-[#53565A]">Interested in becoming a dealer? Please fill out the application below.</p>

                <p className="   text-center  text-lg tracking-loose py-4 text-[#53565A]   ">Already have an account? <Link className="underline" to='/login'> Login here</Link> </p>  


                <p className="text-center text-2xl py-4 font-bold tracking-loose text-[#53565A]">Customer information</p>
                <div className="flex justify-center items-center">

                    <form className='w-3/5 px-0 bg-transparent p-6 rounded-md  '>

                        <div className='flex gap-4 mb-3 '>

                            <div className="relative w-full ">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    First  Name <span className="text-[#FD4828]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className=" py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full   rounded outline-none  "
                                />

                            </div>

                            <div className="relative w-full  ">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Last  Name <span className="text-[#FD4828]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="  py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full  rounded outline-none  "
                                />

                            </div>

                        </div>

                        <div className='flex gap-4 mb-3'>

                            <div className="relative w-full ">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Email <span className="text-[#FD4828]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className=" py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full   rounded outline-none  "
                                />

                            </div>

                            <div className="relative w-full ">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="  py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full  rounded outline-none  "
                                />

                            </div>

                        </div>

                        <div className='flex gap-4 mb-3'>

                            <div className="relative w-full  ">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Phone Number <span className="text-[#FD4828]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className=" py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full   rounded outline-none  "
                                />

                            </div>

                            <div className="relative w-full  ">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Alternative Phone Number (optional)
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="  py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full  rounded outline-none  "
                                />

                            </div>

                        </div>

                        <div className='flex gap-4 mb-3'>

                            <div className="relative w-full  ">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Tax ID/ABN/VAT Number
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className=" py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full   rounded outline-none  "
                                />

                            </div>

                            <div className="relative w-full">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Website
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="  py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full  rounded outline-none  "
                                />

                            </div>

                        </div>

                        <div className='flex gap-4 mb-3'>

                            <div className="relative w-full">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Password  <span className="text-[#FD4828]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className=" py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full   rounded outline-none  "
                                />

                            </div>

                            <div className="relative w-full">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Password Confirmation <span className="text-[#FD4828]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="  py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full  rounded outline-none  "
                                />

                            </div>

                        </div>


                        <div className="relative w-full mb-6">
                            <label
                                htmlFor="reason"
                                className="text-sm text-[#53565A]"
                            >
                                Tell us a little about yourself so that we can verify your business identity
                            </label>
                            <textarea
                                id="reason"
                                placeholder=" "
                                rows={4} // or whatever height you want
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none   "
                            ></textarea>

                        </div>
                        <p className="text-center text-2xl py-4 font-bold tracking-loose text-[#53565A]">Shipping address</p>

                        <div className="relative w-full mb-3">
                            <label
                                htmlFor="name"
                                className="text-sm text-[#53565A]"
                            >
                                Address1  <span className="text-[#FD4828]">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                className=" py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full   rounded outline-none  "
                            />

                        </div>


                        <div className="relative w-full mb-3">
                            <label
                                htmlFor="name"
                                className="text-sm text-[#53565A]"
                            >
                                Address2
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                className=" py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full   rounded outline-none  "
                            />

                        </div>


                        <div className='flex gap-4  mb-3'>

                            <div className="relative w-full">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    City  <span className="text-[#FD4828]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className=" py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full   rounded outline-none  "
                                />

                            </div>

                            {/* <div className="relative w-full mt-1 ">

                                <label
                                    htmlFor="name"
                                    className="text-sm   text-[#53565A]"
                                >
                                    Country  <span className="text-[#FD4828]">*</span>
                                </label>

                                <select

                                    name="enquiry"
                                    id="enquiry"
                                    defaultValue=""
                                    value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
                                    required
                                    className=" bg-transparent border border-[#93A2AE] w-full   rounded outline-none   text-black  py-3  "
                                >

                                    
                                    <div className="bg-white text-black"> 
                                    {countries.map((country) => (
                                        <option key={country} value={country.toLowerCase().replace(/ /g, "-")}>
                                            {country}
                                        </option>
                                    ))}
                                    </div>
                                </select>


                            </div> */}

                            <div className="relative w-full mt-1">
                                <label htmlFor="country" className="text-sm text-[#53565A]">
                                    Country <span className="text-[#FD4828]">*</span>
                                </label>

                                <select
                                    id="country"
                                    name="country"
                                    required
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                    className="bg-transparent border border-[#93A2AE] w-full rounded outline-none text-black py-3"
                                >
                                    <option value="" disabled>Select a country</option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>


                        </div>

                        <div className='flex gap-4 mb-3'>

                            {/* Conditionally Render State Field if Country is United States */}
                           


                            {selectedCountry === "United States" && (
                                <div className="relative w-full mt-1">
                                    <label htmlFor="state" className="text-sm text-[#53565A]">
                                        State/Province <span className="text-[#FD4828]">*</span>
                                    </label>

                                    <select
                                        id="state"
                                        name="state"
                                        required
                                        className="bg-transparent border border-[#93A2AE] w-full rounded outline-none text-black py-3"
                                    >
                                        <option value="" disabled>Select a state</option>
                                        {usStates.map((state) => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}


                            <div className="relative w-full">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-[#53565A]"
                                >
                                    Zip/Postal Code  <span className="text-[#FD4828]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="  py-3 px-4 mt-1 bg-transparent border border-[#93A2AE] w-full  rounded outline-none  "
                                />

                            </div>

                        </div>

                        
                        <div className='w-2/4 mx-auto flex justify-center'>
                            <button
                                type="submit"
                                className=' mt-14  uppercase  bg-[#435870]   text-md text-white px-9 py-4 rounded  '
                            >
                                submit application
                            </button>


                        </div>

                    </form>
                </div>


            </section>
        </>
    )
}
export default WholeSaleAccount;