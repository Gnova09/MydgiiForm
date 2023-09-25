"use client"
import Image from "next/image"
import { CreateUser } from "../../../app/db/controllers/userdata"
import React, { useState } from "react"


export default function Register() {
    const [rnc, setRnc] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
       await CreateUser({email,name, password, rnc})
        /* console.log({
            rnc,
        email,
        name,
        password
        })
 */
         window.location.href="/pages/home"
    }

    return (
        <section class="bg-gray-50 dark:bg-gray-900  bg-[url('/assets/Register.jpg')]">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-2">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image width={32} height={32} class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    MYDGIIAPP
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Crear Cuenta
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="rnc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RNC/Cedula *</label>
                                <input
                                    type="text"
                                    id="rnc"
                                    onChange={(e) => setRnc(e.target.value)}
                                    value={rnc}
                                    required
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="00123456789" />
                            </div>
                            <div>
                                <label for="rnc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre y apellido *</label>
                                <input
                                    type="text"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email electronico *</label>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    name="email"
                                    id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña *</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>


                            <button type="submit"
                                onClick={handleSubmit}
                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Crear una cuenta
                            </button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                ¿Ya tienes una cuenta? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Iniciar Sesion</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}