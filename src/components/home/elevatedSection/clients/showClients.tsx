import React, { useContext, useEffect } from "react"
import clientsApi from "../../../../api/clientsApi"
import showError from "../../../../utils/showError"
import { businessContext } from "../../../../provider"

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
            <h1>Você ainda não cadastrou nenhum cliente</h1>
            :
            <ul className="square">
                <li className="top">
                    <p className="index">#</p>
                    <p className="name">Nome</p>
                    <p className="all-purchases">Valor total em compras</p>
                    <p className="debit">Valor em débito</p>
                </li>
                {business.clients.map((client, index) => {
                    return (
                        <li key={index}>
                            <p className="index">{index}</p>
                            <p className="name">{client.name}</p>
                            <p className="all-purchases">{client.allPurchases}</p>
                            <p className="debit">{client.debit}</p>
                        </li>
                    )
                })}
            </ul>
    )
}

export default ShowClients