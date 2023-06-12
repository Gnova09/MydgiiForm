
import React from 'react'
import { getForm606 } from '@/app/db/controllers/userdata'
import Ptable from './components/ptable'

const column = [

    { field: 'cliente', headerName: 'Cliente', width: 170 },
    { field: 'dateCreated', headerName: 'Fecha creacion', width: 130 },
    { field: 'totalRow', headerName: 'Cantidad de registros', type: 'number', width: 170 },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
            <Button variant="contained" color="primary" onClick={() => console.log("clic")}>
                Download
            </Button>
        ),
    },

]

export default async function pages() {

    let row = await getForm606()
        .then((data) => {
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