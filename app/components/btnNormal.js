"use client"
import React from 'react'

const Btn = ({text, fnc, }) => {
  return (
    <button 
    type="submit" 
    onClick={fnc}
    class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        {text}
    </button>
  )
}

export default Btn