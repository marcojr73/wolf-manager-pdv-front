import ContainerSignUp from "../../styles/authpages/containerSignUp"
import Router from "next/router"
import { useForm } from "react-hook-form";

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data: any) {
        Router.push("./home")
        console.log(data)
    }

    return (
        <ContainerSignUp>
            <div className="middle-bar"></div>
            <form>
                <h1>Registre-se e comece a usar agora!</h1>
                <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i })} />
                    {errors?.email?.type === "required" || errors?.email?.type === "pattern" && 
                    (<p className="input-error">insira um email válido</p>)}
                
                <input type="text" placeholder="Nome do empreendimento" {...register("businessName", { required: true })} />
                    {errors?.businessName?.type === "required" && 
                    (<p className="input-error">insira o nome do seu negócio</p>)}
                
                <input type="text" placeholder="CNPJ" {...register("cnpj", { required: true, pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/ })} />
                    {errors?.cnpj?.type === "required" || errors?.cnpj?.type === "pattern" && 
                    (<p className="input-error">insira um cnpj válido</p>)}
                
                <input type="text" placeholder="Senha" {...register("password", { required: true, minLength: 8 })} />
                    {errors?.password?.type === "required" || errors?.password?.type === "minLength" && 
                    (<p className="input-error">insira no mínimo 8 caracteres</p>)}
                
                <button type="button" onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
            </form>
        </ContainerSignUp>
    )
}

export default SignUp