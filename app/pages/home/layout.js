
import React from 'react'
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

const Navigation = ({children}) => {

    return (
        <div>

           <Navbar />


            <div class="p-4 sm:ml-64">
            {children}
            </div>

            <Sidebar />
        </div>
    )
}

export default Navigation