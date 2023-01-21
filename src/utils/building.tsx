import React from "react"
import styled from "styled-components"
import Loader from "./Loader"

function Building(){
    return (
        <ContainerBuilding>
            <h1>Desenvolvendo...</h1>
            <Loader/>
        </ContainerBuilding>
    )
}

export default Building

const ContainerBuilding = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        margin-top: 20%;
    }
`