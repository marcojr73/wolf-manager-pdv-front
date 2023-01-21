import styled from "styled-components"

const ContainerSales = styled.section`
    width: 80%;
    height: 50%;
    margin: auto;

    h1{
        padding-top: 3%;
        margin-left: -8%;
        font-size: 2.5rem;
        color: var(--light-color);
    }

    .chart{
        margin-top: 3%;
        width: 100%;
    }

    .uses{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 4%;
        grid-row-gap: 10%;
        margin: auto;
        margin-top: 3%;
        width: 100%;
        height: 50%;
    }

    .box{
        height: 100%;
        background-color: var(--secondary-color);
        border-radius: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
        padding-left: 2%;
        padding-right: 2%;
        color: var(--primary-color);
    }

    .red{
        background-color: #f51313;
    }

    .green{
        background-color: #30d41a;
    }

    .percent{
        display: flex;
        align-items: center;
    }

    .icon{
        font-size: 3rem;
        margin-right: 5%;
    }

`

export default ContainerSales