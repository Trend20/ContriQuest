import { stepsData } from '@/data/app_data';
import React from 'react'
import { BsShareFill} from 'react-icons/bs'

const Process = () => {
  return (
    <div className='flex w-full justify-center items-center h-auto pt-64 flex-col'>
      <h3>How to get started on <span className='text-green-400'>ContriQuest</span></h3>
      {/* steps */}
      <div className="grid grid-cols-4 gap-x-5 mt-8 w-auto">
        {
          stepsData.map((step, index) =>(
            <div key={index} className='bg-green-500 flex items-center justify-center flex-col p-5 w-72 rounded-tl-lg border-blue border-2'>
              <i><BsShareFill size={30} fill='#000'/></i>
              <h3 className='mt-2 font-bold'>{step.stepName}</h3>
              <p className='mt-1 text-center'>{step.stepDescription}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Process;