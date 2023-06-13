"use client"
import React, { useState, useEffect } from 'react'
import DataTable from '../../../../components/table'
import useAppContext from '@/app/context/context'
import { newForm606 } from '@/app/db/controllers/userdata'
import Btn from '../../components/btn'
import { newProveedor } from '@/app/db/controllers/proveedor'


const column = [
    { field: 'id', headerName: 'N   CF', width: 130 },
    { field: 'ID', headerName: 'Tipo ID', width: 70 },
    { field: 'bienes', headerName: 'Bienes', width: 70 },
    { field: 'Date', headerName: 'Fecha Comprobante', width: 130 },
    { field: 'Monto', headerName: 'Monto', width: 130 },
    { field: 'propina', headerName: 'Propina', width: 130 },
    { field: 'Fpago', headerName: 'Forma de pago', width: 70 },
    { field: 'Itbis', headerName: 'Itbis(18%)', width: 130 },
    { field: 'Itbis2', headerName: 'Itbis(2%)', width: 130 },
    { field: 'Itbis10', headerName: 'Itbis(10%)', width: 130 },

]

const today = new Date();
const year = today.getFullYear().toString();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const dateCreated = `${year}${month}`;

export default function pages() {

    const {user}= useAppContext()

    const [name, setName] = useState("")
    const [rnc, setRnc] = useState("")
    const [desc, setDesc] = useState("")

    const hanldeReset = () =>{
        setName("")
        setDesc("")
        setRnc("")
    }

    const handleSubmit =async (e)=>{
        e.preventDefault()
        await newProveedor({name,rnc,desc, uid: user.uid})
        hanldeReset()
    }

    return (
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            
            <form action="#" class="space-y-8">
                <div>
                    <label for="Nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre y Apellido</label>
                    <input 
                    type="Nombre" 
                    id="Nombre" 
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required/>
                </div>
                <div>
                    <label for="rnc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RNC/Cedula</label>
                    <input 
                    type="text" 
                    id="rnc" 
                    onChange={(e)=>setRnc(e.target.value)}
                    value={rnc}
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="00123456789" required/>
                </div>
                <div class="sm:col-span-2">
                    <label for="Desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Descripcion del proveedor</label>
                    <textarea 
                    id="Desc" 
                    rows="6" 
                    onChange={(e)=>setDesc(e.target.value)}
                    value={desc}
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Descripcion..."></textarea>
                </div>
                <Btn text={"Agregar"} fnc={handleSubmit} />
            </form>
        </div>
    </section>
    )
}