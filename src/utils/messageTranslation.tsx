function messageTranslation(message: string){
    console.log(message)
    if(message === "This email already in use") return "Este email já esta sendo usado"
    if(message === "This cnpj already in use") return "Este CNPJ já esta sendo usado"
    if(message === "created") return "Conta registrada"
    return message
}

export {
    messageTranslation
}