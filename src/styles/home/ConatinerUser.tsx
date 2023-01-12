import styled from "styled-components"

const ContainerUser = styled.section`
    width: 77vw;
    height: 15vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .business{
        font-size: 2.5rem;
        display: flex;
        justify-content: space-around;
        color: var(--light-color);
        align-items: center;
    }

    .icon{
        font-size: 6rem;
    }

    h1{
        width: 50%;
    }
`

export default ContainerUser