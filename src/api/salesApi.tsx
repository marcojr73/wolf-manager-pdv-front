import { Tsales } from "../interfaces"
import axiosInstance from "./axiosInstance"

async function getSalesData(){
    const url = "/sales"
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axiosInstance.get(url, config)
    return response.data as Tsales
}

export default {
    getSalesData
}   