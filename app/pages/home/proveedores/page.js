"use client"
import DataTable from "@/app/components/table"
import useAppContext from "@/app/context/context"
import { getProveedor } from "@/app/db/controllers/proveedor"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const column = [

    { field: 'id', headerName: '#', width: 70 },
    { field: 'rnc', headerName: 'RNC/Cedula', width: 130 },
    { field: 'name', headerName: 'Nombre', width: 170 },
    { field: 'desc', headerName: 'Descripcion', type: 'number', width: 170 },
]

export default function Home() {

    const { user } = useAppContext()
    const [row, setRow] = useState([])
    let n = 1
    useEffect(() => {
        if (user.proveedores) {

            setRow(
                user.proveedores?.map((item) => {
                    return (
                        {
                            ...item,
                            id: n++
                        }
                    )
                })
            )
        }
    }, [user])

    console.log(user.proveedores)
    return (
        <section class="flex bg-white min-h-screen flex-col items-center justify-center">
            <h1 className=' font-extrabold text-3xl m-10'>Provedores</h1>
            <div className='w-full px-5'>
                <DataTable column={column} row={row} />
            </div>

            <Link href="/pages/home/proveedores/new" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Agregar Proveedor
            </Link>
        </section>
    )
}
