import { useContext, useState } from "react"
import React from "react"

import ElevatedSection from "../components/home/elevatedSection"
import Clients from "../components/home/elevatedSection/clients"
import VerticalMenu from "../components/home/verticalMenu"
import User from "../components/home/user"
import ContainerHome from "../styles/home"
import { ThemeProvider } from "styled-components"
import { themeContext } from "../provider/themeProvider"

function Home() {
    const [functionality, setFunctionality] = useState(<Clients />)
    const { theme } = useContext(themeContext)
    return (
        <ThemeProvider theme={theme}>
            <ContainerHome>
                <VerticalMenu setFunctionality={setFunctionality} />
                <main>
                    <User />
                    <ElevatedSection functionality={functionality} />
                </main>
            </ContainerHome>
        </ThemeProvider>
    )
}

export default Home