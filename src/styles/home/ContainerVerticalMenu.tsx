import styled from "styled-components"


const ContainerVerticalMenu = styled.aside`
    width: 100vw;
    height: 85vh;
    background-color: var(--secondary-color);

    aside{
        width: 25vw;
        height: 75vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5vh;
    }

    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20vw;
        height: 6vh;
        margin-top: 3vh;
        border-bottom: 1px solid black;
        cursor: pointer;
    }
    
    .icon, p{
        font-size: 2vw;
    }

`

export default ContainerVerticalMenu