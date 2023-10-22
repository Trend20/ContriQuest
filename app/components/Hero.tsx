'use client'
import React from 'react'
import Image from 'next/image';
import heroImg from '../../public/assets/images/hero.jpeg'
import testImg from '../../public/assets/images/test.png'
import Link from 'next/link';
import { AiFillStar} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full flex pt-40 justify-between'>
        <div className="flex flex-col mt-6 px-16 w-1/2">
          <h1 className='text-7xl font-black tracking-tight text-gray-900'>Rank Developers Based on Project Impact and Activity.</h1>
          <p className='prose prose-user mt-6 text-2xl text-gray-500 leading-8 w-3/4'>Join ContriQuest and see where you stand among the top developers in the industry.</p>
          <Link href='/' className='rounded w-32 bg-amber-700 font-bold flex justify-center items-center p-3 text-white mt-6 hover:bg-amber-800'>Join now</Link>
          <div className="flex space-x-6 mt-5 divide-x-2 divide-gray-300 items-center">
            <p className='flex'>
             <AiFillStar fill='#EAB308'/>
             <AiFillStar fill='#EAB308'/>
             <AiFillStar fill='#EAB308'/>
             <AiFillStar fill='#EAB308'/>
             <AiFillStar fill='#EAB308'/>
            </p>
            <p className='flex pl-3'>Transparent rankings</p>
            <p className='flex pl-3'>Showcase your skills</p>
          </div>
          <span className='flex space-x-6items-center mt-5'>
            <Image src={testImg} alt='test-image' className="h-10 w-10 rounded-full border p-1 border-yellow-700"/>
            <p className=' text-black ml-5 w-3/4'>
              ContriQuest has helped me gain visibility and recognition in the developer community. It's a great platform to showcase my skills and connect with other talented developers.
            </p>
          </span>
        </div>
        <div className="flex max-w-4xl">
          <Image src={heroImg} alt='hero_img' className='rounded-l-lg'/>
        </div>
    </div>
  )
}

export default Hero;