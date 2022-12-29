import Header from "../components/header"
import ElevatedSection from "../components/home/elevatedSection"
import VerticalMenu from "../components/home/verticalMenu"

function Home(){
    return (
        <>
            <Header isAuthenticated={true}/>
            <VerticalMenu/>
            <ElevatedSection/>
        </>
    )
}

export default Home