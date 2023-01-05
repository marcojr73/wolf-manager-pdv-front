import React from "react"
import { useForm } from "react-hook-form"
import Router from "next/router"
import Image from "next/image"

import ContainerHeader from "../../styles/header"
import authApi from "../../api/authApi"
import showError from "../../utils/showError"

function Header({ isAuthenticated }: { isAuthenticated: boolean }) {
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

    async function onSubmit(data: any) {
        try {
            const response = await authApi.signInApi(data)
            localStorage.setItem("token", response)
            Router.push("./home")
        } catch (error: any) {
            showError(error)
        }
    }
    return (
        <ContainerHeader>
            <section className="banner">
                <Image
                    src="/images/fox-cash.png"
                    alt="fox-cash-logo"
                    width={10000}
                    height={10000}
                    className="logo"
                />
                <h1>WolfManager - PDV</h1>
            </section>
            {isAuthenticated ? <p className="business-name">Loja do marcola</p> :
                <form>
                    <div className="field-input-error">
                        <input type="text" placeholder="email" {...register("email", { required: true, pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i })} />
                        {errors?.email?.type === "required" || errors?.email?.type === "pattern" ?  
                        <p className="input-error">insira um email válido</p> : null}
                    </div>

                    <div className="field-input-error">
                        <input type="password" placeholder="password" {...register("password", { required: true, minLength: 8 })} />
                        {errors?.password?.type === "required" || errors?.password?.type === "minLength" ?
                        <p className="input-error">insira no mínimo 8 caracteres</p> : null}
                    </div>

                    <button type="button" onClick={() => handleSubmit(onSubmit)()}>Log-in</button>
                </form>
            }
        </ContainerHeader>
    )
}

export default Header

