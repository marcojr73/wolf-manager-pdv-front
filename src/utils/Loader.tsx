import React from "react"

import styled from "styled-components"
import { TailSpin } from "react-loader-spinner"

export default function Loader() {
    return (
        <Container>
            <TailSpin
                width="35"
                color="black"
                ariaLabel="loading"
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`