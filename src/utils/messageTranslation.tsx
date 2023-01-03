function messageTranslation(message: string){
    console.log(message)
    if(message === "This email already in use") return "Este email já esta sendo usado"
    if(message === "This cnpj already in use") return "Este CNPJ já esta sendo usado"
    if(message === "Not register business for this email") return "Nenhum negócio registrado com este email"
    if(message === "This password is incorrect") return "Senha incorreta"
    if(message === "created") return "Conta registrada"
    return message
}

export {
    messageTranslation
}