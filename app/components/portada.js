import React from 'react'
import Image from 'next/image'

const Portada = () => {
    return (
        <div className='w-1/2'>


            <div className='flex justify-center items-center  h-full w-full'>
            <Image src="/assets/workplace.jpg" width="5885" height="3789" className=' w-full h-full' />
               <div className='absolute w-fit flex flex-col  items-center'>
                <p className="">Nice to see you again</p>
                <h1 className='font-bold text-3xl'>Welcome Back</h1>
               </div>
            </div>


        </div>
    )
}

export default Portada