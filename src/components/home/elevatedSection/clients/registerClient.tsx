import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import clientsApi from "../../../../api/clientsApi"
import { businessContext } from "../../../../provider"
import showError from "../../../../utils/showError"

function RegisterClients() {
    const {business, setBusiness} = useContext(businessContext)
    console.log(business)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
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
        <div className="top-side">
            <h1>Clientes</h1>
            <div className="new-client">
                <div>
                    <input className="input-name" type="text" placeholder="Nome" {...register("name", { required: true })} />
                    {errors?.name?.type === "required" ?
                    <p className="input-error">insira um nome para o seu cliente</p> : null}
                </div>
                <button type="button" onClick={() => handleSubmit(onSubmit)()}>Novo</button>
            </div>
        </div>
    )
}

export default RegisterClients