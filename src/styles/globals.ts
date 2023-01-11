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
`

