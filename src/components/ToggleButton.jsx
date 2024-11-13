import React, { useContext } from 'react'
import { BsMoon, BsSun } from "react-icons/bs";
import ThemeContext from '../context/ThemeContext';
function ToggleButton() {
    const {isDark , setIsDark}= useContext(ThemeContext)
    if (isDark) {
        document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      favicon.href = '/favicon-dark.ico'
      } else {
        document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      favicon.href = '/favicon.ico'
      
      }
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={()=>setIsDark(!isDark)}
    >
      {isDark ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ToggleButton