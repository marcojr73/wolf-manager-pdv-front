import { TnewProduct, Tproduct } from "../interfaces"
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
    else data.validate = 0
    return {
        nameProduct: data.nameProduct,              
        description: data.description,              
        picture: data.picture,
        provider: data.provider,
        brand: data.brand,
        code: +data.code,
        codeBar: data.codeBar,
        stock: +data.stock,
        unitMeasurement: data.unitMeasurement,
        costPrice: +data.costPrice * 100,
        salePrice: +data.salePrice * 100,
        validate: data.validate,
        icms: +data.icms
    }
}

async function getProductsApi(){
    const url = "/products"
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axiosInstance.get(url, config)
    return response.data as Tproduct
}

export default {
    registerNewProductApi,
    getProductsApi
}   