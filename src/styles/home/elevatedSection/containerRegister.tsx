import styled from "styled-components";


const ContainerRegister = styled.section`
    width: 100%;
    height: 100%;

    h1{
        padding-top: 3%;
        padding-left: 3%;
        font-size: 2.5rem;
    }

    form{
        padding-top: 1%;
        width: 70vw;
        height: 85%;
        margin: auto;
    }

    .top-inputs{
        display: flex;
    }

    input[type="file"] {
        display: none;
    }

    .file {
        padding: 20px 10px;
        width: 10vw;
        height: 10vw;
        background-color: #333;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        display: block;
        cursor: pointer;
    }

    .product-name{
        width: 58vw;
        height: 4vh;
        margin-bottom: 2%;
        margin-left: 2vw;
    }

    input{
        padding-left: 2%;
    }

    input:focus, select{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    
    .product-description{
        margin-left: 2vw;
        width: 58vw;
        height: 6.75vw;
        padding-bottom: 3.75vw;
    }

    .bottom-inputs{
        width: 70vw;
        height: 35vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 50px 50px 50px 50px 50px;
        grid-gap: 20px;
    }

    button{
        width: 25vw;
        height: 5vh;
        margin: auto;
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.5rem;
        margin-top: 5%;
    }
`

export default ContainerRegister