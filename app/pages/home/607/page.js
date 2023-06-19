
import React from 'react'
import Ptable from './components/ptable'
import Link from 'next/link'

export default async function pages() {

    return (
        <section class="flex mt-14 bg-white min-h-screen flex-col items-center justify-center">
            <h1 className=' font-extrabold text-3xl m-5'>Facturas</h1>

            <Ptable />

            <Link href="/pages/home/607/new" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Agregar Factura
            </Link>
        </section>
    )
}