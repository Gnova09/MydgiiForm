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
    const [form606Data, setform606Data] = useState([
        { id: 1, date: '2023/03/02', cliente: 'Jon', registro: 35 },
        { id: 2, date: '2023/03/02', cliente: 'Cersei', registro: 42 },
        { id: 3, date: '2023/03/02', cliente: 'Jaime', registro: 45 },
        { id: 4, date: '2023/03/02', cliente: 'Arya', registro: 16 },
        { id: 5, date: '2023/03/02', cliente: 'Daenerys', registro: null },
        { id: 6, date: '2023/03/02', cliente: "Daenerys", registro: 150 },
        { id: 7, date: '2023/03/02', cliente: 'Ferrara', registro: 44 },
        { id: 8, date: '2023/03/02', cliente: 'Rossini', registro: 36 },
        { id: 9, date: '2023/03/02', cliente: 'Harvey', registro: 65 },
      ]);
    const [clientes, setclientes] = useState([]);
    const [newform, setnewform] = useState([]);

    //ComponentDidMouunt
    useEffect(() => {

    }, []);

    //
    const values = useMemo(() => (
        {
            // Funciones que son exportadas para manejo externo.
            user, setUser,
            IsOpenAvatarmenu,IsOpenSidebar,
            setIsOpenSidebar, setIsOpenAvatarmenu,
            form606Data, setform606Data,
            clientes, setclientes,
            newform, setnewform
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


