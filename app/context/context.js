"use client"

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { authState, getForm606 } from '../db/controllers/userdata';


//Context
export const AppContext = createContext();

//Provider
export const AppContextProvider = ({ children }) => {
    //Estados de mi aplicacion
    const [islogin, setIslogin] = useState(false);
    const [IsOpenSidebar, setIsOpenSidebar] = useState(false);
    const [IsOpenAvatarmenu, setIsOpenAvatarmenu] = useState(false);
    const [form606Data, setform606Data] = useState([]);
    const [clientes, setclientes] = useState([
        {
            name:"Georges Bueno",
            rnc:"40215081338"
        },
        {
            name:"Arancha Nicole",
            rnc:"40583496338"
        },
        {
            name:"Genesis cruz",
            rnc:"40338862105"
        },
        {
            name:"Juan perez",
            rnc:"40854237921"
        },

    ]);
    const [newform, setnewform] = useState([]);

    //ComponentDidMouunt
    useEffect(() => {
       /*  if(islogin){
            window.location.href = "/pages/home"
        }else{
            window.location.href = "/"
        } */ 
    }, []);

    //Sesion logeada
    useEffect(()=>{
        const userFnc=(user)=>{
            if(user){
                setIslogin(true)
                
            }else{
                setIslogin(false)
            }
        }
            authState(userFnc)
    },[islogin])

    //
    const values = useMemo(() => (
        {
            // Funciones que son exportadas para manejo externo.
            
            IsOpenAvatarmenu,IsOpenSidebar,
            setIsOpenSidebar, setIsOpenAvatarmenu,
            form606Data, setform606Data,
            clientes, setclientes,
            newform, setnewform,
            islogin, setIslogin
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


