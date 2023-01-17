import "../styles/reset.css"

import type { AppProps } from "next/app"
import React from "react"
import { BusinessContextProvider } from "../provider/index"
import { ThemeContextProvider } from "../provider/themeProvider"
import Theme from "./_theme"

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeContextProvider>
      <BusinessContextProvider>
        <Theme/>
        <Component {...pageProps} />
      </BusinessContextProvider>
    </ThemeContextProvider>
  )
}
