"use client"

import { useState, useCallback, useMemo, useRef, useEffect, ReactNode } from "react";
import debounce from 'lodash.debounce';

type UserLoginInputModalProps = {
  children?:ReactNode
  inputStyle?:string
  valueAndValidateTrueColor?:string
  valueAndValidateFalseColor?:string
  inputWrapper?:string
  errorMsgColor?:string
}
export default function UserLoginInput({
  children,
  inputStyle,
  inputWrapper,
  errorMsgColor,
  valueAndValidateTrueColor,
  valueAndValidateFalseColor,
}:UserLoginInputModalProps) {

  const [inputValue, setInputValue] = useState("")
  const [isTouched, setIsTouched] = useState(false)
  
  const debouncedHandleInputChange = useRef(debounce((value) => {
    setInputValue(value);
  }, 300)).current;

  useEffect(() => {
    return () => {
      debouncedHandleInputChange.cancel();
    };
  }, [debouncedHandleInputChange]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  
  const handleInputBlur = useCallback(() => {
    setIsTouched(true);
  }, []);

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const emailIsValid = useMemo(() => validateEmail(inputValue), [inputValue, validateEmail]);

  return (
    <div className={inputWrapper}>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={inputValue}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        autoComplete="email"
        required
        className={`input-field ${inputStyle} opacity-80 text-white rounded-sm w-full px-6
          ${(inputValue && emailIsValid) ? `${valueAndValidateTrueColor}`
            : (!inputValue || !emailIsValid) && isTouched ? `${valueAndValidateFalseColor}` 
            : "border border-[#3d3c3b]"
          }
        `}
      />

      {isTouched && !emailIsValid && (
        <label 
          htmlFor="email"
          className={`${errorMsgColor} absolute top-14 left-0 w-full max-w-[370px] text-xs sm:text-sm text-start`}
        >
          Please enter a valid email address.
        </label>
      )}

      <div className={`${isTouched && !emailIsValid && "max-sm:mt-7"}`}>
        {children}
      </div>
    </div>
  )
}