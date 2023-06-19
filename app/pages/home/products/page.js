import React from 'react'
import DataTable from '@/app/components/table'
import Link from 'next/link'


const column = [
  { field: 'id', headerName: '#', width: 50 },
  { field: 'Name', headerName: 'Nombre', width: 130 },
  { field: 'precio', headerName: 'Precio', type: 'number', width: 170 },
  { field: 'desc', headerName: 'Descripcion', type: 'number', width: 170 }
]
const row = []
export default function pages() {
  return (

    <section class="flex bg-white  flex-col items-center justify-center p-4 min-h-screen mt-14">
      <h1 className=' font-extrabold text-3xl m-5'>Productos</h1>

      <DataTable column={column} row={row}  />

      <Link href="/pages/home/products/new" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
        Agregar Productos
      </Link>
    </section>

  )
}
