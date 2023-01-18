import React, { useContext } from "react"
import ContainerUser from "../../styles/home/ConatinerUser"
import {RiStore3Fill} from "react-icons/ri"
import { businessContext } from "../../provider"


function User(){
    const { business, setBusiness } = useContext(businessContext)
    return (
        <ContainerUser>
            <div className="business">
                <RiStore3Fill className="icon"/>
                <h1>{business.businessName}</h1>
            </div>
        </ContainerUser>
    )   
}

export default User