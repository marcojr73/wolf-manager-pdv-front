import styled from "styled-components"

const ContainerHeader = styled.section`
    width: 100vw;
    height: 15vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;

    .banner{
        display: flex;
        align-items: center;
    }

    h1{
        font-size: 2rem;
        font-weight: bold;
        color: var(--light-color);
    }

    .logo{
        width: 12vh;
        height: 12vh;
    }
`

export default ContainerHeader