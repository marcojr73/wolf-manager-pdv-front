import React from "react"
import ContainerForm from "../../styles/authpages/containerForm"
import SignInForm from "./signIn"
import SignUpForm from "./signUp"

function Form({ isSignIn, setIsSignIn }: { isSignIn: boolean, setIsSignIn: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <ContainerForm>
            <div className="middle-bar"></div>
            {isSignIn ?
                <SignInForm isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>
                :
                <SignUpForm isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>
            }
        </ContainerForm>
    )
}

export default Form