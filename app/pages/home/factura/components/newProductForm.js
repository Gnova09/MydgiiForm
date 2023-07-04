"use client"

import React, { useState, useEffect, useRef } from 'react'

const NewProductForm = ({ showNewProduct, productos, agregarProducto, cerrar }) => {

    const Form = useRef(null)

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cant, setCant] = useState(1)
    const [subtotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [itbis, setItbis] = useState(0)

    const calcTotal = () => {
        let subtotaln = ((selectedProduct?.precio ?? 0) * cant).toFixed(2)
        setSubTotal(subtotaln)

        let itbisn = (subtotaln * 0.18).toFixed(2)
        setItbis(itbisn)

        setTotal((Number(subtotaln) + Number(itbisn)).toFixed(2))
    }


    useEffect(() => {
        calcTotal()
    }, [selectedProduct, cant])

    function formatearCantidadDeDinero(cantidad) {
        // Convertir la cantidad a texto
        const cantidadTexto = String(cantidad);

        // Separar la parte entera de la parte decimal (si existe)
        const partes = cantidadTexto.split(".");
        let parteEntera = partes[0];
        let parteDecimal = partes[1] || "";

        // Agregar las comas a la parte entera
        parteEntera = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Unir la parte entera y la parte decimal (si existe)
        const cantidadFormateada = parteDecimal ? `${parteEntera}.${parteDecimal}` : parteEntera;

        return cantidadFormateada;
    }

    const handleSelectNewProduct = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = event.target.options[selectedIndex].value;
        setSelectedProduct(JSON.parse(selectedOption));
    };

    const ResetValues = () => {
        setCant(1)
        setSelectedProduct(null)
        setItbis(0)
        setSubTotal(0)
        Form.current.reset()
    }

    const handleFinishNewproduct = (event) => {
        event.preventDefault()
        agregarProducto((prevData) => ([...prevData, { total, subtotal, itbis, ...selectedProduct, cant }]))

        ResetValues()
        // setShowNewProduct(false)

    }

    return (
        <div className={` ${showNewProduct ? "fixed" : "hidden"} flex flex-col items-center justify-center   right-0  p-5  w-64 z-50 bg-white border-2 border-black rounded-md `}>
            <button onClick={() => {
                ResetValues()
                cerrar()
            }}
            className=' w-5 absolute right-1 top-1 hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
            {/* New product TODO: MakeComponent */}
            <h1 className=' font-semibold text-xl mb-3'>
                Producto o Servicio
            </h1>
            <form ref={Form} className='flex flex-col gap-4 ' onSubmit={handleFinishNewproduct} >
                <div class="sm:col-span-2">
                    <select id="category"
                        name='product'
                        onChange={handleSelectNewProduct}
                        required
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option value="">Seleccionar productos</option>
                        {
                            productos ? productos.map(({ name, description, precio }) => {

                                return <option value={JSON.stringify({ name, description, precio })}>{`${name} - RD$${precio}`}</option>
                            })
                                : <option value="">Cargando productos...</option>
                        }
                    </select>

                </div>
                <div className='flex flex-row justify-between'>
                    <button
                        onClick={() => { cant > 1 ? setCant(cant - 1) : console.log("cant min") }}
                        type='button'
                        class="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z" /></svg>
                        <span class="sr-only">Arrow key left</span>
                    </button>

                    <label
                        name="cant"
                        value={cant}
                    >{cant}</label>

                    <button
                        onClick={() => { setCant(cant + 1) }}
                        type='button'
                        class="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" /></svg>
                        <span class="sr-only">Arrow key right</span>
                    </button>
                </div>
                <div className='flex flex-col border-b p-3 border-gray-400 ' >
                    <span className='flex justify-between'>
                        <label>
                            Subtotal:
                        </label>
                        <label> {formatearCantidadDeDinero(subtotal)}</label>
                    </span>
                    <span className='flex justify-between'>
                        <label>Itbis:</label>
                        <label> {formatearCantidadDeDinero(itbis)}</label>
                    </span>
                </div>
                <span className='flex justify-between'>
                    <label>Total(RD$):</label>
                    <label>{formatearCantidadDeDinero(total)}</label>
                </span>

                <button
                    type='submit'
                    class="flex flex-row justify-center text-sm py-2 px-4 bg-transparent text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                >

                    <span className='ml-2'>
                        Finalizar
                    </span>
                </button>
            </form>
            {/* New product */}
        </div>
    )
}

export default NewProductForm