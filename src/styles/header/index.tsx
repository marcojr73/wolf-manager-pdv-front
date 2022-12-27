import styled from "styled-components";

const ContainerHeader = styled.section`
    width: 100vw;
    height: 15vh;
    background-color: var(--primary-color);
    display: flex;

    .banner{
        width: 60vw;
        height: 15vh;
        margin-left: 5vw;
        display: flex;
        align-items: center;
    }

    h1{
        font-size: 30px;
        font-weight: bold;
        color: var(--light-color);
    }

    .logo{
        width: 15vh;
        height: 15vh;
    }

    form{
        width: 35vw;
        height: 15vh;
        display: flex;
        align-items: center;
    }

    input{
        width: 40%;
        height: 20%;
        margin-right: 1%;
        padding: 0px 0px 0px 10px;
    }

    button{
        width: 10%;
        height: 20%;
        background-color: var(--light-color);
        border: none;
    }
`

export default ContainerHeader