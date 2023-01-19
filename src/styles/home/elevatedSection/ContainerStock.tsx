import styled from "styled-components"

const ContainerStock = styled.section`
    width: 100%;
    height: 100%;

    h1{
        padding-top: 3%;
        padding-left: 3%;
        font-size: 2.5rem;
        color: var(--light-color);
    }

    ul{
        position: absolute;
        width: 66vw;
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
        overflow-x: scroll;
        padding-left: 1%;
    }

    li{
        display: grid;
        width: 100%;
        grid-template-columns: 50px 250px 250px 150px 150px 150px 150px 150px 100px 100px 100px 100px;
        grid-template-rows: auto;
        color: var(--primary-color);
        margin-top: 2%;
    }
    
    .info-item{
        display: flex;
        justify-content: center;
    }
    
    .l{
        border-bottom: 0.1rem solid var(--primary-color);
        padding-bottom: 5%;
    }
`

export default ContainerStock