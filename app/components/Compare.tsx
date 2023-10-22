import React from 'react'
import compareImg from '../../public/assets/images/compare.jpeg'
import Image from 'next/image'

const Compare = () => {
  return (
    <div className='flex justify-between items-center mt-52 px-16'>
      <div className="flex max-w-3xl">
        <Image src={compareImg} alt='impact image' className='rounded-lg'/>
      </div>
      <div className="flex flex-col w-1/2">
        <h3 className='flex text-4xl font-black tracking-tight text-gray-900'>Compare yourself to top developers.</h3>
        <p className='prose prose-user mt-6 text-xl text-gray-500 leading-8 w-3/4'>See how you stack up against the best developers in the industry. ContriQuest provides a transparent ranking system that allows you to benchmark your skills and track your progress over time.</p>
      </div>
    </div>
  )
}

export default Compare;