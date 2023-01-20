import { Tsales } from "../interfaces"

function calculatorBilling(sales: Tsales) {
    let totalBilling = 0
    sales.forEach(saleMonth => {
        totalBilling += saleMonth.balance
    })
    
}

export default calculatorBilling