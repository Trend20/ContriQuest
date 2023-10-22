import React from 'react'
import Image from 'next/image'
import activeImg from '../../public/assets/images/active.jpeg'

const StayActive = () => {
  return (
    <div className='flex justify-between items-center mt-52'>
      <div className="flex px-16 flex-col w-1/2">
        <h3 className='flex text-4xl font-black tracking-tight text-gray-900'>Stay active in the industry</h3>
        <p className='prose prose-user mt-6 text-xl text-gray-500 leading-8 w-3/4'>By participating in projects and staying active on ContriQuest, you can demonstrate your dedication and passion for coding. This helps you stay relevant in the ever-evolving tech industry.</p>
      </div>
      <div className="flex max-w-3xl mr-28">
        <Image src={activeImg} alt='impact image' className='rounded-lg'/>
      </div>
    </div>
  )
}

export default StayActive;