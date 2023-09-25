
import React from 'react'
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import { ToastSuccess } from '../../components/toast/toast';

const Navigation = ({children}) => {

    return (
        <div>

           <Navbar />


            <div class="p-4 sm:ml-64">
            {children}
            <ToastSuccess />
            </div>

            <Sidebar />
        </div>
    )
}

export default Navigation