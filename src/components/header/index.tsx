import Image from "next/image"
import ContainerHeader from "../../styles/header"

function Header(){
    return (
        <ContainerHeader>
            <section className="banner">
                <Image
                src="/images/fox-cash.png"
                alt="fox-cash-logo"
                width={10000}
                height={10000}
                className="logo"
                />
                <h1>WolfManager - PDV</h1>
            </section>
            <form action="">
                <input type="text" placeholder="credential"/>
                <input type="password" placeholder="password"/>
                <button>Log-in</button>
            </form>
        </ContainerHeader>
    )
}

export default Header

