import { TnewProduct } from "../interfaces"
import axiosInstance from "./axiosInstance"

async function registerNewProductApi(data: TnewProduct) {
    const url = "/products/register"
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    data = parseData(data)
    console.log(data)
    const response = await axiosInstance.post(url, data, config)
    return response.data
}

function parseData(data: TnewProduct){
    if(data.validate) data.validate = +data.validate
    return {
        nameProduct: data.nameProduct,              
        description: data.description,              
        picture:  data.picture,
        provider:  data.provider,
        brand:  data.brand,
        code:  +data.code,
        codeBar:  data.codeBar,
        stock: +data.stock,
        unitMeasurement: data.unitMeasurement,
        costPrice: +data.costPrice,
        salePrice: +data.salePrice,
        validate: data.validate,
        icms:  +data.icms
    }
}

export default {
    registerNewProductApi,
}   