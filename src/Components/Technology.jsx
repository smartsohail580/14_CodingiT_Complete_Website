import React from 'react'
import TechnologyIcon from '../../src/assets/svg/TechnologyIcon.svg'

function Technology() {
  return (
    <div>
        <div>
        <h1 className='text-4xl text-center text-[#733D85] font-semibold'>Technologies</h1>
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
      
    </div>
  )
}

export default Technology
