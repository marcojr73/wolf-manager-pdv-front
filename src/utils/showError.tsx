import { toast } from "react-toastify"
import { messageTranslation } from "./messageTranslation"

function showError(error: any){
    console.log("error")
    if(error.code === "ERR_NETWORK"){
        toast.error("Você não esta conectado a internet")
    } else {
        const message = messageTranslation(error.response.data)
        toast.error(message)
    }
}

export default showError