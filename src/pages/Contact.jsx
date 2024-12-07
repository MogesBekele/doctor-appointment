import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-6 justify-center items-start'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>Addis Ababa <br /> addis ababa ethiopia</p>
          <p className='text-gray-500'>Tel +251-964671617 <br /> mogesbekele32@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>careers at hospitality</p>
          <p className='text-gray-500'>Learn more about our terms and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:border-none'>Explore More</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
