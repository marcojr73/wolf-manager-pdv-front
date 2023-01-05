/* eslint-disable @typescript-eslint/no-empty-function */
import react, { useState } from "react"
import React from "react"
import { IstateUser } from "../interfaces"
import { TbusinessContextProps } from "../interfaces/reactTypes"

const value = {
    user: {
        businessName: "",
        clients: [
            {
                name: "",
                allPurchases: 0,
                debit: 0
            },
        ]
    },
    setUser: () => { }
}

export const UserContext = react.createContext<IstateUser>(value)

export const UserContextProvider = ({ children }: TbusinessContextProps) => {
    const [user, setUser] = useState(value.user)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}