import styled from "styled-components"

const ContainerSales = styled.section`
    width: 80%;
    height: 50%;
    margin: auto;

    .chart{
        margin-top: 3%;
        width: 100%;
    }

    .uses{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 4%;
        grid-row-gap: 5%;
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
        font-size: 2rem;
        padding-left: 2%;
        padding-right: 2%;
        color: var(--primary-color);
    }

`

export default ContainerSales