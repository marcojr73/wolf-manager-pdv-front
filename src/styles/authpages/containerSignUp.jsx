import styled from "styled-components"

const ContainerSignUp = styled.main`
    width: 50vw;
    height: 85vh;
    display: flex;
    align-items: center;

    .middle-bar{
        height: 75vh;
        width: 0.04vw;
        background-color: black;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 35vw;
        height: 65vh;
        background-color: var(--secondary-color);
        margin-left: 8.75vw;
        border-radius: 5%;
    }

    h1{
        margin-top: 10%;
        font-size: 1.5vw;
        margin-bottom: 8%;
        font-weight: bold;
    }

    input{
        width: 70%;
        height: 7%;
        margin-top: 4%;
        background-color: var(--secondary-color);
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 0.1vw solid black;
        font-size: 0.8vw;
        padding: 0px 0px 0px 2%;
    }

    input:focus{
        border-top: none;
        border-left: none;
        border-right: none;
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    button{
        width: 70%;
        height: 7%;
        margin-top: 5%;
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.6vw;
        font-size: 1.5vw;
    }

    .input-error{
        color: #f51313;
        width: 70%;
        font-weight: bold;
        font-size: 0.7rem;
        margin-top: 1%;
    }

`

export default ContainerSignUp