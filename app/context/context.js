"use client"

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';


//Context
export const AppContext = createContext();

//Provider
export const AppContextProvider = ({ children }) => {
    //Estados de mi aplicacion
    const [user, setUser] = useState("userdata!");
    const [IsOpenSidebar, setIsOpenSidebar] = useState(false);
    const [IsOpenAvatarmenu, setIsOpenAvatarmenu] = useState(false);

    //ComponentDidMouunt
    useEffect(() => {

    }, []);

    //
    const values = useMemo(() => (
        {
            // Funciones que son exportadas para manejo externo.
            user, setUser,
            IsOpenAvatarmenu,IsOpenSidebar,
            setIsOpenSidebar, setIsOpenAvatarmenu
        }));   // States que serán visibles en el contexto.

    // Interface donde será expuesto como proveedor y envolverá la App.
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        console.error('Error deploying App Context!!!');
    }

    return (context);
}

export default useAppContext;


