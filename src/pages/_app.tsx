import "../styles/reset.css"

import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globals"
import light from "../styles/themes/light"
import dark from "../styles/themes/dark"

import type { AppProps } from "next/app"
import React from "react"
import Toastify from "../utils/toastify"
import { BusinessContextProvider } from "../provider/index"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle/>
      <BusinessContextProvider>
        <Component {...pageProps} />
        <Toastify />
      </BusinessContextProvider>
    </ThemeProvider>

  )

}
