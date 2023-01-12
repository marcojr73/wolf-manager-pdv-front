import styled from "styled-components"

const ContainerShowClients = styled.section`
    
    h1{
        width: 30%;
        margin: auto;
    }

    .square{
        position: absolute;
        width: 90%;
        height: 80%;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
        border-top-left-radius: 1.5vh;
        border-top-right-radius: 1.5vh;
        background-color: var(--secondary-color);
        display: flex;
        justify-content: center;
    }

    div{
        width: 50%;
        display: flex;
    }

    .info{
        display: flex;
        justify-content: space-between;
    }

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        height: 8%;
    }

    .top{
        margin-top: 2%;
        border-bottom: 0.1rem solid var(--primary-color);
    }


`

export default ContainerShowClients