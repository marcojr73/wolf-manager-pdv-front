import { useForm } from "react-hook-form"
import React from "react"

import { toast } from "react-toastify"

import authApi from "../../api/authApi"
import {messageTranslation} from "../../utils/messageTranslation"
import ContainerSignUp from "../../styles/authpages/containerSignUp"

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues : {
            email: "",
            businessName: "",
            cnpj: "",
            password: ""
        }
    })

    async function onSubmit(data: any) {
        try {
            const response = await authApi.signUpApi(data)
            const message = messageTranslation(response)
            reset()
            toast(message)
        } catch (error: any) {
            const message = messageTranslation(error.response.data)
            toast.error(message)
        }
    }

    return (
        <ContainerSignUp>
            <div className="middle-bar"></div>
            <form>
                <h1>Registre-se e comece a usar agora!</h1>
                <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i })} />
                    {errors?.email?.type === "required" || errors?.email?.type === "pattern" ?  
                    <p className="input-error">insira um email válido</p> : null}
                
                <input type="text" placeholder="Nome do empreendimento" {...register("businessName", { required: true })} />
                    {errors?.businessName?.type === "required" ? 
                    <p className="input-error">insira o nome do seu negócio</p> : null}
                
                <input type="text" placeholder="CNPJ" {...register("cnpj", { required: true, pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/ })} />
                    {errors?.cnpj?.type === "required" || errors?.cnpj?.type === "pattern" ? 
                    <p className="input-error">insira um cnpj válido</p> : null}
                
                <input type="text" placeholder="Senha" {...register("password", { required: true, minLength: 8 })} />
                    {errors?.password?.type === "required" || errors?.password?.type === "minLength" ? 
                    <p className="input-error">insira no mínimo 8 caracteres</p> : null}
                
                <button type="button" onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
            </form>
        </ContainerSignUp>
    )
}

export default SignUp