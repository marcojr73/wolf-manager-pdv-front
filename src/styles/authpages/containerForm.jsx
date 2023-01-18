import styled from "styled-components"

const ContainerForm
 = styled.main`
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
        margin-top: 7.5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 35vw;
        height: 65vh;
        background-color: var(--primary-color);
        margin-left: 8.75vw;
        border-radius: 5%;
    }

    h1{
        margin-top: 10%;
        font-size: 1.5vw;
        margin-bottom: 0%;
        font-weight: bold;
        color: var(--light-color);
    }

    .input-container{
        height: 60%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    input{
        width: 70%;
        height: 15%;
        margin-top: 4%;
    }
    
    input::placeholder{
        color: var(--light-color);

    }

    .button, .button-git{
        width: 70%;
        height: 40%;
        background-color: var(--secondary-color);
        border: none;
        border-radius: 0.6vw;
        font-size: 1.5vw;
        color: var(--light-color);
        cursor: pointer;
    }

    .button-git{
        background-color: var(--dark-color);
    }

    .button-container{
        height: 25%;
        width: 100%;
        margin-bottom: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .message{
        margin-bottom: 5%;
        color: var(--light-color);
        cursor: pointer;
    }

`

export default ContainerForm
