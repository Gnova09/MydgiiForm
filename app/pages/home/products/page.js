"use client"

import React, { useState, useEffect } from 'react'
import DataTable from '@/app/components/table'
import Link from 'next/link'
import useAppContext from '@/app/context/context'
import { deleteProducts, getProducts } from '@/app/db/controllers/products'



export default function pages() {

  const { user, toast } = useAppContext()
  const [row, setRow] = useState("");
  const [update, setUpdate] = useState("");


  const { setTextToast, setShowToast } = toast

  const toastCall = (text) => {
      setTextToast(text);
      setShowToast(true);

      setTimeout(() => {
          setShowToast(false);
          setTextToast("");
      }, 3000);
  };

  const eliminarObjeto = (id) => {

     deleteProducts({ uid: user.uid, indice: (id - 1) })
        .then(() => {
          toastCall("Eliminado correctamente")
          setUpdate(!update)
        }) 
        


}
  const column = [
  { field: 'id', headerName: '#', width: 50 },
  { field: 'name', headerName: 'Nombre', width: 130 },
  { field: 'categoria', headerName: 'Categoria', width: 130 },
  { field: 'precio', headerName: 'Precio($RD)',  width: 170 },
  { field: 'description', headerName: 'Descripcion', width: 170 },
  {
    field: 'actions',
    headerName: 'Delete',
    width: 100,
    renderCell: (params) => (
        <div className='flex items-center justify-center w-fit'>
            <button variant="contained"
                className='flex items-center w-8 h-8  justify-center'
                type='button'
                color="primary" onClick={() => eliminarObjeto(params.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                </svg>
            </button>
        </div>
    ),
},
]

  const fetchData = async () => {
    const rowData = await getProducts(user.uid);
    setRow(rowData);
  };

  useEffect(() => {
    fetchData();
  }, [user, update])

  return (

    <section class="flex bg-white  flex-col items-center justify-center p-4 min-h-screen mt-14">
      <h1 className=' font-extrabold text-3xl m-5'>Productos</h1>

      {
        row?.length > 0 ?
          <DataTable column={column} row={row} />
          :
          <div class="flex flex-col items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <h1>No tiene Productos</h1>
            <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
          </div>
      }

      <Link href="/pages/home/products/new" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
        Agregar Productos
      </Link>
    </section>

  )
}
