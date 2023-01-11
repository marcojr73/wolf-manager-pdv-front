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
        flex-direction: column;
        width: 90%;
        align-self: center;
        margin: auto;
    }

    li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #5B5B5B;
        height: 4vh;
    }

    p{
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: 2%;
        color: #5B5B5B;
    }

    .name{
        width: 55%;
    }

    .index{
        width: 5%;
    }

    .all-purchases, .debit{
        width: 20%;
    }

    .all-purchases{
        margin-left: 10%;
    }

    .top{
        font-weight: bold;
    }
`

export default ContainerClients