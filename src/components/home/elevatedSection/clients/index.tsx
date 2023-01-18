import React from "react"

import ContainerClients from "../../../../styles/home/elevatedSection/clients"
import RegisterClients from "./registerClient"
import ShowClients from "./showClients"

function Clients(){
    return (
        <ContainerClients>
            <RegisterClients/>
            <ShowClients/>
        </ContainerClients>
    )
}

export default Clients