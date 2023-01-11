import React from "react"
import { useForm } from "react-hook-form"
import Router from "next/router"
import Image from "next/image"

import ContainerHeader from "../../styles/header"
import authApi from "../../api/authApi"
import showError from "../../utils/showError"

function Header() {
    return (
        <ContainerHeader>
            <section className="banner">
                <Image
                    src="/images/fox-cash.png"
                    alt="fox-cash-logo"
                    width={100}
                    height={100}
                    className="logo"
                />
                <h1>WolfManager - PDV</h1>
            </section>
        </ContainerHeader>
    )
}

export default Header

