import React from 'react'
import Codingit from '../../src/assets/svg/Codingit.svg'
function Footer() {
    return (
        <div className="bg-[#DC799A1A] lg:h-[369px] w-full  text-black p-6">
            <div className="lg:mx-20 mx-5 lg:flex lg:justify-between items-center">
                {/* <!-- 1st Column - Logo and Paragraph --> */}
                <div className=''>
                    <div className=" items-center lg:w-[178px] lg:h-[43px] py-4 ">
                       <a href= "/"><img src={Codingit} alt="" /></a> 
                    </div>
                    <div className='lg:w-[272px] lg:h-[128px] py-10  text-sm '>
                        <p className="">Lorem ipsum dolor sit amet, cons
                            enim quis purus hendrerit dignil
                            um ultrices ut metus molestie.</p>

                        <p>Lorem ipsum dolor sit amet, cons
                            enim quis purus hendrerit dignil
                            um ultrices ut metus molestie.</p>
                    </div>
                </div>

                {/* <!-- 2nd Column - Heading and Links --> */}
                <div className='flex flex-col  '>

                    <div>
                        <h4 className="text-2xl text-[#733D85] font-semibold">Quick Links</h4>
                    </div>
                    <div className='lg:w-[107px] lg:h-[112px] text-lg py-8'>
                        <a href="/" className="text-gray-400 hover:text-black block ">Home</a>
                        <a href="technology" className="text-gray-400 hover:text-black block">Technologies</a>
                        <a href="company" className="text-gray-400 hover:text-black block">Company</a>
                        <a href="contact" className="text-gray-400 hover:text-black block">Contact Us</a>
                    </div>

                </div>
                {/* <!-- 3rd Column - Heading and Links --> */}
                <div className='flex flex-col'>

                    <div>
                        <h4 className="text-2xl text-[#733D85] font-semibold ">Services</h4>
                    </div>
                    <div className='w-[207px] h-[112px] text-lg py-8'>
                        <a href="business" className="text-gray-400 hover:text-black block ">Business Applications</a>
                        <a href="integrations" className="text-gray-400 hover:text-black block">Integrations</a>
                        <a href="scripting" className="text-gray-400 hover:text-black block">Scripting</a>
                    </div>

                </div>

                {/* <!-- 4th Column - Heading and Links --> */}
                <div className='flex flex-col py-12 lg:py-0'>

                    <div>
                        <h4 className="text-2xl text-[#733D85] font-semibold ">Contact Us</h4>
                    </div>
                    <div className='w-[207px] h-[112px] text-lg py-8'>
                        <a href="#" className="text-gray-400 hover:text-black block ">Lorem ipsum </a>
                        <a href="#" className="text-gray-400 hover:text-black block">abc@gmail.com</a>
                        <a href="#" className="text-gray-400 hover:text-black block">+923076589234</a>
                    </div>

                </div>
            </div>
            <div className='py-16 mx-20 text-[#808080]'><hr /></div>
            <div className='text-[#808080] mx-auto text-center relative bottom-12'>© 2023 CodingIT</div>
        </div >
    )
}

export default Footer
