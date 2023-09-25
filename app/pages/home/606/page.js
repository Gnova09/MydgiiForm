"use client"
import React, { useState, useEffect } from 'react'
import { getForm606 } from '@/app/db/controllers/userdata'
import Ptable from '../../../components/ptable'
import Link from 'next/link'
import useAppContext from '@/app/context/context'
import DataTable from '@/app/components/table'


const row = [
    {
        "totalRow": 1,
        "provee": "",
        "row": [
            {
                "propina": "234243",
                "bienes": "02",
                "ID": 2,
                "Monto": "23423",
                "id": "1231",
                "RNC": "40215081338",
                "Itbis": 0,
                "Date": "2023-09-18",
                "Fpago": "03",
                "NCF": "1231",
                "Itbis10": 0,
                "Itbis2": 468.46000000000004
            }
        ],
        "dateCreated": "202309",
        "user": "40215081338",
        "id": 1
    },
    {
        "dateCreated": "202309",
        "row": [
            {
                "Date": "2023-09-21",
                "id": "78372918439",
                "Monto": "1341234",
                "ID": 2,
                "NCF": "78372918439",
                "Fpago": "01",
                "propina": "3",
                "RNC": "40215081338",
                "bienes": "02",
                "Itbis": 0,
                "Itbis2": 0,
                "Itbis10": 134123.4
            }
        ],
        "provee": "",
        "totalRow": 1,
        "user": "40215081338",
        "id": 2
    },
    {
        "provee": "",
        "dateCreated": "202309",
        "user": "40215081338",
        "totalRow": 1,
        "row": [
            {
                "ID": 2,
                "NCF": "232432314",
                "id": "232432314",
                "Date": "2023-09-26",
                "propina": "321432",
                "Fpago": "01",
                "Monto": "2314",
                "Itbis": 0,
                "Itbis10": 0,
                "Itbis2": 0,
                "RNC": "40215081338",
                "bienes": "02"
            }
        ],
        "id": 3
    },
    {
        "provee": "",
        "dateCreated": "202309",
        "totalRow": 1,
        "user": "40215081338",
        "row": [
            {
                "propina": "3",
                "Itbis": 0,
                "Itbis10": 0,
                "Date": "2023-12-31",
                "Monto": "10000",
                "ID": 2,
                "RNC": "40215081338",
                "Fpago": "01",
                "id": "78372918439",
                "bienes": "01",
                "Itbis2": 0,
                "NCF": "78372918439"
            }
        ],
        "id": 4
    }
]

const handleRowButton = async (row) => {

   /*  let contenido = `606|${row.user}|${row.dateCreated}|${row.totalRow}`;// Contenido del documento a descargar

    row.row.forEach(item => {
        contenido += `\n${item.RNC}|${item.ID}|${item.bienes}|${item.NCF}||${item.Date.replace(/-/g, "")}||${item.Monto}||${item.Monto}|${item.Itbis}||||${item.Itbis + item.Itbis2 + item.Itbis10}|||||||${item.propina}|${item.Fpago}`
    })

    const nombreArchivo = "documento.txt"; // Nombre del archivo a descargar

    const blob = new Blob([contenido], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = nombreArchivo;
    link.click();

    URL.revokeObjectURL(url);
 */
}

const column = [

    { field: 'id', headerName: '#', width: 170 },
    { field: 'dateCreated', headerName: 'Fecha creacion', width: 130 },
    { field: 'totalRow', headerName: 'Cantidad de registros', type: 'number', width: 170 },
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
export default async function Pages() {
    const { user } = useAppContext()
    const [dataRow, setDataRow] = useState([])
  
    const fetchData = async () => {

        const rowData = await getForm606(user.uid);
        setDataRow(rowData)
        console.log(rowData)
    };

    useEffect(() => {
        if (user.uid) {
            fetchData();
        }

        // eslint-disable-next-line
    }, [user])

    return (
        <section class="flex mt-14 min-h-screen flex-col items-center justify-center">
            <h1 className=' font-extrabold text-3xl m-5'>FORMULARIOS 606</h1>

            <div className='flex items-center justify-center w-full px-5'>


                <DataTable column={column} row={dataRow} />


            </div>

            <Link href="/pages/home/606/new" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Agregar Formulario
            </Link>
        </section>
    )
}