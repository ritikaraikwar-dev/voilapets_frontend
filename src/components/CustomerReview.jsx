import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
function CustomerReview() {
    return (
        <>
            <section className="px-16  py-20 bg-[#D7E1DB]">

                <div className="bg-[#F5FCF8]">
                    <p className='uppercase text-3xl text-center font-bold pb-10   text-[#4B4D51]'>Additional Information</p>

                    <div className="flex">
                        <div>
                            <span className='text-[#FFC200]'> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon /> </span>
                            <span>4.70 out of 5
                                Based on 23 reviews</span> </div>
                        <div>

                            <ul>
                                <li className='flex gap-3 items-center'> <span className='text-[#FFC200]'> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> </span> <label for="disk_c"> </label>
                                    <div className="w-64 h-4 bg-[#F4F2F0] rounded-lg  overflow-hidden">

                                        <div
                                            className="h-full bg-[#D5DFD9] transition-all duration-500"
                                            style={{ width: '80%' }}
                                        />
                                    </div> <p>19</p> </li>

                                <li className='flex gap-3 items-center'> <span className='text-[#FFC200]'> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> </span> <label for="disk_c"> </label>
                                    <div className="w-64 h-4 bg-[#F4F2F0] rounded-lg  overflow-hidden">

                                        <div
                                            className="h-full bg-[#D5DFD9] transition-all duration-500"
                                            style={{ width: '20%' }}
                                        />
                                    </div> <p>3</p> </li>

                                <li className='flex gap-3 items-center'> <span className='text-[#FFC200]'> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> </span> <label for="disk_c"> </label>
                                    <div className="w-64 h-4 bg-[#F4F2F0] rounded-lg  overflow-hidden">

                                        <div
                                            className="h-full bg-[#D5DFD9] transition-all duration-500"
                                            style={{ width: '0%' }}
                                        />
                                    </div> <p>0</p> </li>

                                <li className='flex gap-3 items-center'> <span className='text-[#FFC200]'> <StarIcon sx={{ fontSize: 17 }} /> <StarIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> </span> <label for="disk_c"> </label>
                                    <div className="w-64 h-4 bg-[#F4F2F0] rounded-lg  overflow-hidden">

                                        <div
                                            className="h-full bg-[#D5DFD9] transition-all duration-500"
                                            style={{ width: '0%' }}
                                        />
                                    </div> <p>0</p> </li>

                                <li className='flex gap-3 items-center'> <span className='text-[#FFC200]'> <StarIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> <StarOutlineIcon sx={{ fontSize: 17 }} /> </span> <label for="disk_c"> </label>
                                    <div className="w-64 h-4 bg-[#F4F2F0] rounded-lg  overflow-hidden">

                                        <div
                                            className="h-full bg-[#D5DFD9] transition-all duration-500"
                                            style={{ width: '0%' }}
                                        />
                                    </div> <p>1</p> </li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CustomerReview;