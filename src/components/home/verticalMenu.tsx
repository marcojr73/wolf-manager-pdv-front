import {BsPeopleFill} from "react-icons/bs"
import {BsPlusCircleFill} from "react-icons/bs"
import {MdPointOfSale} from "react-icons/md"
import {SlSocialDropbox} from "react-icons/sl"
import {FaFileInvoiceDollar} from "react-icons/fa"
import {ImExit} from "react-icons/im"
import ContainerVerticalMenu from "../../styles/home/ContainerVerticalMenu"

function VerticalMenu(){
    return(
        <ContainerVerticalMenu>
            <aside>
                <section>
                    <BsPeopleFill className="icon"/>
                    <p>Clientes</p>
                </section>
                <section>
                    <BsPlusCircleFill className="icon"/>
                    <p>Registro</p>
                </section>
                <section>
                    <MdPointOfSale className="icon"/>
                    <p>Vendas</p>
                </section>
                <section>
                    <SlSocialDropbox className="icon"/>
                    <p>Estoque</p>
                </section>
                <section>
                    <FaFileInvoiceDollar className="icon"/>
                    <p>Notas</p>
                </section>
                <section>
                    <ImExit className="icon"/>
                    <p>Sair</p>
                </section>
            </aside>
        </ContainerVerticalMenu>
    )
}

export default VerticalMenu

