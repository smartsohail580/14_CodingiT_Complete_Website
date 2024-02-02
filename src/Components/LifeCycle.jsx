import React from 'react'
import Listen from '../../src/assets/images/Listen.svg'
import Cycle from '../../src/assets/images/Cycle.svg'
import ServiceIcon from '../../src/assets/svg/ServiceIcon.svg'
import TechnologyIcon from '../../src/assets/svg/TechnologyIcon.svg'
import Progress from '../../src/assets/images/Progress.svg'
import Vector from '../../src/assets/svg/Vector.svg'
function LifeCycle() {
    return (
        <div className='lg:py-60  '>
            <div className='flex'>
                <h1 className='mx-auto font-semibold lg:text-3xl text-[#733D85]'>Code Life Cycle</h1>
            </div>

            {/* box  */}
            <div class="flex flex-wrap   gap-2 py-8 mx-4">
                {/* <!-- Box 1 --> */}
                <div class="flex items-center justify-center w-full mx-auto lg:w-[284px]  h-[261px] border rounded-xl border-l-[#E79E49] border-r-[#DC799A] border-t-[#D2508A] border-b-[#733D85]">
                    <div class="text-center">
                        <img src={Listen} alt="" class="ml-3" />
                        <p class="mt-5 font-semibold text-3xl">Listen</p>
                    </div>
                </div>

                {/* <!-- Box 2 --> */}
                <div class="flex items-center justify-center w-full mx-auto lg:w-[284px]  h-[261px] border rounded-xl border-l-[#E79E49] border-r-[#DC799A] border-t-[#D2508A] border-b-[#733D85]">
                    <div class="text-center">
                        <img src={Listen} alt="" class="ml-3" />
                        <p class="mt-5 font-semibold text-3xl">Listen</p>
                    </div>
                </div>

                {/* <!-- Box 3 --> */}
                <div class="flex items-center justify-center w-full mx-auto lg:w-[284px]  h-[261px] border rounded-xl border-l-[#E79E49] border-r-[#DC799A] border-t-[#D2508A] border-b-[#733D85]">
                    <div class="text-center">
                        <img src={Listen} alt="" class="ml-3" />
                        <p class="mt-5 font-semibold text-3xl">Listen</p>
                    </div>
                </div>
                {/* <!-- Box 4 --> */}
                <div class="flex items-center justify-center w-full mx-auto lg:w-[284px]  h-[261px] border rounded-xl border-l-[#E79E49] border-r-[#DC799A] border-t-[#D2508A] border-b-[#733D85]">
                    <div class="text-center">
                        <img src={Listen} alt="" class="ml-3" />
                        <p class="mt-5 font-semibold text-3xl">Listen</p>
                    </div>
                </div>
            </div>


            {/* image with text  */}


            <div className='lg:flex py-10 w-full lg:w-[1181px] lg:h-[505px] lg:mx-10'>
                {/* image  */}
                <div className='hidden lg:block'>
                    <img src={Cycle} alt="" />

                </div>
                {/* image text  */}
                <div className='relative lg:top-12 lg:right-11 w-full bg-white lg:w-[655px] lg:h-[382px]   '>
                    <div className='lg:mx-8 mx-7'>

                        <div className='w-full lg:w-[450px] lg:h-[33px] py-4'>
                            <h1 className='text-2xl font-semibold '>
                                How <span className='text-[#733D85]'>Your Vision</span> at <span className='text-[#733D85]'>Your Fingertips?</span>
                            </h1>
                        </div>

                        <div className='w-full lg:w-[630px] lg:h-[192px] lg:py-8'>
                            <p className='text-lg leading-8 text-[#00000080]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliqu terdum
                                hendrerit lacinia. Phasellus sodales tellus in erat interdum, vitae sollicit terdum
                                felis fermentum. Praesent eu elit ante. Donec consectetur mauris a terdum,
                                faucibus hendrerit. Phasellus eget hendrerit nunc. Aliquam efficitur ips terdum
                                quis metus mattis, non pellentesque leo pharetra. Pellentesque aliquet terdum
                                tincidunt lacus, sed dictum ex interdum ut.
                            </p>
                        </div>

                        <div className='flex justify-center lg:justify-start w-[140px] rounded-lg lg:w-[167px] h-[50px] lg:mt-14 mx-auto lg:mx-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>
                            <button className='mx-auto font-semibold text-lg'>
                                See Our Story
                            </button>
                        </div>


                    </div>
                </div>
            </div>

            {/* sevices  */}

            <div className='flex mt-12'>
                <h1 className='mx-auto font-semibold text-3xl text-[#733D85]'>Our Services</h1>
            </div>
            {/* boxs  */}
            <div className='mt-12 flex flex-wrap lg:w-[1178.71px] lg:h-[267px] mx-auto gap-2'>

                {/* box 1  */}
                <div className='lg:w-[382.71px] h-[267px] mx-auto lg:mx-0  rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>
                    <div className='lg:w-[287px] h-[194px] text-white mx-auto  w-[287px] mt-6'>
                        <div className='lg:w-[60px] h-[60px]'>
                            <img src={ServiceIcon} alt="" />
                        </div>
                        <div className='lg:w-[248px] h-[18px] mt-4'>
                            <h1 className='font-semibold text-2xl' >Business Applications</h1>
                        </div>

                        <div className='lg:w-[287px] h-[76px] mt-6'>
                            <p className=' font-normal text-base'>Lorem ipsum dolor sit amet, consec
                                tetur adipiscing elit. Aliquam con
                                vallis aliquam neque, eu sollicitudin
                                sollicitudin massa.</p>
                        </div>
                    </div>
                </div>
                {/* box 2  */}
                <div className='lg:w-[382.71px] h-[267px] mx-auto lg:mx-0  rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>
                    <div className='lg:w-[287px] h-[194px] text-white mx-auto w-[287px] mt-6'>
                        <div className='lg:w-[60px] h-[60px]'>
                            <img src={ServiceIcon} alt="" />
                        </div>
                        <div className='lg:w-[248px] h-[18px] mt-4'>
                            <h1 className='font-semibold text-2xl' >Business Applications</h1>
                        </div>

                        <div className='lg:w-[287px] h-[76px] mt-6'>
                            <p className=' font-normal text-base'>Lorem ipsum dolor sit amet, consec
                                tetur adipiscing elit. Aliquam con
                                vallis aliquam neque, eu sollicitudin
                                sollicitudin massa.</p>
                        </div>
                    </div>
                </div>

                {/* box 3  */}

                <div className='lg:w-[382.71px] h-[267px] mx-auto lg:mx-0  rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>
                    <div className='lg:w-[287px] h-[194px] text-white mx-auto w-[287px] mt-6'>
                        <div className='lg:w-[60px] h-[60px]'>
                            <img src={ServiceIcon} alt="" />
                        </div>
                        <div className='lg:w-[248px] h-[18px] mt-4'>
                            <h1 className='font-semibold text-2xl' >Business Applications</h1>
                        </div>

                        <div className='lg:w-[287px] h-[76px] mt-6'>
                            <p className=' font-normal text-base'>Lorem ipsum dolor sit amet, consec
                                tetur adipiscing elit. Aliquam con
                                vallis aliquam neque, eu sollicitudin
                                sollicitudin massa.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* technologies  */}
            <div className='flex mt-12'>
                <h1 className='mx-auto font-semibold text-3xl text-[#733D85]'>Technologies</h1>
            </div>
            {/* icons  */}
            <div className='mt-12 flex flex-wrap lg:w-[1180px] lg:h-[205px] mx-auto gap-3 '>

                {/* icons 1  */}
                <div className='w-[224px]  h-[205px] border-2 mx-auto lg:mx-0 '>
                    <div className='w-[93px] h-[94px] mx-auto mt-14'>
                        <img src={TechnologyIcon} alt="" />
                    </div>
                </div>
                <div className='w-[224px] h-[205px] border-2 mx-auto lg:mx-0 '>
                    <div className='w-[93px] h-[94px] mx-auto mt-14'>
                        <img src={TechnologyIcon} alt="" />
                    </div>
                </div>
                <div className='w-[224px] h-[205px] border-2 mx-auto lg:mx-0 '>
                    <div className='w-[93px] h-[94px] mx-auto mt-14'>
                        <img src={TechnologyIcon} alt="" />
                    </div>
                </div>
                <div className='w-[224px] h-[205px] border-2 mx-auto lg:mx-0 '>
                    <div className='w-[93px] h-[94px] mx-auto mt-14'>
                        <img src={TechnologyIcon} alt="" />
                    </div>
                </div>
                <div className='w-[224px] h-[205px] border-2 mx-auto lg:mx-0 '>
                    <div className='w-[93px] h-[94px] mx-auto mt-14'>
                        <img src={TechnologyIcon} alt="" />
                    </div>
                </div>


            </div>
            {/* pic  */}
            <div className='lg:w-full  lg:h-[350px] mt-7 '>
                <img src={Progress} alt="" />

            </div>

            {/* Contact us card  */}
            <div className='lg:flex'>
                <div className='lg:w-[366px] w-full relative lg:left-24 lg:top-20 lg:h-[420px]  text-white rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>

                    <div className='lg:w-[245px] lg:h-[301px] mx-auto py-16 '>
                        <div className='w-[148px] h-[35px]'>
                            <h1 className='font-semibold text-xl'>Contact Us</h1>

                        </div>

                        {/* list  */}
                        <div className='w-[245px] h-[206px] py-12'>
                            <div className='w-[209px] h-[42px] flex mb-4   '>
                                <div className='w-[45px] h-[45px] bg-white mx-auto rounded-lg '>
                                    <img src={Vector} alt="" className='mx-auto mt-3' />
                                </div>
                                <div className='w-[153px] h-[42px] text-sm px-2 '>
                                    <span>Our Address</span>
                                    <br />
                                    <span>Johar Town, Lahore</span>
                                </div>
                            </div>
                            <div className='w-[209px] h-[42px] flex mb-4  '>
                                <div className='w-[45px] h-[45px] bg-white mx-auto rounded-lg '>
                                    <img src={Vector} alt="" className='mx-auto mt-3' />
                                </div>
                                <div className='w-[153px] h-[42px] text-sm px-2 '>
                                    <span>Our Address</span>
                                    <br />
                                    <span>Johar Town, Lahore</span>
                                </div>
                            </div>
                            <div className='w-[209px] h-[42px] flex mb-4  '>
                                <div className='w-[45px] h-[45px] bg-white mx-auto rounded-lg '>
                                    <img src={Vector} alt="" className='mx-auto mt-3' />
                                </div>
                                <div className='w-[153px] h-[42px] text-sm px-2 '>
                                    <span>Our Address</span>
                                    <br />
                                    <span>Johar Town, Lahore</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                    {/* border  */}
                <div className='lg:w-[1021px] w-full lg:h-[577px] border-2 lg:mr-20  shadow-xl  '>
                    {/* form  */}
                    <div class="max-w-md mx-auto  lg:h-[440px]  top-20   bg-white py-20 rounded  w-full">

                        {/* <!-- Heading --> */}
                        <div className='mb-4'>
                            <h1 class="text-2xl font-semibold mb-2 text-[#733D85]">Get in Touch</h1>
                            <p className='text-sm text-[#00000080]'>Feel free to drop us a line below</p>
                        </div>
                        {/* <!-- Form --> */}
                        <form action="#" method="post">

                            {/* <!-- Name Field --> */}
                            <div class="mb-4">
                                <input type="text" id="name" name="name" placeholder='Full name' class="lg:w-[630px] w-full h-[60px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                            </div>

                            {/* <!-- Email Field --> */}
                            <div class="mb-4">
                                <input type="email" id="email" name="email" placeholder='Email Address' class="lg:w-[630px] w-full h-[60px]  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]" />
                            </div>

                            {/* <!-- Comment Field --> */}
                            <div class="mb-6">
                                <textarea id="comment" name="comment" rows="4" placeholder='Typing your message here' class="lg:w-[630px] w-full h-[114px]  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-[#D9D9D92E]"></textarea>
                            </div>

                            {/* <!-- Submit Button --> */}
                            <div class="  items-center justify-center">
                                <button type="submit" class="bg-blue-500 w-[140px] h-[50px] text-xl text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
                                    Send
                                </button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default LifeCycle
