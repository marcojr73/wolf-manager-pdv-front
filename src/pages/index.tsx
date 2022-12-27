import Business from "../components/auth/business";
import SignUp from "../components/auth/Sign-up";
import Header from "../components/header";
import ContainerAuth from "../styles/authpages";

export default function Home() {
  return (
    <>
      <Header/>
      <ContainerAuth>
         <Business/>
         <SignUp/>
      </ContainerAuth>
    </>
  )
}
