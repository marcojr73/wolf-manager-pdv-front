/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useState} from "react"
import React from "react"

type TbusinessProps = {
    children: ReactNode 
}

const initialValue = {
    business: {
        businessName: "",
        clients: [{
            name: "",
            allPurchases: 0,
            debit: 0,
        }]
    },
    setBusiness: () => { }
}

type Tcontext = {
    business: {
        businessName: string;
        clients: {
            name: string;
            allPurchases: number;
            debit: number;
        }[];
    },
    setBusiness: (newState: {
        businessName: "",
        clients: [{
            name: "",
            allPurchases: 0,
            debit: 0,
        }]
    },) => void
}

export const businessContext = createContext<Tcontext>(initialValue)

export const BusinessContextProvider = ({ children }: TbusinessProps) => {
    const [business, setBusiness] = useState(initialValue.business)
    return (
        <businessContext.Provider value={{ business, setBusiness }}>
            {children}
        </businessContext.Provider>
    )
}