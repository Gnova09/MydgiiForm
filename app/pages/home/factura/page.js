"use client"
import React, { useState } from 'react'
import Ptable from '../../../components/ptable'
import Link from 'next/link'
import useAppContext from '@/app/context/context'
import { getFacturas } from '@/app/db/controllers/facturas';
import generarFactura from '@/app/helpers/generarFactura';

const handleRowButton = async (row) => {

    generarFactura(row)

}
const column = [

    { field: 'id', headerName: '#', width: 170 },
    { field: 'dateCreated', headerName: 'Fecha creacion', width: 130 },
    { field: 'name', headerName: 'Cliente', width: 170 },
    { field: 'nota', headerName: 'Nota', width: 170 },
    {
        field: 'actions',
        headerName: 'Descargar',
        width: 100,
        renderCell: (params) => (
            <div className='flex items-center justify-center w-[100px]'>

                <button variant="contained"
                    className='flex items-center w-8 h-8'
                    color="primary" onClick={() => handleRowButton(params.row)}>
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                    </svg>
                </button>
            </div>
        ),
    },

]

export default function Pages() {
    const { user } = useAppContext()
    const [row, setRow] = useState([])


    const fetchData = async () => {
        const rowData = await getFacturas(user.uid);
        setRow(rowData);
    };

    return (
        <section class="flex mt-14 bg-white min-h-screen flex-col items-center justify-center">
            <h1 className=' font-extrabold text-3xl m-5'>Facturas</h1>

           {/* <Ptable callback={() => fetchData()} column={column} row={row} /> */}

            <Link href="/pages/home/factura/new" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Agregar Factura
            </Link>
        </section>
    )
}