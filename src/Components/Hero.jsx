import React from 'react'
import HeroImage from '../../src/assets/images/Hero.svg'
function Hero() {
    return (
        <div className=''>
            {/* Hidden on small screens, visible on large screens */}
            <div className='hidden lg:flex  lg:absolute w-full '>
                <img src={HeroImage} alt="" className='object-cover w-full h-full' />
            </div>

            {/* Content div */}
            <div className='lg:relative lg:w-[644px] lg:top-24 lg:left-20  lg:text-white text-black py-5 lg:py-0 mx-4   '>
                <div className='  lg:w-[442px] h-[132px]  '>
                    <h1 className='lg:text-4xl text-2xl font-[roboto] font-semibold'>Lorem ipsum dolor sit consectetur adip iscing elit.</h1>
                </div>
                <div className=' lg:w-[600px] h-[42px]  '>
                    <p className='leading-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et lorem non odio placerat feugiat quis id metus.</p>
                </div>

                <div className='lg:w-[140px] w-32 h-[50px] border mt-12 flex rounded-md mx-auto lg:mx-0  '>
                    <button className='mx-auto font-semibold text-lg'>Get Quote</button>
                </div>
            </div>
        </div>



       

    )
}

export default Hero
