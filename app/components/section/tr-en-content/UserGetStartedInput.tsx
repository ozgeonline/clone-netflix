"use client"

import { Box, TextField } from "@mui/material"
import { useState } from "react"

export default function UserGetStartedInput() {
  
    const [inputValue, setInputValue] = useState("")
    const [warningMessage, setWarningMessage] = useState("")
    const [warningColor, setWarningColor] = useState(false)
    const [isTouched, setIsTouched] = useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setInputValue(value)
    
      if (!value) {
        setWarningMessage('Email is required.')
        setWarningColor(true)
      } else {
        setWarningMessage('')
        setWarningColor(false)
      }
    }

    const handleInputBlur = () => {
      setIsTouched(true)
      if (inputValue) {
        setWarningMessage("")
      }
    }

    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { 
            width: '100%',
            borderRadius:"4px",
            border:`${inputValue ? "2px solid #2bb871" : !inputValue && isTouched && warningColor ? "2px solid #eb3942" :  "1px solid #3d3c3b" }`
          },
          "& .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-colorPrimary.MuiInputBase-formControl.Mui-focused": {
            borderBottomLeftRadius:"4px", 
            borderBottomRightRadius:"4px",
          },
          '& .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-colorPrimary.MuiInputBase-formControl::after': {
            borderBottomLeftRadius:"4px", 
            borderBottomRightRadius:"4px",
            width:"100%",
            borderBottom:"none"
          },
          '& .MuiInputBase-input': {backgroundColor:"#141314", color:"#fff", opacity:0.8},
          '& .MuiInputBase-input.Mui-focused': {backgroundColor:"#141314", color:"#fff", opacity:0.8},
          
          '& .MuiFilledInput-input': {borderRadius:"4px"},
          '& .MuiFormLabel-root': {color:"#8c8c8c"},
          '& .MuiFormLabel-root.Mui-focused': {color:"#8c8c8c"},
          '& .MuiFormHelperText-root': {color: "#eb3942", marginBottom:"-1.4rem"},
          width:"100vw",
          maxWidth:"375px",
          paddingX:"1.5rem"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleInputChange}
          value={inputValue}
          onBlur={handleInputBlur}
          type="email"
          id="
          "
          label="Email address"
          name="email"
          helperText={isTouched && warningMessage}
          variant="filled"
        />
      </Box>
    )
}