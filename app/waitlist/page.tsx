import React from 'react'

const WaitList = () => {
  return (
    <div className='flex items-center flex-col justify-center m-auto w-1/2 px-10 py-10 mt-28'>
      <h5 className='text-5xl font-black tracking-tight text-gray-900 w-3/4 text-center'>Rank Developers Based on Project Impact and Activity.</h5>
      <p className='prose prose-user mt-6 text-xl text-gray-500 leading-8 w-1/2 text-center'>Join ContriQuest and see where you stand among the top developers in the industry.</p>

      <div className="flex flex-col items-center mt-32 w-full">
        <h3 className='font-bold text-xl'>Join the waitlist</h3>
        <p className='mt-3'>Enter your email to get early access to ContriQuest.</p>
        <form className='flex items-center mt-10 w-full justify-center'>
          <input type="text" placeholder='Your email address' className='border border-1 border-gray rounded-md p-2 w-1/2'/>
          <button type='submit' className='flex justify-center items-center ml-5 bg-yellow-800 p-2 rounded-md text-white font-bold w-32'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default WaitList;