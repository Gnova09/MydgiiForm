import Link from 'next/link'
import React from 'react'

export default function Page() {

  const rutas = [
    {
      tittle: "compras 606",
      link: "/pages/home/606",
      icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>,
    },
    {
      tittle: "Facturas",
      link: "/pages/home/factura",
      icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
    },
    {
      tittle: "Proveedores",
      link: "/pages/home/proveedores",
      icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
    },
    {
      tittle: "Products",
      link: "/pages/home/products",
      icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
    }
  ]

  return (
    <main className="flex  min-h-screen flex-row ">
      Copied!
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-white">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,
              subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them
              man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">

            {rutas.map(({ tittle, link, icon },i) => {

              return <div key={i} class="p-4  md:w-1/4 sm:w-1/2 w-full  transform hover:scale-105 transition duration-300 hover:cursor-pointer ">
                <div class="border-2 bg-slate-50  border-gray-200 px-4 py-6 rounded-lg">
                  <Link href={link}>
                    {icon}
                    <h2 class="title-font font-medium text-3xl text-gray-900">{tittle}</h2>
                  </Link>
                </div>
              </div>
            })

            }

          </div>
        </div>
      </section>
    </main>
  )
}