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
            expandIcon={<AddIcon sx={{color:"#fff", width:"44px", height:"44px"}}/>}
            aria-controls={`${data.id}-content`}
            id={`${data.id}-header`}
            sx={{
              "& .css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(45deg)"
              },
              "& .css-1vm75m7-MuiButtonBase-root-MuiAccordionSummary-root .css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(45deg)"
              },
              paddingX: "24px",
              paddingY: "10px",
              borderBottom: "2px solid black",
              ":hover":{backgroundColor: "#414141"},
            }}
          >
            <Typography sx={{fontSize:"23px",}}>
              {data.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{paddingX: "24px", paddingY: "18px"}}>
          <Typography sx={{fontSize:"23px", }}>
            {data.content}
          </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <div className='mt-12 items-center justify-center flex flex-col'>
        <h3 className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form method="post" action="/api/auth/signin" className="flex justify-center mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="py-4 px-4 w-[375px] rounded-sm bg-neutral-900/70 border border-white/25 mr-2"
          />
          <button
            type="submit"
            className="flex py-3 pr-4 pl-6 w-[205px] rounded-sm bg-[#e50914] border border-[#e50914] text-2xl hover:opacity-90">
              Get Started <ChevronRight className="ml-2" size="32px"/>
          </button>
        </form>
      </div>
      
    </div>



  
      
  )
}