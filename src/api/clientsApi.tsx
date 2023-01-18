import { useContext } from "react"
import { TnewUser } from "../interfaces"
import { UserContext } from "../provider"
import axiosInstance from "./axiosInstance"

async function newClientApi(data: TnewUser) {
    const url = "/clients/register"
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axiosInstance.post(url, data, config)
    return response.data
}

async function getClientsApi() {
    const url = "/clients"
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axiosInstance.get(url, config)
    return response.data
}


export default {
    newClientApi,
    getClientsApi
}   