import React from "react"
import { useForm } from "react-hook-form"
import clientsApi from "../../../../api/clientsApi"
import showError from "../../../../utils/showError"

function RegisterClients() {
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