import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import authApi from "../../api/authApi"
import Loader from "../../utils/Loader"
import { messageTranslation } from "../../utils/messageTranslation"
import showError from "../../utils/showError"

function SignUpForm({ isSignIn, setIsSignIn }: { isSignIn: boolean, setIsSignIn: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [textButton, setTextButton] = useState<string | JSX.Element>("Criar")
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            email: "",
            businessName: "",
            cnpj: "",
            password: ""
        }
    })
    async function signUp(data: any) {
        try {
            setTextButton(<Loader />)
            const response = await authApi.signUpApi(data)
            const message = messageTranslation(response)
            reset()
            setIsSignIn(!isSignIn)
            toast(message)
        } catch (error: any) {
            setTextButton("Criar")
            showError(error)
        }
    }

    return (
        <form>
            <h1>Registre-se e comece a usar agora!</h1>
            <div className="input-container">
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
            </div>
            <div className="button-container">
                <button type="button" className="button" onClick={() => handleSubmit(signUp)()}>{textButton}</button>
            </div>
            <p className="message" onClick={() => setIsSignIn(!isSignIn)}>Já possui uma conta?</p>
        </form>
    )
}

export default SignUpForm