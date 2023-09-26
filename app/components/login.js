import React from 'react'
import { Loginform } from './loginform'
import Image from 'next/image'

const Login = () => {


    return (
        <section class="bg-gray-50 dark:bg-gray-900 w-1/2 ">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image width={32} height={32} class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    MyDgiiApp
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <Loginform />
                    </div>
                </div>
            </div>
            <span class="text-sm ml-1 text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/Gnova09" class="hover:underline">DevNova™</a>. All Rights Reserved.   VERSION 1.0.4</span>
        </section>
    )
}

export default Login