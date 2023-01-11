import styled from "styled-components"

const ContainerBusiness = styled.main`
    width: 50vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 5%;
        font-size: 4vh;
        width: 35vw;
        color: var(--primary-color);
    }

    section{
        width: 35vw;
        height: 65vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 2%;
        margin-top: 5%;
    }

    .business{
        background-color: var(--primary-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5%;
    }

    .icon{
        font-size: 5vw;
        color: var(--light-color);
    }

    p{
        margin-top: 7%;
        font-size: 1.2vw;
        color: var(--light-color);
    }
    
`

export default ContainerBusiness