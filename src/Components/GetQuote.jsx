import React from 'react'
import pic1 from '../../src/assets/images/Company1.svg'

function GetQuote() {
    return (
        <div>
            <div className='hidden lg:flex lg:h-[350px]'>
                <img src={pic1} alt="" />
            </div>
            <div className=' flex lg:relative lg:bottom-48 lg:text-white text-black  h-[83px]'>
                <div className='mx-auto'>
                    <h1 className='text-4xl font-semibold'>Get Quote</h1>
                    <h4 className='text-center'>Home/Get Quote</h4>
                </div>
            </div>

            <div className='lg:w-[745px] lg:h-[92px] mx-auto'>
                <h1 className='lg:text-5xl text-xl text-[#733D85] text-center font-semibold '>Share Your Requirements with us</h1>
                <h6 className='text-[#00000080] font-semibold text-center py-2'>By filling this simple form below</h6>
            </div>

            <div className='lg:flex flex-wrap justify-between lg:mx-20 py-4'>
                {/* first foem column  */}
                <div class="  lg:h-[440px] bg-white py-6 lg:py-0   rounded  mx-6 lg:mx-0">

                    {/* <!-- Heading --> */}

                    {/* <!-- Form --> */}
                    <form action="#" method="post">

                        {/* <!-- Name Field --> */}
                        <div class="mb-4">
                            <input type="text" id="name" name="name" placeholder='Your Name*' class="lg:w-[583px] w-full h-[60px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                        </div>

                        {/* <!-- Email Field --> */}
                        <div class="mb-4">
                            <input type="email" id="email" name="email" placeholder='Your Email*' class="lg:w-[583px] w-full h-[60px]  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                        </div>

                        {/* budget  */}
                        <div class="mb-4">
                            <input type="email" id="email" name="email" placeholder='Your Budget*' class="lg:w-[583px] w-full h-[60px]  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                        </div>

                        {/* <!-- Comment Field --> */}
                        <div class="mb-6">
                            <textarea id="comment" name="comment" rows="4" placeholder='How Can I Help You?*' class="lg:w-[583px] w-full h-[114px]  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]"></textarea>
                        </div>

                        {/* <!-- Submit Button --> */}
                        {/* <div class="  items-center justify-center">
                            <button type="submit" class="bg-blue-500 w-[140px] h-[50px] text-xl text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
                                Send
                            </button>
                        </div> */}

                    </form>

                </div>

                {/* 2nd form column  */}
                <div class="  lg:h-[440px] bg-white py-6 lg:py-0   rounded  mx-6 lg:mx-0">

                    {/* <!-- Heading --> */}

                    {/* <!-- Form --> */}
                    <form action="#" method="post">

                        {/* <!-- Name Field --> */}
                        <div class="mb-4">
                            <input type="text" id="name" name="name" placeholder='Your Company*' class="lg:w-[583px] w-full h-[60px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                        </div>

                        {/* <!-- Email Field --> */}
                        <div class="mb-4">
                            <input type="email" id="email" name="email" placeholder='Your Phone*' class="lg:w-[583px] w-full h-[60px]  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                        </div>

                        {/* <!-- Comment Field --> */}
                        <div class="mb-4">
                            <input type="email" id="email" name="email" placeholder='Select*' class="lg:w-[583px] w-full h-[60px]  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                        </div>

                        {/* file  */}
                        <div class="mb-4">
                            <input type="file" id="fileInput" name="fileInput" class="lg:w-[583px] w-full h-[60px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                        </div>

                        {/* <!-- Submit Button --> */}
                        {/* <div class="  items-center justify-center">
                            <button type="submit" class="bg-blue-500 w-[140px] h-[50px] text-xl text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
                                Send
                            </button>
                        </div> */}

                    </form>

                </div>
            </div>

            {/* button  */}
            <div className='mb-12'>
                <div className='w-[230px] h-[50px] flex mx-auto    bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800 rounded-md'>
                    <button className='w-[230px] text-white items-center justify-center mx-auto text-lg '>Submit</button>

                </div>
            </div>
        </div>
    )
}

export default GetQuote
