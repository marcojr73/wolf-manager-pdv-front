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
    
    p{
        border-bottom: 0.1rem solid var(--primary-color);
        
    }

    .info-item{
        display: flex;
        justify-content: center;
        padding-bottom: 5%;
    }

    /* .r1{
        background-color: gray;
    }
    .r2{
        background-color: blue;
    }
    .r3{
        background-color: green;
    }
    .r4{
        background-color: violet;
    }
    .r5{
        background-color: aliceblue;
    }
    .r6{
        background-color: black;
    }
    .r7{
        background-color: brown;
    }
    .r8{
        background-color: pink;
    }
    .r9{
        background-color: yellow;
    }
    .r10{
        background-color: white;
    }
    .r11{
        background-color: orange;
    }
    .r12{
        background-color: salmon;
    }  */


`

export default ContainerStock