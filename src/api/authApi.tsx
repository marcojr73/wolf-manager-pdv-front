import { TsignIn, TsignUp } from "../interfaces"
import axiosInstance from "./axiosInstance"

async function signUpApi(data: TsignUp) {
    const url = "/sign-up"
    const response = await axiosInstance.post(url, data)
    return response.data
}

async function signInApi(data: TsignIn) {
    const url = "/sign-in"
    const response = await axiosInstance.post(url, data)
    return response.data
}

export default {
    signUpApi,
    signInApi
}   