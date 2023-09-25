"use client"
import React, { useState, useEffect } from 'react'
import useAppContext from '@/app/context/context'
import Btn from '../../../../components/btnNormal'
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

export default function Pages() {

    //Estado del sistema donde se guarda el user
    const { user, toast } = useAppContext()

    //Estado del componente
    const [name, setName] = useState("")
    const [rnc, setRnc] = useState("")
    const [desc, setDesc] = useState("")
    const [tipoID, setTipoID] = useState(false)

    const hanldeReset = () => {
        setName("")
        setDesc("")
        setRnc("")
    }

    const { setTextToast, setShowToast } = toast

    const toastCall = (text) => {
        setTextToast(text);
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
            setTextToast("");
        }, 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await newProveedor({
            name,
            rnc,
            desc,
            tipoID: tipoID ? 1 : 2,
            uid: user.uid
        }).then(()=>{
            toastCall("Proveedor creado")
            hanldeReset()
           window.location.href = "/pages/home/proveedores"
        })
    }

    return (
        <section class="bg-white  mt-14 dark:bg-transparent">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agregar nuevo proveedor</h2>
                <form onSubmit={handleSubmit} class="space-y-8">
                    <div>
                        <label for="Nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre y Apellido *</label>
                        <input
                            type="Nombre"
                            id="Nombre"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe"  />
                    </div>
                    <div>
                        <label for="rnc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RNC/Cedula *</label>
                        <input
                            type="text"
                            id="rnc"
                            onChange={(e) => setRnc(e.target.value)}
                            value={rnc}
                            required
                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="00123456789"  />
                    </div>
                    <div>
                        <label for="rnc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo de ID </label>
                        <label class="relative inline-flex items-center mb-4 cursor-pointer">
                            <input type="checkbox"
                                onChange={() => setTipoID(!tipoID)}
                                class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">RNC</span>
                        </label>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="Desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Descripcion del proveedor</label>
                        <textarea
                            id="Desc"
                            rows="6"
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Descripcion..."></textarea>
                    </div>
                    <Btn text={"Agregar"}  />
                </form>
            </div>
        </section>
    )
}