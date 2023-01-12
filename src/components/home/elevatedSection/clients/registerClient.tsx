import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import clientsApi from "../../../../api/clientsApi"
import { businessContext } from "../../../../provider"
import ContainerNewClient from "../../../../styles/home/elevatedSection/clients/ContainerNewClient"
import showError from "../../../../utils/showError"

function RegisterClients() {
    const { business, setBusiness } = useContext(businessContext)
    console.log(business)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            street: "",
            number: "",
            phone: ""
        }
    })

    async function onSubmit(data: any) {
        try {
            await clientsApi.newClientApi(data)
            const response = await clientsApi.getClientsApi()
            toast("Sucesso")
            setBusiness(response)
        } catch (error: any) {
            showError(error)
        }
    }

    return (
        <ContainerNewClient>
            <h1>Clientes</h1>
            <div className="new-client">
                <div className="input-field name">
                    <input type="text" placeholder="Nome" {...register("name", { required: true })} />
                    {errors?.name?.type === "required" ?
                        <p className="input-error">Obrigatório</p> : null}
                </div>
                <div className="input-field phone">
                    <input type="text" placeholder="Telefone" {...register("phone", { required: true })} />
                    {errors?.name?.type === "required" ?
                        <p className="input-error">Obrigatório</p> : null}
                </div>
                <div className="input-field street">
                    <input type="text" placeholder="Rua" {...register("street", { required: true })} />
                    {errors?.name?.type === "required" ?
                        <p className="input-error">Obrigatório</p> : null}
                </div>
                <div className="input-field number">
                    <input type="number" placeholder="N°" {...register("number", { required: true })} />
                    {errors?.name?.type === "required" ?
                        <p className="input-error">Obrig...</p> : null}
                </div>
            </div>
            <button type="button" onClick={() => handleSubmit(onSubmit)()}>Novo</button>
        </ContainerNewClient>
    )
}

export default RegisterClients