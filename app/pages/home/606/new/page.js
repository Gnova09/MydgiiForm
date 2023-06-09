import React from 'react'

export default function pages() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                <form action="#">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                        {/* RNC/Cedula */}
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RNC/Cedula</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Seleccionar Cliente</option>
                                <option value="TV">cliente 1</option>
                                <option value="PC">cliente 1</option>
                                <option value="GA">cliente 1</option>
                                <option value="PH">cliente 1</option>
                            </select>
                        </div>

                        {/* Tipo de ID */}
                        <div class="w-full">
                            <label for="TID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo ID</label>
                            <input type="number" name="TID" id="TID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ID" required="" />
                        </div>

                        {/*Bienes y servicios */}
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bienes y servicios comprados</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Seleccionar uno </option>
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
                            <label for="NCF" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NCF</label>
                            <input type="text" name="NCF" id="NCF" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="000000000" required="" />
                        </div>

                        {/*Fechas */}
                        <div class="w-full">
                            <label for="Fcomprobante" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de comprobante</label>
                            <input type="date" name="Fcomprobante" id="Fcomprobante" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="000000000" required="" />
                        </div>


                        {/*Montos */}
                        <div>
                            <label for="Mservicios" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto en Servicios ($RD)</label>
                            <input type="number" name="Mservicios" id="Mservicios" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="RD$ 10,000.00" required="" />
                        </div>
                        <div>
                            <label for="Propina" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monto en Propina ($RD)</label>
                            <input type="number" name="Propina" id="Propina" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="RD$ 10,000.00" required="" />
                        </div>

                        {/*Forma de pago */}
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Formas de pago</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Seleccionar uno </option>
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
                                <input id="default-checkbox" type="checkbox" value="2%" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2%</label>
                            </div>
                            <div class="flex items-center">
                                <input id="checked-checkbox" type="checkbox" value="10%" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">10%</label>
                            </div>
                            <div class="flex items-center">
                                <input id="checked-checkbox" type="checkbox" value="18%" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">18%</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Add product
                    </button>
                </form>
            </div>
        </section>
    )
}