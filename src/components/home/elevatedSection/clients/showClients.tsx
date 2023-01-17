import React, { useContext, useEffect } from "react"
import clientsApi from "../../../../api/clientsApi"
import showError from "../../../../utils/showError"
import { businessContext } from "../../../../provider"
import ContainerShowClients from "../../../../styles/home/elevatedSection/clients/ContainerShowClients"

function ShowClients() {
    const { business, setBusiness } = useContext(businessContext)

    useEffect(() => {
        (async function () {
            try {
                const response = await clientsApi.getClientsApi()
                setBusiness(response)
            } catch (error) {
                console.log(error)
                showError(error)
            }
        })()
    }, [])

    return (
        business.clients.length === 0 ?
            <ContainerShowClients>
                <h1>Você ainda não cadastrou nenhum cliente</h1>
            </ContainerShowClients>
            :
            <ContainerShowClients>
                <ul className="square">
                    <li className="top">
                        <div className="user">
                            <p className="index">#</p>
                            <p className="name">Nome</p>
                        </div>
                        <div className="info">
                            <p className="info-item">Telefone</p>
                            <p className="info-item">Endereço</p>
                            <p className="info-item">Valor em débito</p>
                        </div>
                    </li>
                    {business.clients.map((client, index) => {
                        return (
                            <li key={index}>
                                <div className="user">
                                    <p className="index">{client.id}</p>
                                    <p className="name">{client.name}</p>
                                </div>
                                <div className="info">
                                    <p className="info-item">{client.phone}</p>
                                    <p className="info-item">{client.adress.street}, {client.adress.number}</p>
                                    <p className="info-item">{client.debit}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </ContainerShowClients>
    )
}

export default ShowClients