import React, { useEffect, useState } from "react"
import productsApi from "../../../api/productsApi"
import { Tproduct } from "../../../interfaces"
import ContainerStock from "../../../styles/home/elevatedSection/ContainerStock"
import showError from "../../../utils/showError"

function Stock() {

    const [products, setProducts] = useState<Tproduct | []>([])

    useEffect(() => {
        (async function () {
            try {
                const response = await productsApi.getProductsApi()
                setProducts(response)
            } catch (error) {
                showError(error)
            }
        })()
    }, [])

    return (
        products.length > 0 ?
            <ContainerStock>
                <h1>Estoque de produtos</h1>
                <ul>
                    <li className="top">
                        <p className="info-item l">#</p>
                        <p className="info-item l">Nome</p>
                        <p className="info-item l">Descrição</p>
                        <p className="info-item l">Fornecedor</p>
                        <p className="info-item l">Marca</p>
                        <p className="info-item l">Código de barras</p>
                        <p className="info-item l">Estoque</p>
                        <p className="info-item l">Medida</p>
                        <p className="info-item l">Custo</p>
                        <p className="info-item l">Venda</p>
                        <p className="info-item l">Validade</p>
                        <p className="info-item l">ICMS</p>
                    </li>
                    {
                        products.map((product, index) => {
                            return (
                                <li key={index} className="top">
                                    <p className="info-item">{product.code}</p>
                                    <p className="info-item">{product.nameProduct}</p>
                                    <p className="info-item">{product.description}</p>
                                    <p className="info-item">{product.provider}</p>
                                    <p className="info-item">{product.brand}</p>
                                    <p className="info-item">{product.codeBar}</p>
                                    <p className="info-item">{product.stock}</p>
                                    <p className="info-item">{product.unitMeasurement}</p>
                                    <p className="info-item">{((product.costPrice)/100).toFixed(2)} R$</p>
                                    <p className="info-item">{((product.salePrice)/100).toFixed(2)} R$</p>
                                    <p className="info-item">{product.validate} dias</p>
                                    <p className="info-item">{product.icms} %</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </ContainerStock>
            :
            <h1>Irmão, não tem prduto ainda</h1>
    )
}

export default Stock