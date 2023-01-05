import React from "react"

import {BsPeopleFill} from "react-icons/bs"
import {BsPlusCircleFill} from "react-icons/bs"
import {MdPointOfSale} from "react-icons/md"
import {SlSocialDropbox} from "react-icons/sl"
import {FaFileInvoiceDollar} from "react-icons/fa"
import {ImExit} from "react-icons/im"

import ContainerVerticalMenu from "../../styles/home/ContainerVerticalMenu"
import {ISetState} from "../../interfaces/reactTypes"
import Clients from "./elevatedSection/clients"
import Register from "./elevatedSection/register"
import Sales from "./elevatedSection/sales"
import Stock from "./elevatedSection/stock"
import Invoices from "./elevatedSection/invoices"
import Exit from "./elevatedSection/exit"

function VerticalMenu({setFunctionality} : {setFunctionality: ISetState}){
    return(
        <ContainerVerticalMenu>
            <aside>
                <section onClick={() => setFunctionality(<Clients/>)}>
                    <BsPeopleFill className="icon"/>
                    <p>Clientes</p>
                </section>
                <section onClick={() => setFunctionality(<Register/>)}>
                    <BsPlusCircleFill className="icon"/>
                    <p>Registro</p>
                </section>
                <section onClick={() => setFunctionality(<Sales/>)}>
                    <MdPointOfSale className="icon"/>
                    <p>Vendas</p>
                </section>
                <section onClick={() => setFunctionality(<Stock/>)}>
                    <SlSocialDropbox className="icon"/>
                    <p>Estoque</p>
                </section>
                <section onClick={() => setFunctionality(<Invoices/>)}>
                    <FaFileInvoiceDollar className="icon"/>
                    <p>Notas</p>
                </section>
                <section onClick={() => setFunctionality(<Exit/>)}>
                    <ImExit className="icon"/>
                    <p>Sair</p>
                </section>
            </aside>
        </ContainerVerticalMenu>
    )
}

export default VerticalMenu

