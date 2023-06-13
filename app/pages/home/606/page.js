
import React from 'react'
import { getForm606 } from '@/app/db/controllers/userdata'
import Ptable from './components/ptable'

export default async function pages() {

    let row = await getForm606()
        .then((data) => {
            console.log(data)
            return data
        })

    //console.log(row)
    return (
        <section class="flex bg-white min-h-screen flex-col items-center justify-center">
            <h1 className=' font-extrabold text-3xl m-10'>FORMULARIOS 606</h1>

            <Ptable row={row} />

            <a href="/pages/home/606/new" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Agregar Formulario
            </a>
        </section>
    )
}