import newlogo from '../assets/img/newlogo.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Navbar() {



    const [accessories, setAccessories] = useState(false);

    const [showNavbar, setShowNavbar] = useState(false)
    const [showNav, setShowNav] = useState(false);
    const [shop, setShop] = useState(false);
    const [ultimate, setUltimate] = useState(false);
    const [accesories, setAccesories] = useState(false);

    const showMenu = () => {
        setShowNav((prev) => !showNav)
    }
    const shopMenu = () => {
        setShop((prev) => !shop)
    }
    const unlimateMenu = () => {
        setUltimate((prev) => !ultimate)
    }
    const accesoriesMenu = () => {
        setAccesories((prev) => !accesories)
    }

    const { cartItems, showCart } = useCart();

    const toggleNavbar = () => setShowNavbar(prev => !prev);
    const toggleShop = () => setShop(prev => !prev);
    const toggleUltimate = () => setUltimate(prev => !prev);
    const toggleAccessories = () => setAccessories(prev => !prev);

    return (
        <>

            <section className='min-h-screen absolute py-8 w-full'>
                <nav className="sticky relative mx-8 lg:px-8 rounded top-0 rounded-md z-50 bg-white shadow-md">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        {/* Mobile hamburger button */}
                        <button
                            onClick={toggleNavbar}
                            className="block lg:hidden p-2 text-gray-700"
                            aria-label="Toggle menu"
                        >
                            {showNavbar ? <CloseIcon fontSize="large" /> : <MenuOutlinedIcon fontSize="large" />}
                        </button>

                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <img
                                src={newlogo}
                                alt="Logo"
                                className="w-20 sm:w-24 md:w-24 lg:w-32"
                            />

                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex gap-8 font-semibold text-lg text-[#55687E]">
                            <li><Link to="/">Home</Link></li>



                            <div className="relative inline-block" tabIndex={0} onBlur={(e) => {
                                // Only close if the new focused element is outside this menu
                                if (!e.currentTarget.contains(e.relatedTarget)) {
                                    setShop(false);
                                    setUltimate(false);
                                    setAccesories(false);
                                }
                            }}>
                                {/* Main Dropdown Trigger */}
                                <li className="cursor-pointer flex items-center" onClick={shopMenu}>
                                    <span className={`border-b-[1px] ${shop ? 'border-black' : 'border-transparent'} pb-0.5`}>
                                        Shop
                                    </span>
                                    <span className="ml-1">
                                        {shop ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </span>
                                </li>

                                {/* Main Dropdown Menu */}
                                {shop && (
                                    <div className="absolute left-[-25px] mt-2 w-52 bg-white border shadow-lg z-50">
                                        <ul className="py-2   flex flex-col space-y-1">
                                            {/* Ultimate Treat Pouch */}
                                            <li className="relative">
                                                <div
                                                    className=" px-3 flex gap-10 items-center cursor-pointer"
                                                    onClick={unlimateMenu}
                                                >
                                                    <span
                                                        className={`leading-tight hover:underline decoration-[1px] decoration-black underline-offset-[2px]`}
                                                    >
                                                        Ultimate Treat Pouch
                                                    </span>
                                                    <span  >
                                                        {ultimate ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                    </span>
                                                </div>

                                                {/* Submenu (Dropdown Below) */}
                                                {ultimate && (
                                                    <div className="mt-2 w-full bg-[#F9FAFB]   z-40">
                                                        <ul className="leading-tight py-2 px-3 flex flex-col space-y-1">
                                                            <Link to="/mini/1"> <li className="hover:underline pb-1">
                                                                Mini
                                                            </li></Link>
                                                            <Link to="/standard/2">   <li className="hover:underline pb-1">
                                                                Standard
                                                            </li></Link>
                                                            <Link to="/large/3"> <li className="hover:underline pb-1">
                                                                Large
                                                            </li></Link>
                                                            <Link to="/sealable/4"> <li className="hover:underline pb-1">
                                                                Sealable
                                                            </li></Link>
                                                            <Link to="/shopAll"> <li className="hover:underline pb-1">
                                                                Shop All
                                                            </li></Link>
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                            {/* Ultimate Treat Pouch */}
                                            <li className="relative">
                                                <div
                                                    className="px-3 flex gap-[4.5rem] items-center cursor-pointer"
                                                    onClick={accesoriesMenu}
                                                >
                                                    <span
                                                        className={`leading-tight hover:underline decoration-[1px] decoration-black underline-offset-[2px]`}
                                                    >
                                                        Accesories
                                                    </span>
                                                    <span>
                                                        {accesories ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                    </span>
                                                </div>

                                                {/* Submenu (Dropdown Below) */}
                                                {accesories && (
                                                    <div className="mt-2 w-full bg-[#F9FAFB]   z-40">
                                                        <ul className="leading-tight py-2 px-3 flex flex-col space-y-1">
                                                            <Link to="/carniber">  <li className="hover:underline pb-1">
                                                                Carniber
                                                            </li> </Link>
                                                            <Link to="/adventureclip/5"> <li className="hover:underline pb-1">
                                                                Adventure Clip
                                                            </li> </Link>
                                                            <Link to="/miniadventure/6"> <li className="hover:underline pb-1">
                                                                Mini Adventure Clip
                                                            </li> </Link>
                                                            <Link to="/essentialHat/7">  <li className="hover:underline pb-1">
                                                                Essential Hat
                                                            </li> </Link>
                                                            <Link to="/shopAllaccesories">  <li className="hover:underline pb-1">
                                                                Shop All
                                                            </li> </Link>
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className=' relative inline-block' tabIndex={0} onBlur={(e) => {
                                // Only close if the new focused element is outside this menu
                                if (!e.currentTarget.contains(e.relatedTarget)) {
                                    setShowNav(false);

                                }
                            }}>

                                <li className="cursor-pointer flex items-center" onClick={showMenu}>
                                    <span className={`border-b-[1px] ${showNav ? 'border-black' : 'border-transparent'} pb-0.5`}>
                                        About us
                                    </span>
                                    <span className="ml-1">
                                        {shop ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </span>
                                </li>

                                {showNav && (

                                    <div
                                        className={`border absolute w-[200px] left-[-25px] mt-4 bg-white shadow-lg   transition-all duration-200 ease-in-out z-50
                                               ${showNav ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                                    >
                                        <ul className="py-2 px-2 flex flex-col ">
                                            <Link to="/story"> <li className=" pb-1  hover:underline">
                                                Our Story
                                            </li></Link>
                                            <Link to="/gallery"><li className=" pb-1 hover:underline">
                                                Gallery
                                            </li></Link>
                                        </ul>
                                    </div>

                                )}  </div>



                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>

                        {/* Icons */}
                        <ul className="flex gap-5 items-center text-[#55687E]">
                            <li className="border-r pr-4 cursor-pointer"><SearchIcon /></li>
                            <li className="border-r pr-4 cursor-pointer"><Link to="/login"><PersonOutlineIcon /></Link></li>
                            <li className="relative cursor-pointer" onClick={showCart}>
                                <ShoppingCartOutlinedIcon />
                                {cartItems.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
                                        {cartItems.length}
                                    </span>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* Mobile menu below navbar */}
                    {showNavbar && (
                        <div className="lg:hidden w-full bg-white border-t border-gray-200 shadow-md px-6 py-6 space-y-4">
                            <nav className="flex flex-col text-gray-900 text-lg">
                                <Link to="/" className="border-b border-gray-200 pb-3 block">Home</Link>
                                <Link to="/shop" className="border-b border-gray-200 pb-3 block">Shop</Link>
                                <Link to="/about" className="border-b border-gray-200 pb-3 block">About Us</Link>
                                <Link to="/faq" className="border-b border-gray-200 pb-3 block">FAQs</Link>
                                <Link to="/contact" className="border-b border-gray-200 pb-3 block">Contact Us</Link>
                            </nav>
                        </div>
                    )}
                </nav>
            </section>
        </>
    );
}

export default Navbar;
