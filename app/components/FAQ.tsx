"use client"

import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import fqaData from '../data/FAQ'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function FQA() {

  const [expanded, setExpanded] = useState(null)
  const handleChange = (data: any) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? data : false)
  }

  return (
    <div  className='py-20 px-8 border-t-8 justify-center items-center flex flex-col'>
      <h1 className='text-5xl font-extrabold mb-7'>Frequently Asked Questions</h1>
      {fqaData.map((data) => (
        <Accordion
          key={data.id}
          expanded={expanded === data.id}
          onChange={handleChange(data.id)}
          sx={{
            backgroundColor:"#2D2D2D",
            color: "#fff",
            marginBottom: "7px",
            borderRadius: "0px !important",
            maxWidth: "1170px",
            }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{color:"#fff"}} className='w-8 h-8 sm:w-12 sm:h-12'/>}
            aria-controls={`${data.id}-content`}
            id={`${data.id}-header`}
            sx={{
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(45deg) !important"
              },
              paddingX: "24px",
              paddingY: "10px",
              borderBottom: "2px solid black",
              ":hover":{backgroundColor: "#414141"},
            }}
          >
            <Typography className='text-md sm:text-xl'>
              {data.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{paddingX: "24px", paddingY: "18px"}}>
            <Typography component={'span'} dangerouslySetInnerHTML={{ __html: data.content }} className='text-md sm:text-xl' />
          </AccordionDetails>
        </Accordion>
      ))}
      <div className='mt-12 items-center justify-center flex flex-col'>
        <h3 className='text-xl text-center'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form method="post" action="/api/auth/signin" className="flex sm:flex-row flex-col items-center justify-center mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="sm:py-4 sm:px-4 w-[275px] py-3 px-3 rounded-sm bg-neutral-900/70 border border-white/25 mr-2"
          />
          <button
            type="submit"
            className="flex pt-2 px-3 sm:py-3 sm:pr-4 sm:pl-6 w-[160px] h-[48px] sm:w-[205px] sm:h-[56px] text-lg mt-3 sm:mt-0 sm:text-2xl rounded-sm bg-[#e50914] border border-[#e50914]  hover:opacity-90">
              Get Started <ChevronRight className="ml-2" size="32px"/>
          </button>
        </form>
      </div>
      
    </div>



  
      
  )
}