"use client"
import React, { useState, useEffect } from 'react'
import DataTable from '../../../../components/table'
import useAppContext from '@/app/context/context'
import NewProductForm from '../components/newProductForm'
import { getProducts } from '@/app/db/controllers/products'


const today = new Date();
const year = today.getFullYear().toString();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDay()
const dateCreated = `${year}${month}`;

const column = [

    { field: 'id', headerName: '#', width: 50 },
    { field: 'cant', headerName: 'Cantidad', width: 100 },
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
    const [cliente, setCliente] = useState({});
    const [listOfProducts, setListOfProducts] = useState([]);
    const [NewProduct, setNewProduct] = useState({})


    const [productData, setProductData] = useState([])
    const [facturaProduct, setFacturaProduct] = useState([])
    const [showNewProduct, setShowNewProduct] = useState(true)
    const [cant, setCant] = useState(1)

    const { user } = useAppContext()

    const fetchData = async () => {
        const rowData = await getProducts(user.uid);
        setProductData(rowData);
    };

    useEffect(() => {
        setProveedor(user.proveedores);
        fetchData();
    }, [user])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFactura((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleClienteChange = (event) =>{
        const {name, value} = event.target
        setCliente((prevData) => ({...prevData, [name]:value }))
    }

    const handleChangeNewProduct = (event) => {
        const { name, value } = event.target
        setNewProduct((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleFinishNewproduct = (event) => {
        event.preventDefault()
        setNewProduct((prevData) => ({ ...prevData, cant: cant }))
        console.log(NewProduct)
        setFactura({cliente,listOfProducts})
        console.log(factura)
    }

    return (
        <div className="flex flex-col p-4 mt-14">
            <div className='flex flex-row justify-between mb-2'>
                <h1 className=' font-bold text-2xl '>Productos</h1>
                <div className='flex gap-2 '>

                    <button
                        onClick={() => { console.log(user) }}
                        className=' w-8 bg-white rounded-sm transform transition-transform hover:rotate-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>

                    </button>

                    {/* Preview */}
                    <button
                        onClick={() => { console.log(productData) }}
                        className=' w-8 bg-white rounded-sm transform transition-transform hover:rotate-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>

                    </button>
                </div>
            </div>

            <div className='flow flex-col bg-white items-center min-h-screen justify-center p-5'>

                {/* New product TODO: MakeComponent */}
                <div className={` ${showNewProduct ? "fixed" : "hidden"} flex flex-col items-center justify-center   right-0  p-5  w-64 z-50 bg-white border-2 border-black rounded-md `}>
                    <h1 className=' font-semibold text-xl mb-3'>
                        Producto o Servicio
                    </h1>
                    <form className='flex flex-col gap-4 ' onSubmit={handleFinishNewproduct} >
                        <div class="sm:col-span-2">
                            <select id="category"
                                name='product'
                                onChange={handleChangeNewProduct}
                                required
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="">Seleccionar productos</option>
                                {
                                    productData ? productData.map(({ name, precio }) => {

                                        return <option value={ {name,precio} }>{`${name} - RD$${precio}`}</option>
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
                                onChange={handleChangeNewProduct}
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
                                <label>0</label>
                            </span>
                            <span className='flex justify-between'>
                                <label>Itbis:</label>
                                <label>0</label>
                            </span>
                        </div>
                        <span className='flex justify-between'>
                            <label>Total:</label>
                            <label>0</label>
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
                </div>
                {/* New product */}

                <div className='p-3'>

                    {/* Datos del cliente TODO: MakeComponent */}
                    <div className=" border-b p-3 border-gray-400 ">
                        <h1 className='font-bold text-xl mb-5'>Cliente</h1>
                        <form className='flex justify-between gap-6 flex-row'>
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    onChange={handleClienteChange}
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
                                    onChange={handleClienteChange}
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
                                    onChange={handleClienteChange}
                                    value=""
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="809 786 4567" />
                            </div>

                        </form>

                    </div>

                    {/* Tabla de facturas */}
                    <div className='my-4'>
                        <DataTable column={column} row={row} />
                    </div>

                    {/* Bottones */}
                    <div className='flex justify-between'>

                        <button
                            onClick={() => setShowNewProduct(true)}
                            class="flex flex-row  text-sm py-2 px-4 bg-transparent text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <path d="M12 8v8M8 12h8" />
                            </svg>
                            <span className='ml-2'>
                                Agregar producto
                            </span>
                        </button>

                        <button
                            class="flex flex-row  text-sm py-2 px-4 bg-transparent text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                                <path d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z"></path>
                            </svg>

                            <span className='ml-2'>
                                Finalizar
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}