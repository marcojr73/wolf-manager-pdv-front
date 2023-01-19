import React, { useEffect, useState } from "react"
import productsApi from "../../../api/productsApi"
import ContainerStock from "../../../styles/home/elevatedSection/ContainerStock"
import showError from "../../../utils/showError"

function Stock() {

    const [products, setProducts] = useState<any>()

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
        <ContainerStock>
            <h1>Estoque de produtos</h1>
            <ul>
                <li className="top">
                    <p className="info-item r1">#</p>
                    <p className="info-item r2">Nome</p>
                    <p className="info-item r3">Descrição</p>
                    <p className="info-item r4">Fornecedor</p>
                    <p className="info-item r5">Marca</p>
                    <p className="info-item r6">Código de barras</p>
                    <p className="info-item r7">Estoque</p>
                    <p className="info-item r8">Medida</p>
                    <p className="info-item r9">Custo</p>
                    <p className="info-item r10">Venda</p>
                    <p className="info-item r11">Validade</p>
                    <p className="info-item r12">ICMS</p>
                </li>
            </ul>
        </ContainerStock>
    )
}

export default Stock