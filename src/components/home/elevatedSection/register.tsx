import React from "react"
import { useForm } from "react-hook-form"
import productsApi from "../../../api/productsApi"
import { TnewProduct } from "../../../interfaces"
import ContainerRegister from "../../../styles/home/elevatedSection/containerRegister"

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nameProduct: "",
            picture: "",
            description: "",
            provider: "",
            brand: "",
            code: "",
            codeBar: "",
            stock: "",
            unitMeasurement: "",
            costPrice: "",
            salePrice: "",
            validate: "",
            icms: "",
        }
    })

    async function onSubmit(data: TnewProduct) {
        try {
            const response = await productsApi.registerNewProductApi(data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ContainerRegister>
            <h1>Registro de novos produtos</h1>
            <form action="">
                <section className="top-inputs">
                    <div className="top-inputs-file">
                        <label className="file" htmlFor="file">Adicionar uma imagem (opcional)</label>
                        <input type="file" name="file" id="file" />
                    </div>
                    <div className="top-inputs-name-description">
                        <input type="text" className="product-name" placeholder="Nome" {...register("nameProduct", { required: true })} />
                        {errors?.nameProduct?.type === "required" ?
                            <p className="input-error">insira um nome para o produto</p> : null}
                        <input type="text" className="product-description" placeholder="Adicione uma descrição (opcional)" {...register("description")} />
                    </div>
                </section>
                <div className="bottom-inputs">
                    <div className="input">
                        <input type="text" placeholder="Fornecedor" {...register("provider", { required: true })} />
                        {errors?.provider?.type === "required" ?
                            <p className="input-error">insira o nome do fornecedor</p> : null}
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Marca (opcional)" {...register("brand")} />
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Código" {...register("code", { required: true })} />
                        {errors?.code?.type === "required" ?
                            <p className="input-error">insira um código</p> : null}
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Código de barras" {...register("codeBar", { required: true })} />
                        {errors?.codeBar?.type === "required" ?
                            <p className="input-error">insira o código de barras</p> : null}
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Estoque" {...register("stock", { required: true })} />
                        {errors?.stock?.type === "required" ?
                            <p className="input-error">insira o estoque</p> : null}
                    </div>
                    <div className="input">
                        <select {...register("unitMeasurement", { required: true })}>
                            <option value="Caixa">Caixa</option>
                            <option value="Par">Par</option>
                            <option value="Unidade" selected>Unidade</option>
                            <option value="Grama">Grama</option>
                            <option value="Quilograma">Quilograma</option>
                            <option value="Litro">Litro</option>
                            <option value="Mililitro">Mililitro</option>
                            <option value="Metro">Metro</option>
                            <option value="Hora">Hora</option>
                            <option value="Minuto">Minuto</option>
                        </select>
                        {errors?.unitMeasurement?.type === "required" ?
                            <p className="input-error">insira a unidade de medida</p> : null}
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Preço de custo" {...register("costPrice", { required: true })} />
                        {errors?.costPrice?.type === "required" ?
                            <p className="input-error">insira o preço de custo</p> : null}
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Preço de venda" {...register("salePrice", { required: true })} />
                        {errors?.salePrice?.type === "required" ?
                            <p className="input-error">insira o preço de venda</p> : null}
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Validade (opcional)" {...register("validate")} />
                    </div>
                    <div className="input">
                        <input type="number" placeholder="ICMS %" {...register("icms", { required: true })} />
                        {errors?.icms?.type === "required" ?
                            <p className="input-error">insira a validade</p> : null}
                    </div>
                </div>
                <button type="button" onClick={() => handleSubmit(onSubmit)()} >Confirmar (f3)</button>
            </form>
        </ContainerRegister>
    )
}

export default Register