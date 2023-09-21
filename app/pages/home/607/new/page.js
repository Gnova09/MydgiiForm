"use client"
import React, { useState, useEffect } from 'react'
import DataTable from '../../../../components/table'
import useAppContext from '@/app/context/context'
import { newForm606 } from '@/app/db/controllers/userdata'


const column = [
    { field: 'id', headerName: 'NCF', width: 130 },
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

export default function Pages() {
    //STATE APP//
    const { user } = useAppContext()

    
    
    //FORM STATES//
    const [row, setrow] = useState([])    
    const [provee, setprovee] = useState("") //usuario
    const [form606, setform606] = useState({
        provee,
        dateCreated,
        totalRow: row.length,
        row
    });
    const [bienes, setbienes] = useState()
    const [NCF, setNCF] = useState()
    const [Date, setDate] = useState()
    const [Monto, setMonto] = useState()
    const [propina, setpropina] = useState()
    const [Fpago, setFpago] = useState()
    const [Itbis, setItbis] = useState(false)
    const [Itbis2, setItbis2] = useState(false)
    const [Itbis10, setItbis10] = useState(false)
    const [proveedor, setProveedor] = useState([])

    useEffect(() => {
        setform606({
            ...form606,
            user: user.rnc,
            totalRow: row.length,
            row
        })
        // eslint-disable-next-line
    }, [row])

    useEffect(()=>{
        setProveedor(user.proveedores);
    },[user])

    const handleReset = () => {
       setprovee("")
        setbienes("")
        setNCF('');
        setDate("")
        setMonto("")
        setpropina('');
        setFpago('');
        setItbis2(false);
        setItbis10(false);
        setItbis(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setrow([
            ...row,
            {
                id: NCF,
                ID: provee.tipoID,
                RNC: provee.rnc,
                bienes,
                NCF,
                Date,
                Monto,
                propina,
                Fpago,
                Itbis: Itbis ? Monto * 0.18 : 0,
                Itbis2: Itbis2 ? Monto * 0.02 : 0,
                Itbis10: Itbis10 ? Monto * 0.10 : 0
            }
        ])
        
        handleReset()
    }

    const handleSelectProveedor = (rnc) => {
        setprovee(proveedor.find(prove => prove.rnc === rnc))
    }

    const handleFinish = async (e) => {
       
      await newForm606(form606, user.uid);

        window.location.href = '/pages/home/606';
    }

    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Nuevo Formulario</h2>
                <form onSubmit={handleSubmit}>
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                        {/* RNC/Cedula */}
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proveedor *</label>
                            <select id="category"
                                onChange={(event) => handleSelectProveedor(event.target.value)}
                                required
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="">Seleccionar Proveedor</option>
                                {
                                    proveedor? 
                                    proveedor.map(({ rnc, name }, i) => {

                                        return <option key={i} value={rnc}>{`${name} - ${rnc}`}</option>
                                    }):
                                    <option value="">Cargando proveedores...</option>
                                }

                            </select>
                        </div>

                        {/*Bienes y servicios */}
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bienes y servicios comprados *</label>
                            <select
                                required
                                onChange={(event) => setbienes(event.target.value)}
                                value={bienes}
                                id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="">Seleccionar uno </option>
                                <option value="01">01-Gastos de personal</option>
                                <option value="02">02-Gastos por trabajos, suministros y servicios</option>
                                <option value="03">03-Arrendamientos</option>
                                <option value="04">04-Gastos de activos fijos</option>
                                <option value="05">05-Gastos de representacion</option>
                                <option value="06">06-Otras deducciones admitidas</option>
                                <option value="07">07-Gastos financieros</option>
                                <option value="08">08-Gastos extraordinarios</option>
                                <option value="09">09-Compras y gastos que formaran parte del costo de venta</option>
                                <option value="10">10-Adquisicion de activos</option>
                                <option value="11">11-Gastos de seguros</option>
                            </select>
                        </div>

                        {/*NCF */}
                        <div class="w-full">
                            <label for="NCF" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NCF *</label>
                            <input type="text"
                                required
                                value={NCF}
                                onChange={(event) => setNCF(event.target.value)}
                                name="NCF" id="NCF" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="000000000" />
                        </div>

                        {/*Fechas */}
                        <div class="w-full">
                            <label for="Fcomprobante" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de comprobante *</label>
                            <input type="date"
                                required
                                value={Date}
                                onChange={(event) => setDate(event.target.value)}
                                name="Fcomprobante" id="Fcomprobante" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="000000000" />
                        </div>


                        {/*Montos */}
                        <div>
                            <label for="Mservicios" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto en Servicios ($RD) *</label>
                            <input
                                required
                                value={Monto}
                                onChange={(event) => setMonto(event.target.value)}
                                type="number" name="Mservicios" id="Mservicios" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="RD$ 10,000.00" />
                        </div>
                        <div>
                            <label for="Propina" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto en Propina ($RD)</label>
                            <input

                                value={propina}
                                onChange={(event) => setpropina(event.target.value)}
                                type="number" name="Propina" id="Propina" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="RD$ 10,000.00" />
                        </div>

                        {/*Forma de pago */}
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Formas de pago *</label>
                            <select
                                required
                                value={Fpago}
                                onChange={(event) => setFpago(event.target.value)}
                                id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="">Seleccionar uno </option>
                                <option value="01">01-Efectivo</option>
                                <option value="02">02-Cheques/Transferencias</option>
                                <option value="03">03-Tarjeta de Credito/Debito</option>
                                <option value="04">04-Compra a credito</option>
                                <option value="05">05-Permuta</option>
                                <option value="06">06-Nota de credito</option>
                                <option value="07">07-Mixto</option>
                            </select>
                        </div>

                        {/*ITBIS */}
                        <div class="sm:col-span-2">
                            <label for="Mservicios" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ITBIS</label>
                            <div class="flex items-center ">
                                <input

                                    onChange={(event) => setItbis2(!Itbis2)}
                                    checked={Itbis2 ? true : false}
                                    id="default-checkbox" type="checkbox" value={true} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2%</label>
                            </div>
                            <div class="flex items-center">
                                <input
                                    checked={Itbis10 ? true : false}
                                    onChange={(event) => setItbis10(!Itbis10)}
                                    id="checked-checkbox" type="checkbox" value={true} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">10%</label>
                            </div>
                            <div class="flex items-center">
                                <input

                                    checked={Itbis ? true : false}
                                    onChange={(event) => setItbis(!Itbis)}
                                    id="checked-checkbox" type="checkbox" value={true} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">18%</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Agregar
                    </button>
                </form>
            </div>
            <div className='w-full px-5 mt-2'>

                <DataTable column={column} row={row} />

                <button
                    onClick={handleFinish}
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Finalizar
                </button>
            </div>
        </section>
    )
}