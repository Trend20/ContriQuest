import Image from 'next/image'
import React from 'react'
import impactImg from '../../public/assets/images/impact.jpeg'

const MeasureImpact = () => {
  return (
    <div className='flex justify-between items-center mt-52'>
      <div className="flex max-w-4xl">
        <Image src={impactImg} alt='impact image' className='rounded-r-lg'/>
      </div>
      <div className="flex flex-col w-1/2">
        <h3 className='flex text-4xl font-black tracking-tight text-gray-900'>Measure your impact</h3>
        <p className='prose prose-user mt-6 text-2xl text-gray-500 leading-8 w-3/4'>ContriQuest allows you to measure the impact of your projects. Gain recognition for your hard work and showcase your skills to potential employers.</p>
      </div>
    </div>
  )
}

export default MeasureImpact