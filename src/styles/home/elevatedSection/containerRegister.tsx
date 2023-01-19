import styled from "styled-components"


const ContainerRegister = styled.section`
    width: 100%;
    height: 100%;
    color: var(--light-color);

    h1{
        padding-top: 3%;
        padding-left: 3%;
        font-size: 2.5rem;
    }

    form{
        width: 65vw;
        height: 85%;
        margin: auto;
        display: flex;
        flex-direction: column;
        margin-top: 1%;
    }

    .top-inputs{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .top-inputs-name-description {
        width: 80%;
    }

    .product-name{
        width: 100%;
        height: 4vh;
        margin-bottom: 2%;
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

    input::placeholder{
        color: var(--primary-color);
    }
    
    input:focus, select{
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    .bottom-inputs{
        margin-top: 2%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 1%;
        height: 50%;
    }
    
    .product-description{
        width: 100%;
        height: 6.75vw;
        padding-bottom: 3.75vw;
    }

    input, select{
        padding-left: 2%;
        width: 100%;
        height: 80%;
    }

    .input{
        width: 100%;
        height: 90%;
    }

    button{
        margin: auto;
        width: 100%;
        height: 8%;
        background-color: var(--secondary-color);
        border: none;
        border-radius: 5px;
        font-size: 0.8vw;
        padding: 0px 0px 0px 2%;
        color: var(--primary-color);
    }
`

export default ContainerRegister