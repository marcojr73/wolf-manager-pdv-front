import React, { useContext } from "react"

import { BsMoonStarsFill, BsPeopleFill, BsPlusCircleFill, BsSunFill } from "react-icons/bs"
import { MdPointOfSale } from "react-icons/md"
import { SlSocialDropbox } from "react-icons/sl"
import { FaFileInvoiceDollar } from "react-icons/fa"
import { ImExit } from "react-icons/im"

import Switch from "react-switch"
import { ThemeContext } from "styled-components"
import light from "../../styles/themes/light"
import dark from "../../styles/themes/dark"



import ContainerVerticalMenu from "../../styles/home/ContainerVerticalMenu"
import { ISetState } from "../../interfaces/reactTypes"
import Clients from "./elevatedSection/clients"
import Register from "./elevatedSection/register"
import Sales from "./elevatedSection/sales"
import Stock from "./elevatedSection/stock"
import Invoices from "./elevatedSection/invoices"
import Exit from "./elevatedSection/exit"
import Image from "next/image"
import { themeContext } from "../../provider/themeProvider"

function VerticalMenu({ setFunctionality}: { setFunctionality: ISetState }) {

    const { colors } = useContext(ThemeContext)
    const { theme, setTheme } = useContext(themeContext)

    function toggleTheme() {
        setTheme(theme.title === "light" ? dark : light)
    }

    return (
        <ContainerVerticalMenu>
            <div className="top">
                <Image
                    src="/images/fox-cash.png"
                    alt="fox-cash-logo"
                    width={100}
                    height={100}
                    className="logo"
                />
            </div>
            <aside>
                <section onClick={() => setFunctionality(<Clients />)}>
                    <BsPeopleFill className="icon" />
                    <p>Clientes</p>
                </section>
                <section onClick={() => setFunctionality(<Register />)}>
                    <BsPlusCircleFill className="icon" />
                    <p>Registro</p>
                </section>
                <section onClick={() => setFunctionality(<Sales />)}>
                    <MdPointOfSale className="icon" />
                    <p>Vendas</p>
                </section>
                <section onClick={() => setFunctionality(<Stock />)}>
                    <SlSocialDropbox className="icon" />
                    <p>Estoque</p>
                </section>
                <section onClick={() => setFunctionality(<Invoices />)}>
                    <FaFileInvoiceDollar className="icon" />
                    <p>Notas</p>
                </section>
                <section onClick={() => setFunctionality(<Exit />)}>
                    <ImExit className="icon" />
                    <p>Sair</p>
                </section>
            </aside>
            <Switch className="switch"
                onChange={toggleTheme}
                checked={theme.title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor={colors.white}
                onColor={colors.black}
                checkedHandleIcon={<BsMoonStarsFill className="icon-theme"/>}
                uncheckedHandleIcon={<BsSunFill className="icon-theme"/>}
            />
        </ContainerVerticalMenu>
    )
}

export default VerticalMenu

