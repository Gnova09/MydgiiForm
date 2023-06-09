
import React from 'react'
import DataTable from './components/table'
import useAppContext from '@/app/context/context'

export default function pages() {

    return (
        <section class="flex bg-white min-h-screen flex-col items-center justify-center">
            <h1 className=' font-extrabold text-3xl m-10'>FORMULARIOS 606</h1>

            <div className='w-full px-5'>
                <DataTable />
            </div>

            <a href={`606/new`} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Agregar Formulario
            </a>

        </section>
    )
}