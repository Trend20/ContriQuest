import Link from 'next/link';
import React from 'react'

const Join = () => {
  return (
    <div className='flex flex-col justify-center items-center rounded border border-black w-3/4 m-auto mt-40 mb-10 p-32'>
      <h1 className='flex text-4xl font-black tracking-tight text-gray-900'>Join the top developers.</h1>
      <p className='mt-5 text-center text-xl w-3/4 leading-8'>
          Joining ContriQuest was a game-changer for my career. It helped me land my dream job and opened up new opportunities for professional growth. - Quentin Wilson
      </p>
      <Link href='/' className='rounded w-32 bg-amber-700 font-bold flex justify-center items-center p-3 text-white mt-6 hover:bg-amber-800'>Join now</Link>
    </div>
  )
}

export default Join;