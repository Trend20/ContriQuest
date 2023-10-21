import Image from 'next/image';
import React from 'react'
import testImg from '../../public/assets/images/test.png'

const Testimonials = () => {
  return (
    <div className='flex bg-yellow-800 flex-col justify-center items-center py-32 h-84 mt-48'>
      <p className='text-white text-center text-4xl w-1/2 font-bold'>I love the competitive aspect of DevRanker. It motivates me to continuously improve my coding skills and stay active in the industry.</p>
      <span className='flex space-x-6 w-40 items-center mt-5'>
        <Image src={testImg} alt='test-image' className="h-10 w-10 rounded-full border border-white p-1"/>
        <p className='font-bold text-white'>Bob Sam</p>
      </span>
    </div>
  )
}

export default Testimonials;