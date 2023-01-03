import React from "react"

import ContainerClients from "../../../styles/home/elevatedSection/containerClients"

function Clients(){
    return (
        <ContainerClients>
            <div className="top-side">
                <h1>Clientes</h1>
                <div className="new-client">
                    <input className="input-name" type="text" placeholder="Nome" />
                    <button>Novo</button>
                </div>
            </div>
        </ContainerClients>
    )
}

export default Clients