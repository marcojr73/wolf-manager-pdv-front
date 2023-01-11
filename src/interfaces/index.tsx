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


export type {
    TsignUp,
    TsignIn,
    TstateUser,
    TnewUser
}