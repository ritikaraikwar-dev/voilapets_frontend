 import voilapetshome from '../assets/img/voilapetshome.mp4'
function Hero(){
    return(
        <>
         <div className='relative '>

                    <video className='w-full h-auto' autoPlay muted loop playsInline >
                        <source src={voilapetshome} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className='flex justify-center'>
                        <p className='text-2xl   bottom-20 absolute lg:bottom-36 lg:left-24 lg:text-5xl font-bold text-white'> THE ULTIMATE TREAT POUCH</p>
                        <div className=' bottom-8 absolute    h-10 w-40 lg:bottom-28 font-base text-md lg:right-24 lg:h-32 lg:w-32 rounded-full bg-[#435870] flex items-center justify-center text-white'> <p> Get Yours </p></div>
                    </div>
                </div>
        </>
    )
}
export default Hero;