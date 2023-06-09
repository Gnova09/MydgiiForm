"use client"
import React from 'react'
import DataTable from './components/table'

import { newForm606, newUser } from '@/app/db/controllers/userdata'

export default function pages() {
    const handleuser =()=>{
       newForm606()
    }
    return (
        <section class="flex bg-white min-h-screen flex-col items-center justify-center">
            <h1 className=' font-extrabold text-3xl m-10'>FORMULARIOS 606</h1>

            <div className='w-full px-5'>
                <DataTable />
            </div>

            <button onClick={handleuser} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Agregar Formulario
            </button>

        </section>
    )
}