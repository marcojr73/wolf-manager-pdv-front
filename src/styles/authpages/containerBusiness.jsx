import styled from "styled-components"

const ContainerBusiness = styled.main`
    width: 50vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 5%;
        font-size: 40px;
        width: 35vw;
    }

    section{
        width: 35vw;
        height: 35vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 2%;
        margin-top: 5%;
    }

    .business{
        background-color: var(--secondary-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }

    .icon{
        font-size: 5vw;
    }

    p{
        font-size: 30px;
    }
    
`

export default ContainerBusiness