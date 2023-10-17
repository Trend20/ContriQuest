'use client'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center max-h-80 justify-center pt-72'>
      <h1 className='text-5xl'>Welcome to <span className='text-green-400'>ContriQuest</span></h1>
      <p className='text-lg'>Your Hub for Developer Projects and Achievements.</p>
      <div className="flex justify-between w-auto">
          <button className="bg-green-500 p-3 mt-5 rounded-br-lg hover:bg-transparent border-white border-2">Explore Projects</button>
          <button className="p-3 mt-5 border-spacing-1 rounded-tl-lg border-2 border-white ml-4 hover:bg-green-500 rounded-br-lg">Create Your Profile</button>
        </div>
    </div>
  )
}

export default Hero;