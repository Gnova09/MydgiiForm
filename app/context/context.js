"use client"

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { authState, getForm606, getUserByUid } from '../db/controllers/userdata';


//Context
export const AppContext = createContext();

//Provider
export const AppContextProvider = ({ children }) => {
    //Estados de mi aplicacion
    const [islogin, setIslogin] = useState(false);
    const [IsOpenSidebar, setIsOpenSidebar] = useState();
    const [IsOpenAvatarmenu, setIsOpenAvatarmenu] = useState(false);
    const [form606Data, setform606Data] = useState([]);
    const [proveedor, setproveedor] = useState([
        {
            name: "Georges Bueno",
            rnc: "40215081338",
            tipoID: 1
        },
        {
            name: "Arancha Nicole",
            rnc: "40583496338",
            tipoID: 2
        },
        {
            name: "Genesis cruz",
            rnc: "40338862105",
            tipoID: 1
        },
        {
            name: "Juan perez",
            rnc: "40854237921",
            tipoID: 2
        },

    ]);
    const [newform, setnewform] = useState([]);
    const [user, setuser] = useState([]);

    //ComponentDidMouunt
    useEffect(() => {

    }, []);

    const verifyLogin = () => {


        if (islogin) {
            window.location.href = "/pages/home"
        } else {
            window.location.href = "/"
        }

    }

    //Sesion logeada
    useEffect(() => {
        const userFnc = async (user) => {
            if (user) {
               const usersign = await getUserByUid(user.uid)
                setuser({...user, ...usersign});
                setIslogin(true)

            } else {
                setIslogin(false)
            }
        }
        authState(userFnc)
    }, [islogin])

    //
    const values = useMemo(() => (
        {
            // Funciones que son exportadas para manejo externo.

            IsOpenAvatarmenu, IsOpenSidebar,
            setIsOpenSidebar, setIsOpenAvatarmenu,
            form606Data, setform606Data,
            proveedor, setproveedor,
            newform, setnewform,
            islogin, setIslogin,
            user, setuser,
            verifyLogin
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


