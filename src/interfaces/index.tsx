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

type IstateUser = {
    user: {
        businessName: string
        clients: {
            name: string
            allPurchases: number
            debit: number
        }[] | never[];
    }
    setUser: (newState: {
        businessName: string
        clients: {
            name: string
            allPurchases: number
            debit: number
        }[]
    }) => void
}

type TnewUser = {
    name: string
}


export type {
    TsignUp,
    TsignIn,
    IstateUser,
    TnewUser
}