import React from 'react'
import pic1 from '../../src/assets/images/Company1.svg'
import pic2 from '../../src/assets/images/Company2.svg'
import pic3 from '../../src/assets/images/Company3.svg'
import Progress from '../../src/assets/images/Progress.svg'

function Company() {
    return (
        <div className=''>
            <div className='hidden lg:flex h-[350px]'>
                <img src={pic1} alt="" />
            </div>
            <div className='hidden lg:flex relative bottom-48 text-white  h-[83px]'>
                <div className='mx-auto'>
                    <h1 className='text-4xl font-semibold'>Our Company</h1>
                    <h4 className='text-center'>Home/Our Company</h4>
                </div>
            </div>

            <div className='lg:flex py-10 w-full lg:w-[1181px] lg:h-[505px] lg:mx-10'>
                {/* image  */}
                <div className='hidden lg:block'>
                    <img src={pic2} alt="" />

                </div>
                {/* image text  */}
                <div className='relative lg:top-12 lg:right-11 w-full bg-white lg:w-[655px] lg:h-[320px]   '>
                    <div className='lg:mx-8 mx-7'>

                        <div className='w-full lg:w-[450px] lg:h-[33px] py-4'>
                            <h1 className='text-2xl font-semibold '>
                                <span className='text-[#733D85]'>About Our Company</span>
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

                        {/* <div className='flex justify-center lg:justify-start w-[140px] rounded-lg lg:w-[167px] h-[50px] lg:mt-14 mx-auto lg:mx-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>
                            <button className='mx-auto font-semibold text-lg'>
                                See Our Story
                            </button>
                        </div> */}


                    </div>
                </div>
            </div>

            <div className='lg:w-full  lg:h-[350px] mt-7 '>
                <img src={Progress} alt="" />

            </div>

            <div className='lg:flex py-10 w-full lg:w-[1181px] lg:h-[505px] lg:mx-10'>
                {/* image text  */}
                <div className='relative lg:top-12 lg:left-11 w-full bg-white lg:w-[655px] lg:h-[320px]'>
                    <div className='lg:mx-8 mx-7'>

                        <div className='w-full lg:w-[450px] lg:h-[33px] py-4'>
                            <h1 className='text-2xl font-semibold'>
                                <span className='text-[#733D85]'>About Our Company</span>
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


                    </div>
                </div>

                {/* image  */}
                <div className='hidden lg:block lg:w-[526px]'>
                    <img src={pic3} alt="" className='w-full h-full object-cover' />
                </div>
            </div>


        </div>
    )
}

export default Company
