/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useState } from "react"
import dark from "../styles/themes/dark"

type TProps = {
    children: ReactNode
}

const initialValue = {
    theme: dark,
    setTheme: () => { }
}

type Ttheme = {
    theme: {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            white: string;
            black: string;
        };
    },
    setTheme: (newState: {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            white: string;
            black: string;
        };
    },) => void
}

export const themeContext = createContext<Ttheme>(initialValue)

export const ThemeContextProvider = ({ children }: TProps) => {
    const [theme, setTheme] = useState(initialValue.theme)
    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}