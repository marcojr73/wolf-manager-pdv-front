import { useState } from "react"
import React from "react"

import Header from "../components/header"
import ElevatedSection from "../components/home/elevatedSection"
import Clients from "../components/home/elevatedSection/clients"
import VerticalMenu from "../components/home/verticalMenu"

function Home(){
    const [ functionality, setFunctionality ] = useState(<Clients/>)
    return (
        <>
            <Header isAuthenticated={true}/>
            <VerticalMenu setFunctionality={setFunctionality}/>
            <ElevatedSection functionality={functionality}/>
        </>
    )
}

export default Home