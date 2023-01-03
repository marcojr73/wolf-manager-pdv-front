import React from "react"

import {GiSlicedBread} from "react-icons/gi"
import {RiStore3Fill} from "react-icons/ri"
import {GiMeatCleaver} from "react-icons/gi"
import {ImBooks} from "react-icons/im"
import {MdOutlineConstruction} from "react-icons/md"
import {GiConverseShoe} from "react-icons/gi"
import {MdSmartphone} from "react-icons/md"
import {GiRemedy} from "react-icons/gi"
import {GrUserWorker} from "react-icons/gr"

import ContainerBusiness from "../../styles/authpages/containerBusiness"

function Business(){
    return (
        <ContainerBusiness>
            <h1>A solução para o seu negócio</h1>
            <section>
                <div className="business">
                    <RiStore3Fill className="icon"/>
                    <p>Mercados</p>
                </div>
                <div className="business">
                    <GiSlicedBread className="icon"/>
                    <p>Padarias</p>
                </div>
                <div className="business">
                    <GiMeatCleaver className="icon"/>
                    <p>Açougues</p>
                </div>
                <div className="business">
                    <ImBooks className="icon"/>
                    <p>Livrarias</p>
                </div>
                <div className="business">
                    <MdOutlineConstruction className="icon"/>
                    <p>Construções</p>
                </div>
                <div className="business">
                    <GiConverseShoe className="icon"/>
                    <p>Calçados</p>
                </div>
                <div className="business">
                    <MdSmartphone className="icon"/>
                    <p>Eletrônicos</p>
                </div>
                <div className="business">
                    <GiRemedy className="icon"/>
                    <p>Farmácias</p>
                </div>
                <div className="business">
                    <GrUserWorker className="icon"/>
                    <p>Serviços</p>
                </div>
            </section>    
        </ContainerBusiness>
    )
}

export default Business