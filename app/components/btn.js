"use client"
import React from 'react'

const BtnDefault = ({tittle, action, icon}) => {
    return (
        <button
            type='button'
            onClick={action}
            class="flex flex-row text-sm py-2 px-4 dark:text-white bg-transparent text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
            {
                icon
            }
            <span className='ml-2'>
                {tittle}
            </span>
        </button>
    )
}

export default BtnDefault