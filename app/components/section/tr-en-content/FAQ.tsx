"use client"

import * as React from 'react'
import AddIcon from '@mui/icons-material/Add'
import fqaData from '../../../data/FAQ'
import { useState } from 'react'
import UserGetStartedInput from './UserGetStartedInput'

export default function FQA() {

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div  className='py-20 px-8 border-t-8 justify-center items-center flex flex-col bg-black w-full'>
      <h1 className='text-lg sm:text-2xl lg:text-5xl font-extrabold mb-7'>Frequently Asked Questions</h1>
      {fqaData.map((data,index) => (
        <div key={data.id} className='flex flex-col justify-center items-center w-full'>
          <div
            onClick={() => toggleAccordion(index)}
            className={`
              ${openIndex !== index ? "w-full" : "w-full"} max-w-[1170px]
              flex justify-between items-center bg-[#2D2D2D] text-white mb-[2px]  px-6 py-4 hover:brightness-150 cursor-pointer
            `}
          >
            <h2 className={`${openIndex !== index ? "" : "w-full"} text-lg lg:text-2xl font-thin`}>
              {data.title}
            </h2>
            <span>
              {openIndex === index 
                ? <AddIcon className='rotate-45 lg:text-5xl text-base font-extralight transition-all ease-linear'/> 
                : <AddIcon className='lg:text-5xl text-xl transition-all ease-linear'/>
              }
            </span>
          </div>
          {openIndex === index && (
            <div 
              className={`bg-[#2D2D2D] text-white text-lg lg:text-2xl mb-2 px-6 py-6 transition-all transition-effect`}
            >
              <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
          )}
        </div>
      ))}

      <div className='mt-12 justify-center flex flex-col'>
        <h2 className='text-base lg:text-xl text-center mx-6'>Ready to watch? Enter your email to create or restart your membership.</h2>
        <UserGetStartedInput/>
      </div>
    </div>    
  )
}