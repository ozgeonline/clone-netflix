"use client"

import { ChevronRight } from "lucide-react"
import { useState } from "react"

export default function UserGetStartedInput() {
  
  const [inputValue, setInputValue] = useState<string>("")
  const [isTouched, setIsTouched] = useState<boolean>(false)
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  }
  const handleInputBlur = () => {
    setIsTouched(true)
  }

  const validateEmail = (email: string): boolean => {
    //for email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

    return (
      <form 
        method="post" 
        action="/api/auth/signin" 
        className="flex flex-col sm:flex-row items-center justify-center mt-4 w-full"
      >
        <div className="sm:min-w-[370px] relative">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
            value={inputValue}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            className={`
              input-field bg-[#141414] opacity-80 text-white rounded-sm w-full max-w-[370px] px-6 h-[48px] sm:h-[56px]
              ${(inputValue && validateEmail(inputValue)) 
                ? "border-2 border-[#2bb871]" 
                : (!inputValue || !validateEmail(inputValue)) && isTouched 
                ? "border-2 border-[#eb3942]" 
                : "border border-[#3d3c3b]"
              }
            `}
            required
          />
           {isTouched && !validateEmail(inputValue) && (
              <label htmlFor="email" className="absolute top-16 left-0 text-[#eb3942] w-full max-w-[370px] text-sm text-start">
                Please enter a valid email address.
              </label>
            )}
        </div>
      
        <button 
          type="submit" 
          className="
            flex items-center justify-center rounded-sm text-lg sm:text-2xl bg-[#e50914] hover:brightness-90 
            w-[160px] sm:w-[210px] h-[48px] sm:h-[56px] mt-3 sm:mt-0 ml-2"
        >
          Get Started 
          <ChevronRight className="ml-2" size="32px"/>
        </button>
    </form>
    )
}
