'use client'


import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export function Appwrapper({ children }){

    let [searchData , setSearchData] = useState([]);
    return (
        <UserContext.Provider value ={{searchData , setSearchData}}>
            {children}
        </UserContext.Provider>
    )
}


export function useUserContext() {
    return useContext(UserContext);
}