"use client"
import React from 'react'
import DataTable from './table'

const column = [

    { field: 'id', headerName: '#', width: 170 },
    { field: 'cliente', headerName: 'Cliente', width: 170 },
    { field: 'dateCreated', headerName: 'Fecha creacion', width: 130 },
    { field: 'totalRow', headerName: 'Cantidad de registros', type: 'number', width: 170 },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
            <button variant="contained" color="primary" onClick={() => console.log("clic")}>
                Download
            </button>
        ),
    },

]

export default  function Ptable({row}) {

    return(
        <div className='w-full px-5'>
                <DataTable column={column} row={row} />
        </div>
    )
}
