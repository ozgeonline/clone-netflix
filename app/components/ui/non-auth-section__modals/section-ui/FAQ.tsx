"use client"

import * as React from 'react'
import { useState } from 'react'
import { ChevronRight, Plus } from 'lucide-react'
import fqaData from '@/app/data/FAQ'
import dynamic from 'next/dynamic'

const EmailLoginInputModal = dynamic(() => import("@/app/components/ui/non-auth-section__modals/login-ui-controls/EmailLoginInputModal"));

export default function FQA() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div
      className='flex flex-col justify-center items-center py-20 px-8 border-t-8 bg-black'
    >
      <h1 className='text-lg sm:text-2xl lg:text-5xl font-extrabold mb-7'>
        Frequently Asked Questions
      </h1>
      {fqaData.map((data,index) => (
        <div 
          key={data.id}
          className='flex flex-col justify-center items-center w-full'
        >
          <div
            onClick={() => toggleAccordion(index)}
            className="
              flex justify-between items-center
              w-full max-w-[1170px] bg-[#2D2D2D] text-white mb-[2px] px-6 py-4 hover:brightness-150 cursor-pointer"
          >
            <div className="text-lg lg:text-2xl font-thin">
              {data.title}
            </div>
            <div>
              {openIndex === index 
                ? <Plus className='rotate-45 lg:text-5xl text-base font-extralight transition-all ease-linear'/> 
                : <Plus className='lg:text-5xl text-xl transition-all ease-linear'/>
              }
            </div>
          </div>
          {openIndex === index && (
            <div 
              className="bg-[#2D2D2D] text-white text-lg lg:text-2xl mb-2 p-6  w-full max-w-[1170px] transition-all transition-effect"
            >
              <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
          )}
        </div>
      ))}

      <div className='flex flex-col justify-center mt-12'>
        <div className='lg:text-xl text-center mx-6 mb-2'>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <form 
          method="post" 
          action="/api/auth/signin" 
          className="
            flex flex-col sm:flex-row items-center justify-center 
            ssm:space-x-2 max-sm:space-y-2 w-full border-inputInfo-succ_color"
        >
          <EmailLoginInputModal
            inputWrapper="flex flex-col max-sm:w-full relative"
            inputStyle="bg-[#141414] sm:w-[370px] h-[48px] sm:h-[56px] flex"
            errorMsgColor="text-inputInfo-err_color"
            valueAndValidateTrueColor="border-2 border-inputInfo-succ_color"
            valueAndValidateFalseColor="border-2 border-inputInfo-err_color"
          />
          <button 
            type="submit"
            className="
              z-10 flex items-center justify-center rounded-sm text-lg sm:text-2xl bg-[#e50914] 
              hover:brightness-90 w-40 sm:w-[13rem] h-12 sm:h-14"
          >
            Get Started <ChevronRight className="ml-2 max-sm:p-1" size="32px"/>
          </button>
        </form>
      </div>
    </div>    
  )
}