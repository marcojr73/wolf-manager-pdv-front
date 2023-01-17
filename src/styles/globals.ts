import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

:root {
    --primary-color: ${props => props.theme.colors.primary};
    --secondary-color: ${props => props.theme.colors.secondary};
    --light-color: ${props => props.theme.colors.white};
    --dark-color: ${props => props.theme.colors.black};
    font-family: 'Montserrat', sans-serif;
}

input {
    background-color: var(--secondary-color);
    border: none;
    border-radius: 5px;
    font-size: 0.8vw;
    padding: 0px 0px 0px 2%;
    color: var(--light-color);
}

input:focus{
    border-top: none;
    border-left: none;
    border-right: none;
    box-shadow: 0 0 0 0;
    outline: 0;
}

.input-error{
    color: #f51313;
    width: 70%;
    font-weight: bold;
    font-size: 0.7rem;
    margin-top: 1%;
}

.switch{
    position: absolute;
}
`

