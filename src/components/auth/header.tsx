import React from "react"
import Image from "next/image"

import ContainerHeader from "../../styles/header"

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

