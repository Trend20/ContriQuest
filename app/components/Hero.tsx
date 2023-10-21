'use client'
import React from 'react'
import Image from 'next/image';
import heroImg from '../../public/assets/images/hero.jpeg'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='w-full flex pt-40 justify-between'>
        <div className="flex flex-col mt-6 px-16 w-1/2">
          <h1 className='text-7xl font-black tracking-tight text-gray-900'>Rank Developers Based on Project Impact and Activity of their projects.</h1>
          <p className='prose prose-user mt-6 text-2xl text-gray-500 leading-8 w-3/4'>Join ContriQuest and see where you stand among the top developers in the industry.</p>
          <Link href='/' className='rounded w-32 bg-amber-700 font-bold flex justify-center items-center p-3 text-white mt-6 hover:bg-amber-800'>Join now</Link>
        </div>
        <div className="flex max-w-2xl">
          <Image src={heroImg} alt='hero_img' className='rounded-l-lg'/>
        </div>
    </div>
  )
}

export default Hero;