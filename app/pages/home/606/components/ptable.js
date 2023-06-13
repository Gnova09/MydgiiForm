"use client"
import React from 'react'
import DataTable from './table'

const handleRowButton = async (row) => {

    let contenido = `606|${row.cliente}|${row.dateCreated}|${row.totalRow}`;// Contenido del documento a descargar

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
    { field: 'provee', headerName: 'Proveedor', width: 170 },
    { field: 'dateCreated', headerName: 'Fecha creacion', width: 130 },
    { field: 'totalRow', headerName: 'Cantidad de registros', type: 'number', width: 170 },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
            <button variant="contained" 
            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
            color="primary" onClick={() => handleRowButton(params.row)}>
                Download
            </button>
        ),
    },

]

export default function Ptable({ row }) {

    return (
        <div className='w-full px-5'>
            <DataTable column={column} row={row} />
        </div>
    )
}
