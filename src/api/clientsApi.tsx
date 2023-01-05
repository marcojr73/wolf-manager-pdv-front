import { TnewUser } from "../interfaces"
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
    console.log(response)
    return response.data
}


export default {
    newClientApi,
}   