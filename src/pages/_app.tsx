import "../styles/reset.css"

import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globals"
import light from "../styles/themes/light"
import dark from "../styles/themes/dark"

import type { AppProps } from "next/app"
import React from "react"
import Toastify from "../utils/toastify"
import { BusinessContextProvider } from "../provider/index"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
       <Head>
        <title>Wolf Manager - frente de caixa</title>
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyle/>
      <BusinessContextProvider>
        <Component {...pageProps} />
        <Toastify />
      </BusinessContextProvider>
    </ThemeProvider>

  )

}
