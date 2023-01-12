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
                console.log(response)
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
                            <p className="phone">Telefone</p>
                            <p className="Adress">Endereço</p>
                            <p className="debit">Valor em débito</p>
                        </div>
                    </li>
                    {/* {business.clients.map((client, index) => {
                        return (
                            <li key={index}>
                                <p className="index">{index}</p>
                                <p className="name">{client.name}</p>
                                <p className="all-purchases">{client.allPurchases}</p>
                                <p className="debit">{client.debit}</p>
                            </li>
                        )
                    })} */}
                </ul>
            </ContainerShowClients>
    )
}

export default ShowClients