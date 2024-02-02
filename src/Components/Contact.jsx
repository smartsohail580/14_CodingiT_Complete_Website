import React from 'react'
import pic1 from '../../src/assets/images/Company1.svg'
import icon from '../../src/assets/svg/call.svg'
import imgin from '../../src/assets/svg/in.svg'


function Contact() {


  return (
    <div>
      <div className='hidden lg:flex lg:h-[350px]'>
        <img src={pic1} alt="" />
      </div>
      <div className=' flex lg:relative lg:bottom-48 lg:text-white text-black  h-[83px]'>
        <div className='mx-auto'>
          <h1 className='text-4xl font-semibold'>Contact us</h1>
          <h4 className='text-center'>Home/Our Company</h4>
        </div>
      </div>

      <div className='flex flex-wrap   gap-4 justify-center'>
        <div className='w-[384px] h-[158px] bg-l-[#E79E49] rounded-lg text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>
          <div className='flex w-[270px] h-[89px] items-center justify-center mt-8 ml-10'>
            <div className=' w-[87px] h-[89px] bg-white flex items-center justify-center rounded-lg'>
              <img src={icon} alt="" className='w-[37px] h-[37px] ' />
            </div>
            <div className='ml-4 w-[168px] h-[55px]'>
              <h1 className='text-3xl'>Our Phone</h1>
              <h4 className='text-lg'>+923456765789</h4>

            </div>

          </div>
        </div>

        <div className='w-[384px] h-[158px] bg-l-[#E79E49] rounded-lg text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>
          <div className='flex w-[270px] h-[89px] items-center justify-center mt-8 ml-10'>
            <div className=' w-[87px] h-[89px] bg-white flex items-center justify-center rounded-lg'>
              <img src={icon} alt="" className='w-[37px] h-[37px] ' />
            </div>
            <div className='ml-4 w-[168px] h-[55px]'>
              <h1 className='text-3xl'>Our Phone</h1>
              <h4 className='text-lg'>+923456765789</h4>

            </div>

          </div>
        </div>

        <div className='w-[384px] h-[158px] bg-l-[#E79E49] rounded-lg text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800'>
          <div className='flex w-[270px] h-[89px] items-center justify-center mt-8 ml-10'>
            <div className=' w-[87px] h-[89px] bg-white flex items-center justify-center rounded-lg'>
              <img src={icon} alt="" className='w-[37px] h-[37px] ' />
            </div>
            <div className='ml-4 w-[168px] h-[55px]'>
              <h1 className='text-3xl'>Our Phone</h1>
              <h4 className='text-lg'>+923456765789</h4>

            </div>

          </div>
        </div>

      </div>
      {/* 2 colummn  */}
      <div className='lg:flex  lg:gap-32 lg:ml-16 py-12'>
        <div className='mx-6 lg:mx-0'>
          <div className='flex text-[#00000080]'><span>Get in Touch</span>
            <hr className='border-2 w-[84px] ml-8 border-black mt-3' />
          </div>
          <div className='mt-3'>
            <h1 className='text-[#733D85] text-3xl'>Write Us a Message</h1>
            <div className='lg:w-[459px] text-[#00000080]'>
              <p>The quick, brown fox jumps over a lazy dog brown over a.
                DJs flock by when MTV ax quiz prog. Junk raced by fox
                MTV quiz graced by fox whelps Bawds jog, brown fox jum
                whelps Bawds jog.</p>
            </div>
            <div className='w-[25px] h-[25px] mt-8'>
              <img src={imgin} alt="" />
            </div>
          </div>
        </div>


        {/* form   */}
                 <div class="  lg:h-[440px] bg-white py-6 lg:py-0   rounded  mx-6 lg:mx-0">

          {/* <!-- Heading --> */}

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

      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13608.551290855923!2d74.4176001!3d31.4928953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905fce8485861%3A0x8da1388336e3a45!2sDevsinc!5e0!3m2!1sen!2s!4v1703265509536!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>



    </div>
  )
}

export default Contact
