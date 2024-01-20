"use client"
import { useState, useEffect, ReactNode } from 'react'

const ScrollingElementSSR = ({children} : {children: ReactNode}) => {

const [scrolling, setScrolling] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

return (
  <div 
    className={scrolling ? "navbar" : ""}
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 4rem",
      zIndex: "10",
      position: "fixed",
      transition: "all 0.3s"
    }}
  >
    {children}
  </div>
)
}

export default ScrollingElementSSR;
