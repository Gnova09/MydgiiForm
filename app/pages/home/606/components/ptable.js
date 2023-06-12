"use client"
import React from 'react'
import DataTable from './table'

const handleRowButton = async (row) => {
   /*  fetch('/api/createFile')
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Muestra el mensaje de respuesta de la API
        })
        .catch(error => {
            console.error('Error al consumir la API:', error);
    }); */

    
    const contenido = `606|${row.cliente}|${row.dateCreated}|${row.totalRow}\n${
        row.row.map(item =>{ 
            return `${item.RNC}|${item.ID}|${item.bienes}|${item.NCF}||${item.Date.replace(/-/g, "")}||${item.Monto}||${item.Monto}|${item.Itbis}||||${item.Itbis + item.Itbis2 + item.Itbis10}|||||||${item.propina}|${item.Fpago}\n`
         })
    }`; // Contenido del documento a descargar
    console.log(contenido)
    console.log(row)
        const nombreArchivo = "documento.txt"; // Nombre del archivo a descargar
      /* 
        const blob = new Blob([contenido], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
      
        const link = document.createElement("a");
        link.href = url;
        link.download = nombreArchivo;
        link.click();
      
        URL.revokeObjectURL(url); */
   
}

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
            <button variant="contained" color="primary" onClick={()=>handleRowButton(params.row)}>
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
