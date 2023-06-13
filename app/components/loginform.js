"use client"
import React, { useEffect, useState } from 'react'
import { SignIn, CreateUser, newClient } from '../db/controllers/userdata'
import useAppContext from '../context/context'

export const Loginform = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const { islogin, setIslogin,setuser } = useAppContext()

    useEffect(()=>{
        islogin === true ? window.location.href = "/pages/home" : null
    })
 

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        /*
        se logea, 
        islogin = true
        pasa a home
        */
        const { user, error } = await SignIn(email, pass)
       // await newClient("kljs","georges")
        if (error) {
            console.log(error)
        }
        if (user) {
            
            await setuser(user);
            //await setIslogin(true);
            //window.location.href = "/pages/home"
        }
    }

    return (
        <form class="space-y-4 md:space-y-6" >
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password"
                    onChange={(e) => setPass(e.target.value)}
                    id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <button type="submit"
                onClick={handleSubmitLogin}
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="/pages/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
        </form>
    )
}
