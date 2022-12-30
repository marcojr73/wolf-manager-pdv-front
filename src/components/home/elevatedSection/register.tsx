import { useState } from "react"
import ContainerRegister from "../../../styles/home/elevatedSection/containerRegister"

function Register() {
    const [ans, setAns] = useState(false)
    return (
        <ContainerRegister>
            <h1>Registro de novos produtos</h1>
            <form action="">
                <section className="top-inputs">
                    <div>
                        <label className="file" htmlFor="file">Adicionar uma imagem (opcional)</label>
                        <input type="file" name="file" id="file" />
                    </div>
                    <div>
                        <input type="text" className="product-name" placeholder="Nome" />
                        <input type="text" className="product-description" placeholder="Adicione uma descrição (opcional)" />
                    </div>
                </section>
                <form className="bottom-inputs">
                    <input type="text" placeholder="Fornecedor" />
                    <input type="text" placeholder="Marca (opcional)" />
                    <input type="text" placeholder="Código (opcional)" />
                    <input type="text" placeholder="Código de barras" />
                    <input type="text" placeholder="Estoque" />
                    <select name="select">
                        <option value="valor2" selected>Caixa</option>
                        <option value="valor2" selected>Par</option>
                        <option value="valor2" selected>Unidade</option>
                        <option value="valor3">Grama</option>
                        <option value="valor1">Quilograma</option>
                        <option value="valor3">Litro</option>
                        <option value="valor3">Mililitro</option>
                        <option value="valor3">Metro</option>
                        <option value="valor3">Hora</option>
                        <option value="valor3">Minuto</option>
                    </select>
                    <input type="text" placeholder="Preço de custo" />
                    <input type="text" placeholder="Preço de venda" />
                    <input type="text" placeholder="Validade (opcional)" />
                    <input type="text" placeholder="ICMS %" />
                </form>
                <button>Confirmar (f3)</button>
            </form>
        </ContainerRegister>
    )
}

export default Register