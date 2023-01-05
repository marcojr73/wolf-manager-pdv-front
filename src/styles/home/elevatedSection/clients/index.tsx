import styled from "styled-components"

const ContainerClients = styled.section`
    width: 100%;
    height: 100%;

    h1{
        padding-left: 3%;
        font-size: 2.5rem;
    }

    .top-side{
        padding-top: 3%;
        padding-bottom: 3%;
        display: flex;
        align-items: center;
    }

    .new-client{
        display: flex;
        margin-left: 32vw;
    }

    .input-name{
        width: 25vw;
        height: 3vh;
    }

    .input-error{
        margin-top: 2%;
        font-size: 1rem;
    }

    button{
        margin-left: 1%;
        height: 3vh;
    }

    .square{
        display: flex;
        background-color: red;
        width: 90%;
        height: 80%;
        border: 1px solid black;
        align-self: center;
        margin: auto;
    }
`

export default ContainerClients