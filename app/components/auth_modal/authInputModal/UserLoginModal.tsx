"use client"
import { useState } from "react"

export default function UserLoginModal() {
  
  const [inputValue, setInputValue] = useState("")
  const [isTouched, setIsTouched] = useState(false)
  
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
    <div className="relative">
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={inputValue}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        autoComplete="email"
        className={`input-field bg-[#333] opacity-80 text-white rounded-sm w-full md:w-[314px] py-3 px-6
          ${(inputValue && validateEmail(inputValue)) 
            ? "border-none" 
            : (!inputValue || !validateEmail(inputValue)) && isTouched 
            ? "border-b-2 border-[#e87c03] outline-none" 
            : "border border-[#3d3c3b]"
          }
        `}
        required
      />

      {isTouched && !validateEmail(inputValue) && (
        <label htmlFor="email" className="absolute top-14 left-0 text-[#e87c03] w-full max-w-[370px] text-sm text-start">
          Please enter a valid email address.
        </label>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="off"
        disabled
        className="input-field bg-[#333] opacity-80 text-white rounded-sm  w-full md:w-[314px] py-3 px-6 cursor-not-allowed mt-8"
      />
  </div>
  )
}