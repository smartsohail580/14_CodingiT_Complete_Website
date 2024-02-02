import React from 'react'
import pic1 from '../../../src/assets/images/Company1.svg'
import pic3 from '../../../src/assets/images/Company3.svg'
import TechnologyIcon from '../../assets/svg/TechnologyIcon.svg'
import ServiceIcon from '../../assets/svg/ServiceIcon.svg'
function Scripting() {
  return (
    <div>
            <div className='hidden lg:flex h-[350px]'>
                <img src={pic1} alt="" />
            </div>
            <div className='hidden lg:flex relative bottom-48 text-white  h-[83px]'>
                <div className='mx-auto'>
                    <h1 className='text-4xl font-semibold'>Scripting</h1>
                    <h4 className='text-center'>Home/Scripting</h4>
                </div>
            </div>

            <div className='lg:flex py-10 w-full lg:w-[1181px] lg:h-[505px] lg:mx-10'>
                {/* image text  */}
                <div className='relative lg:top-12 lg:left-11 w-full bg-white lg:w-[655px] lg:h-[320px]'>
                    <div className='lg:mx-8 mx-7'>

                        <div className=' lg:w-[450px] lg:h-[33px] py-4'>
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

            <div className='lg:h-[675px] w-full mt-12 bg-[#E79E4933]'>
                <div className='w-full h-[41px] mx-auto py-4'>
                    <h1 className='lg:text-3xl text-lg text-[#733D85] font-semibold text-center'>Our Application Development Cycle</h1>
                </div>

                {/* boxes  */}
                <div className=''>
                    <div className='lg:w-[1180px] lg:h-[250px] flex flex-wrap lg:gap-14 mx-auto lg:py-12 '>
                        {/* box 1  */}
                        <div className='lg:w-[561px] h-[235px]  '>
                            <div className='lg:w-[287px] h-[194px]  '>
                                <div className='lg:w-[60px] h-[60px]'>
                                    <img src={ServiceIcon} alt="" />
                                </div>
                                <div className='lg:w-[298px] h-[18px] mt-4'>
                                    <h1 className='font-semibold text-2xl text-[#733D85]' >Requirement Identification</h1>
                                </div>

                                <div className='lg:w-[561px] h-[76px] mt-6'>
                                    <p className=' font-normal text-base text-[#00000080]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipi
                                        hendrerit lacinia. Phasellus sodales tellus in erat interdum, vitae adipi
                                        felis fermentum. Praesent eu elit ante.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* box 2 */}
                        <div className='lg:w-[561px]  h-[235px] py-5 lg:py-0 '>
                            <div className='lg:w-[287px] h-[194px]   '>
                                <div className='lg:w-[60px] h-[60px]'>
                                    <img src={ServiceIcon} alt="" />
                                </div>
                                <div className='lg:w-[298px] h-[18px] mt-4'>
                                    <h1 className='font-semibold text-2xl text-[#733D85]' >Requirement Identification</h1>
                                </div>

                                <div className='lg:w-[561px] h-[76px] mt-6'>
                                    <p className=' font-normal text-base text-[#00000080]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipi
                                        hendrerit lacinia. Phasellus sodales tellus in erat interdum, vitae adipi
                                        felis fermentum. Praesent eu elit ante.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[1180px] lg:h-[250px] flex flex-wrap gap-14 mx-auto lg:py-14'>

                        {/* box 3  */}
                        <div className='lg:w-[561px] h-[235px] '>
                            <div className='lg:w-[287px] h-[194px]    '>
                                <div className='lg:w-[60px] h-[60px]'>
                                    <img src={ServiceIcon} alt="" />
                                </div>
                                <div className='lg:w-[298px] h-[18px] mt-4'>
                                    <h1 className='font-semibold text-2xl text-[#733D85]' >Requirement Identification</h1>
                                </div>

                                <div className='lg:w-[561px] h-[76px] mt-6'>
                                    <p className=' font-normal text-base text-[#00000080]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipi
                                        hendrerit lacinia. Phasellus sodales tellus in erat interdum, vitae adipi
                                        felis fermentum. Praesent eu elit ante.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* box 4  */}
                        <div className='lg:w-[561px] h-[270px] py-5 lg:py-0 '>
                            <div className='lg:w-[287px] h-[194px]  '>
                                <div className='lg:w-[60px] h-[60px]'>
                                    <img src={ServiceIcon} alt="" />
                                </div>
                                <div className='lg:w-[298px] h-[18px] mt-4'>
                                    <h1 className='font-semibold text-2xl text-[#733D85]' >Requirement Identification</h1>
                                </div>

                                <div className='lg:w-[561px] h-[76px] mt-6'>
                                    <p className=' font-normal text-base text-[#00000080]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipi
                                        hendrerit lacinia. Phasellus sodales tellus in erat interdum, vitae adipi
                                        felis fermentum. Praesent eu elit ante.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='flex flex-wrap lg:gap-20 lg:ml-32 py-8'>
                <div className='lg:w-[490px] h-[177px]'>
                    <h1 className='lg:text-5xl text-2xl font-semibold text-[#733D85]   lg:leading-[58.59px]'> Schedule your free 30
                        minutes call with one
                        of our experts today.</h1>
                </div>
                <div>
                    <div className='lg:w-[625px] h-[64px]'>
                        <p className='text-[23px] leading-[32px] text-[#00000080]'>We value long-term business relationships, and
                            we’re guessing you do too.</p>

                    </div>
                    <div className='py-12'>
                        <div class="flex  w-[133px] h-[50px] mx-auto lg:mx-0   items-center justify-center bg-[#E79E49] rounded-md ">
                            <button type="submit" class="text-xl text-white">
                                Let’s Talk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Scripting
