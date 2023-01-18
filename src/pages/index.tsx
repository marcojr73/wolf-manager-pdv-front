import React, { useState } from "react"

import Business from "../components/auth/business"
import Form from "../components/auth/form"
import Header from "../components/auth/header"
import ContainerAuth from "../styles/authpages"

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(false)
  return (
    <>
      <Header/>
      <ContainerAuth>
         <Business/>
         <Form setIsSignIn={setIsSignIn} isSignIn={isSignIn}/>
      </ContainerAuth>
    </>
  )
}
