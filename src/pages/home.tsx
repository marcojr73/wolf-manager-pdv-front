import { useState } from "react"
import React from "react"

import ElevatedSection from "../components/home/elevatedSection"
import Clients from "../components/home/elevatedSection/clients"
import VerticalMenu from "../components/home/verticalMenu"
import User from "../components/home/user"
import ContainerHome from "../styles/home"

function Home(){
    const [ functionality, setFunctionality ] = useState(<Clients/>)
    return (
        <ContainerHome>
            <VerticalMenu setFunctionality={setFunctionality}/>
            <main>
                <User/>
                <ElevatedSection functionality={functionality}/>
            </main>
        </ContainerHome>
    )
}

export default Home