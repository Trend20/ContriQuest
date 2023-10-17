'use client'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center pt-100 h-full'>
      <h1 className='text-xl'>Welcome to ContriQuest</h1>
      <p className='text-3xl'>Your Hub for Developer Projects and Achievements</p>
      <div className="cta-buttons flex justify-between w-auto">
          <button className="cta-primary bg-green-500 p-3 mt-5 rounded-br-lg">Explore Projects</button>
          <button className="cta-secondary p-3 mt-5 border-spacing-1 rounded-tl-lg border-2 border-white ml-4">Create Your Profile</button>
        </div>
    </div>
  )
}

export default Hero;