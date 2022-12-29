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
        font-size: 2vw;
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
        padding: 0px 0px 0px 2%;
        font-size: 1vw;
    }

    button{
        width: 10%;
        height: 20%;
        background-color: var(--light-color);
        border: none;
        font-size: 1vw;
    }

    input:focus{
        border: 0 none;
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    p{
        font-size: 3vw;
        margin-left: 7%;
        color: var(--light-color);
        display: flex;
        align-items: center;
    }
`

export default ContainerHeader