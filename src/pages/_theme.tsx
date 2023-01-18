import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globals"

import React, { useContext } from "react"
import Toastify from "../utils/toastify"
import { themeContext } from "../provider/themeProvider"

export default function Theme() {

  const { theme } = useContext(themeContext)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toastify />
    </ThemeProvider>
  )
}
