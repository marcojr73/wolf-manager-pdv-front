import { Dispatch, ReactNode, SetStateAction } from "react"

type ISetState = Dispatch<SetStateAction<JSX.Element>>

type TbusinessContextProps = {
    children: ReactNode
}

export type {
    ISetState,
    TbusinessContextProps
} 