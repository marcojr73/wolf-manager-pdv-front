import { ReactNode } from "react"

interface TsignUp {
    email: string,
    businessName: string,
    cnpj: string,
    password: string,
}

interface TsignIn {
    email: string,
    password: string,
}

type TstateUser = {
    user:  string
    setUser: (newState: string)  => void
}

type TnewUser = {
    name: string
}

type Tbusinesscontext = {
    business: {
        businessName: string;
        clients: {
            id: number;
            name: string;
            phone: string;
            debit: number;
            adress: {
                street: string;
                number: string;
            };
        }[];
    },
    setBusiness: (newState: {
        businessName: string;
        clients: {
            id: number;
            name: string;
            phone: string;
            debit: number;
            adress: {
                street: string;
                number: string;
            };
        }[];
    },) => void
}

type Tprops = {
    children: ReactNode
}

interface TnewProduct {
    nameProduct: string,              
    description: string | null,              
    picture:  string | null,
    provider:  string,
    brand:  string | null,
    code:  number | string,
    codeBar:  string
    stock: number | string,
    unitMeasurement: string,
    costPrice: number | string,
    salePrice: number | string,
    validate: number | null | string,
    icms:  number | string
}

export type {
    TsignUp,
    TsignIn,
    TstateUser,
    TnewUser,
    Tbusinesscontext,
    Tprops,
    TnewProduct
}