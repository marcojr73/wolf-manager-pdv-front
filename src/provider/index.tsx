/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react"
import { Tbusinesscontext, Tprops } from "../interfaces"

const initialBusiness = {
    business: {
        businessName: "",
        clients: [{
            id: 0,
            name: "",
            phone: "",
            debit:  0,
            adress: {
                street: "",
                number: "",
            }
        }],
    },
    setBusiness: () => { }
}

export const businessContext = createContext<Tbusinesscontext>(initialBusiness)

export const BusinessContextProvider = ({ children }: Tprops) => {
    const [business, setBusiness] = useState(initialBusiness.business)
    return (
        <businessContext.Provider value={{ business, setBusiness }}>
            {children}
        </businessContext.Provider>
    )
}