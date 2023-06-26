"use client"

import React, { useState, useEffect } from 'react'
import DataTable from '@/app/components/table'
import Link from 'next/link'
import useAppContext from '@/app/context/context'
import { getProducts } from '@/app/db/controllers/products'

const column = [
  { field: 'id', headerName: '#', width: 50 },
  { field: 'name', headerName: 'Nombre', width: 130 },
  { field: 'categoria', headerName: 'Categoria', width: 130 },
  { field: 'precio', headerName: 'Precio($RD)',  width: 170 },
  { field: 'description', headerName: 'Descripcion', width: 170 }
]

export default function pages() {

  const { user } = useAppContext()

  const [row, setRow] = useState("");
  

  const fetchData = async () => {
    const rowData = await getProducts(user.uid);
    setRow(rowData);
  };

  useEffect(() => {
    fetchData();
  }, [user])

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
