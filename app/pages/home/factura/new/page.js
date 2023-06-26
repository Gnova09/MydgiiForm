"use client"
import React, { useState, useEffect } from 'react'
import DataTable from '../../../../components/table'
import useAppContext from '@/app/context/context'
import { newForm606 } from '@/app/db/controllers/userdata'
import { columnsStateInitializer } from '@mui/x-data-grid/internals'




const today = new Date();
const year = today.getFullYear().toString();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const dateCreated = `${year}${month}`;

const column = [

    { field: 'id', headerName: '#', width: 50 },
    { field: 'cant', headerName: 'Cantidad', width: 50 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'description', headerName: 'Descripcion', width: 170 },
    { field: 'precio', headerName: 'Precio($RD)', width: 170 },
    { field: 'subtotal', headerName: 'SubTotal', width: 170 },
    { field: 'total', headerName: 'Total', width: 170 },
    {
        field: 'actions',
        headerName: 'Descargar',
        width: 100,
        renderCell: (params) => (
            <div className='flex items-center justify-center w-[100px]'>

                <button variant="contained"
                    className='flex items-center w-8 h-8'
                    color="primary" onClick={() => console.log("clic")}>
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                    </svg>
                </button>
            </div>
        ),
    },

]
const row = [
    {
        id: 1,
        cant: "234",
        name: "we",
        description: "wsdfasfde",
        precio: "1",
        subtotal: "2",
        total: "3",
    }
]

export default function pages() {
    //STATE APP//
    const [proveedor, setProveedor] = useState();
    const [factura, setFactura] = useState();
    const { user } = useAppContext()

    useEffect(() => {
        setProveedor(user.proveedores);
    }, [user])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFactura((prevData) => ({ ...prevData, [name]: value }))
    }

    return (
        <div className="flex flex-col p-4 mt-14">
            <div className='flex flex-row justify-between'>
                <h1 className=' font-bold text-2xl mb-2'>Productos</h1>
                <button
                    onClick={() => { console.log(factura) }}
                    className=' w-6 h-6 bg-white rounded-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>

                </button>
            </div>
            <div className='flow flex-col bg-white items-center min-h-screen justify-center p-5'>

                {/*   RNC/Cedula 
                <div class="sm:col-span-2">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proveedor *</label>
                    <select id="category"
                        onChange={handleChange}
                        name='cliente'
                        required
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option value="">Seleccionar Proveedor</option>
                        {
                            proveedor ?
                                proveedor.map(({ rnc, name }) => {

                                    return <option value={rnc}>{`${name} - ${rnc}`}</option>
                                }) :
                                <option value="">Cargando proveedores...</option>
                        }
                    </select>
                </div> */}

                <div className='p-3'>
                    <div className=" border-b p-3 border-gray-400 ">
                        <h1 className='font-bold text-xl mb-5'>Cliente</h1>
                        <form className='flex justify-between gap-6 flex-row'>
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    onChange={handleChange}
                                    value=""
                                    required
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="John Doe" />
                            </div>
                            <span class=" border-l  border-gray-400">
                            </span>
                            <div>
                                <label for="rnc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RNC/Cedula *</label>
                                <input
                                    type="text"
                                    id="rnc"
                                    name='rnc'
                                    onChange={handleChange}
                                    value=""
                                    required
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="00123456789" />
                            </div>
                            <span class=" border-l border-gray-400">
                            </span>
                            <div>
                                <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
                                <input
                                    type="text"
                                    id="tel"
                                    name='tel'
                                    onChange={handleChange}
                                    value=""
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="809 786 4567" />
                            </div>

                        </form>

                    </div>
                    <DataTable column={column} row={row} />
                </div>


            </div>
        </div>
    )

}