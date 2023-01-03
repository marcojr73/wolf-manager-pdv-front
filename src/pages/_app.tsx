import "../styles/globals.css"
import "../styles/reset.css"

import type { AppProps } from "next/app"
import React from "react"
import Toastify from "../utils/toastify"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toastify/>
    </>
  ) 
  
}
