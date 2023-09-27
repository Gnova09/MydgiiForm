"use client"
import { SignOutUser } from '@/lib/db/controllers/userdata'
import React from 'react'

const Logout = () => {

    const handleSingOut = async () => {
        const { success, error } = SignOutUser()

        if (success) {
            console.log("logOut")
            setIslogin(false)
        }

        if (error) {
            console.log(error)
            setIslogin(false)
        }
        window.location.href = "/"

    }

    return (
        <button
            onClick={handleSingOut}
            class="flex bottom-0 flex-row text-sm py-2 px-4 dark:text-white bg-transparent text-blue-600 font-semibold  hover:border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span className='ml-2'>
                Logout
            </span>
        </button>
    )
}

export default Logout