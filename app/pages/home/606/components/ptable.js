"use client"
import React, { useEffect, useState } from 'react'
import DataTable from '../../../../components/table'
import useAppContext from '@/app/context/context';
import { getForm606 } from '@/app/db/controllers/userdata';

const handleRowButton = async (row) => {

    let contenido = `606|${row.user}|${row.dateCreated}|${row.totalRow}`;// Contenido del documento a descargar

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

export default function Ptable() {

    const { user } = useAppContext()
    const [row, setRow] = useState([])

    const fetchData = async () => {
        const rowData = await getForm606(user.uid);
        setRow(rowData);
    };

    useEffect(() => {

        fetchData();
        // eslint-disable-next-line
    }, [user])

    return (
        <div className='flex items-center justify-center w-full px-5'>
            {
                row?.length > 0 ?
                    <DataTable column={column} row={row} />
                    :
                    <div class="flex flex-col items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <h1>No tiene Formulario</h1>
                        <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
                    </div>
            }
        </div>
    )
}
