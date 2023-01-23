import Router from "next/router"
import React from "react"
import ContainerExit from "../../../styles/home/elevatedSection/ContainerExit"

function Exit() {
    return (
        <ContainerExit>
            <h1>Deseja mesmo sair?</h1>
            <button type="button" onClick={() => Router.push("/")}>Sair</button>
        </ContainerExit>
    )
}

export default Exit