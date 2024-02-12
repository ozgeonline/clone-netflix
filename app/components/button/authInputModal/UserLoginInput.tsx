"use client"

import { Box, TextField } from "@mui/material"
import { useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery'

export default function UserInput() {

    const [inputValue, setInputValue] = useState("")
    const [warningMessage, setWarningMessage] = useState("")
    const [isTouched, setIsTouched] = useState(false)

    const matches = useMediaQuery('(min-width:640px)')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setInputValue(value)
    
      if (!value) {
        setWarningMessage('Please enter a valid email.')
      } else {
        setWarningMessage('')
      }
    }

    const handleInputBlur = () => {
      setIsTouched(true)
      
      if (!inputValue) {
        setWarningMessage('Please enter a valid email.')
      } else {
        setWarningMessage('')
      }
    }
  
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '100%', borderRadius:"4px"},
        '& .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-colorPrimary.MuiInputBase-formControl::after': {
          borderBottomLeftRadius:"4px", 
          borderBottomRightRadius:"4px",
          borderBottom:"2px solid #e87c03",
          height:"6px",
          width:"100%"
        },
        '& .MuiInputBase-input': {backgroundColor:"#333", color:"#fff"},
        '& .MuiFilledInput-input': {borderRadius:"4px", },
        '& .MuiFormLabel-root': {color:"#8c8c8c"},
        '& .MuiFormHelperText-root': {color: "#e87c03"},
        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {color:"#8c8c8c"},
        maxWidth:`${matches ? "336px" : "100%"}`,
        width:"100%"
        
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        onChange={handleInputChange}
        value={inputValue}
        onBlur={handleInputBlur}
        type="email"
        id="filled-error-helper-text"
        label="Email"
        name="email"
        defaultValue=""
        helperText={isTouched && warningMessage}
        variant="filled"
      />
      <TextField
        type="email"
        label="Password"
        name="password"
        defaultValue=""
        variant="filled"
        
        disabled
        sx={{marginTop:"1rem", input: { cursor: 'no-drop' }}}
      />
    </Box>
  )
}