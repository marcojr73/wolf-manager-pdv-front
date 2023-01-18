import styled from "styled-components"

const ContainerNewClient = styled.section`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1{
        font-size: 2.5rem;
    }

    .new-client{
        width: 75%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .input-field{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input{
        height: 35%;
        width: 100%;
        color: var(--primary-color);
    }

    .name{
        width: 35%;
    }

    .street{
        width: 35%;
    }

    
    .phone{
        width: 20%;
    }
    
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
        padding-left: 20%;
    }

    .number{
        width: 5%;
    }

    button{
        width: 7%;
        height: 35%;
        border-radius: 0.5rem;
        background-color: var(--light-color);
        border: 0.1rem solid var(--primary-color);
        color: var(--primary-color);
    }

`

export default ContainerNewClient