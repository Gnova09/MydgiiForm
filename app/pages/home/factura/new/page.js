"use client"
import React, { useState, useEffect } from 'react'
import DataTable from '../../../../components/table'
import useAppContext from '@/app/context/context'
import NewProductForm from '../components/newProductForm'
import { getProducts } from '@/app/db/controllers/products'
import { newFactura } from '@/app/db/controllers/facturas'
import { formatearCantidadDeDinero } from '@/app/helpers/formatDinero'


const today = new Date();
const year = today.getFullYear().toString();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDay()
const dateCreated = `${day}/${month}/${year}`;



export default function pages() {
    //STATE APP//
    const [proveedor, setProveedor] = useState();

    const [factura, setFactura] = useState();
    const [Tsubtotal, setTsubtotal] = useState(0)
    const [Titbis, setTitbis] = useState(0)
    const [fTotal, setFTotal] = useState(0)
    const [cliente, setCliente] = useState({
        name: "",
        nota: "",
        rnc: "",
        tel: ""
    });

    const [productData, setProductData] = useState([])
    const [listOfProducts, setListOfProducts] = useState([]);
    const [showNewProduct, setShowNewProduct] = useState(false)
    const [row, setRow] = useState([])

    const { user, toast } = useAppContext()
    const { setTextToast, setShowToast } = toast

    const toastCall = (text) => {
        setTextToast(text);
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
            setTextToast("");
        }, 3000);
    };


    //Estructura de la tabla
    const eliminarObjeto = (indice) => {
        const nuevoArreglo = listOfProducts.filter((_, index) => index !== (indice-1));
        setListOfProducts(nuevoArreglo);
    };

    const TableData = () => {
        setRow(
            listOfProducts.map((product, indice) => {
                return {
                    id: indice + 1,
                    ...product,
                    total: formatearCantidadDeDinero(product.total),
                    itbis: formatearCantidadDeDinero(product.itbis),
                    subtotal: formatearCantidadDeDinero(product.subtotal),
                    precio: formatearCantidadDeDinero(product.precio),
                }
            })
        )
    }

    const column = [

        { field: 'id', headerName: '#', width: 50 },
        { field: 'cant', headerName: 'Cantidad', width: 100 },
        { field: 'name', headerName: 'Nombre', width: 130 },
        { field: 'description', headerName: 'Descripcion', width: 170 },
        { field: 'precio', headerName: 'Precio($RD)', width: 170 },
        { field: 'subtotal', headerName: 'SubTotal', width: 170 },
        { field: 'itbis', headerName: 'ITBIS(18%)', width: 170 },
        { field: 'total', headerName: 'Total', width: 170 },
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            ),
        },

    ]



    const calcFactura = () => {

        if (listOfProducts.length > 0) {

            const totalPrecios = listOfProducts.reduce((acumulador, producto) => acumulador + producto.precio, 0);
            const totalSubtotal = listOfProducts.reduce((acumulador, producto) => acumulador + producto.subtotal, 0);
            const totalItbis = listOfProducts.reduce((acumulador, producto) => acumulador + producto.itbis, 0);

            setFTotal(totalPrecios)
            setTitbis(totalItbis)
            setTsubtotal(totalSubtotal)

           /*  listOfProducts.map(({ itbis, subtotal, total }) => {

                const ft =  (Number(total) + Number(fTotal)).toFixed(2)

                const Tit = (Number(Titbis) + Number(itbis)).toFixed(2)

                const Tsub = (Number(subtotal) + Number(Tsubtotal)).toFixed(2)
            }) */

        } else {

            setTitbis(0)
            setFTotal(0)
            setTsubtotal(0)
        }
    }

    const fetchData = async () => {
        const rowData = await getProducts(user.uid);
        setProductData(rowData);
    };

    useEffect(() => {
        setProveedor(user.proveedores);
        fetchData();
    }, [user])

    useEffect(() => {
        calcFactura()
        TableData()
        setFactura({
            ...cliente,
            listOfProducts,
            dateCreated,
            fTotal,
            Titbis,
            Tsubtotal
        })
    }, [cliente, listOfProducts, dateCreated])

    const handleClienteChange = (event) => {
        const { name, value } = event.target
        setCliente((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleFinish = (event) => {
        event.preventDefault()
       
        listOfProducts.length === 0 ? toastCall("Debe agregar productos") :
            newFactura({ factura, uid: user.uid }) 
    }

    return (
        <div className="flex flex-col p-4 mt-14">
            <div className='flex flex-row justify-between mb-2'>
                <h1 className=' font-bold text-2xl '>Nueva Factura</h1>
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

                <NewProductForm showNewProduct={showNewProduct} cerrar={() => { setShowNewProduct(false) }} productos={productData} agregarProducto={setListOfProducts} />

                <form className='p-3' onSubmit={handleFinish}>

                    {/* Datos del cliente TODO: MakeComponent */}
                    <div className=" border-b p-3 border-gray-400 ">
                        <h1 className='font-bold text-xl mb-5'>Cliente</h1>
                        <div className='flex justify-between gap-6 flex-row'>
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    onChange={handleClienteChange}
                                    required
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                                    required
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="00123456789" />
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
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="809 786 4567"
                                />
                            </div>

                        </div>



                    </div>

                    {/* Tabla de facturas */}
                    <div className='my-4'>
                        <DataTable column={column} row={row} />
                    </div>
                    {/* Totales de la factura */}
                    <div className='my-4'>
                        <div className='flex flex-col border-b p-3 border-gray-400 ' >
                            <span className='flex justify-between'>
                                <label>
                                    Subtotal:
                                </label>
                                <label> {formatearCantidadDeDinero(Tsubtotal)}</label>
                            </span>
                            <span className='flex justify-between'>
                                <label>Itbis:</label>
                                <label> {formatearCantidadDeDinero(Titbis)}</label>
                            </span>
                            <span className='flex justify-between'>
                                <label>Total:</label>
                                <label> {formatearCantidadDeDinero(fTotal)}</label>
                            </span>
                        </div>
                    </div>


                    {/* Nota de la factura */}
                    <div class="py-2 px-4 mb-4 mt-4 bg-white rounded-lg rounded-t-lg border border-gray-400 dark:bg-gray-800 dark:border-gray-700">
                        <label for="comment" class=" sr-only">Nota de la factura</label>
                        <textarea id="comment" rows="6"
                            onChange={handleClienteChange}
                            name='nota'
                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Agregar una nota a la factura" ></textarea>
                    </div>

                    {/* Bottones */}
                    <div className='flex justify-between'>

                        <button
                            type='button'
                            onClick={() => setShowNewProduct(true)}
                            class="flex flex-row text-sm py-2 px-4 bg-transparent text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
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
                            type='submit'
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
                </form>
            </div>
        </div>
    )

}