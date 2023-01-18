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
        flex-direction: column;
        align-items: center;
    }

    div{
        width: 50%;
        display: flex;
    }

    .info{
        display: flex;
    }

    .info-item{
        width: 33%;
        display: flex;
        justify-content: center;
    }

    .name{
        margin-left: 7%
    }

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        height: 8%;
        color: var(--primary-color);;
    }

    .top{
        margin-top: 2%;
        border-bottom: 0.1rem solid var(--primary-color);
    }


`

export default ContainerShowClients