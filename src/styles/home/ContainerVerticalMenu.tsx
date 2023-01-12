import styled from "styled-components"


const ContainerVerticalMenu = styled.aside`
    width: 23vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);

    .top{
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    aside{
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5vh;
    }

    section:hover {
        background-color: var(--secondary-color);
        border-radius: 0.5rem;
    }

    section{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20vw;
        height: 6vh;
        margin-top: 3vh;
        cursor: pointer;
        color: var(--light-color);
    }
    
    .icon, p{
        font-size: 2vw;
    }

`

export default ContainerVerticalMenu