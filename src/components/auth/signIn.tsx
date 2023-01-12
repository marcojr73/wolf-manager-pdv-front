import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Router from "next/router"
import authApi from "../../api/authApi"
import showError from "../../utils/showError"
import Loader from "../../utils/Loader"


function SignInForm({ isSignIn, setIsSignIn }: { isSignIn: boolean, setIsSignIn: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [textButton, setTextButton] = useState<string | JSX.Element>("Entrar")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function signIn(data: any) {
        try {
            setTextButton(<Loader />)
            const response = await authApi.signInApi(data)
            localStorage.setItem("token", response)
            Router.push("./home")
        } catch (error: any) {
            setTextButton("Entrar?")
            showError(error)
        }
    }

    return (
        <form>
            <h1>Faça o login e acesse sua conta</h1>
            <div className="input-container">
                <input type="text" placeholder="email" {...register("email", { required: true, pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i })} />
                {errors?.email?.type === "required" || errors?.email?.type === "pattern" ?
                    <p className="input-error">insira um email válido</p> : null}

                <input type="password" placeholder="password" {...register("password", { required: true, minLength: 8 })} />
                {errors?.password?.type === "required" || errors?.password?.type === "minLength" ?
                    <p className="input-error">insira no mínimo 8 caracteres</p> : null}
            </div>
            <div className="button-container">
                <button className="button-git" type="button" onClick={() => null}>Login com o git-hub</button>
                <button type="button" className="button" onClick={() => handleSubmit(signIn)()}>{textButton}</button>
            </div>
            <p className="message" onClick={() => setIsSignIn(!isSignIn)}>Não possui uma conta?</p>
        </form>
    )
}

export default SignInForm