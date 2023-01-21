import React, { useEffect, useState } from "react"
import Chart from "react-apexcharts"
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs"
import salesApi from "../../../api/salesApi"
import { Tsales } from "../../../interfaces"
import ContainerSales from "../../../styles/home/elevatedSection/containerSales"
import showError from "../../../utils/showError"

function Sales() {

    const [sales, setSales] = useState<Tsales>()


    useEffect(() => {
        (async function () {
            try {
                const response = await salesApi.getSalesData()
                setSales(response)
            } catch (error) {
                showError(error)
            }
        })()
    }, [])

    function calculateDifference(initial: number, final: number){
        const ans = (final - initial) / initial * 100
        console.log(initial, final)
        console.log(ans)
        if (ans > 0) return <div className="percent"><BsFillArrowUpCircleFill className="icon"/><p>{ans.toFixed(2)}%</p></div>
        else return <div className="percent"><BsFillArrowDownCircleFill className="icon"/><p>{ans.toFixed(2)}%</p></div>
    }


    const state = sales !== undefined ? {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [
                    sales.balance[11].date,
                    sales.balance[10].date,
                    sales.balance[9].date,
                    sales.balance[8].date,
                    sales.balance[7].date,
                    sales.balance[6].date,
                    sales.balance[7].date,
                    sales.balance[4].date,
                    sales.balance[3].date,
                    sales.balance[2].date,
                    sales.balance[1].date,
                    sales.balance[0].date
                ],
                style: {
                    colors: ["#F44336", "#E91E63", "#9C27B0"]
                }
            },
            style: {
                colors: ["#F44336", "#E91E63", "#9C27B0"]
            }
        },
        series: [
            {
                name: "Vendas",
                data: [
                    (sales.balance[11].balance) / 100,
                    (sales.balance[10].balance) / 100,
                    (sales.balance[9].balance) / 100,
                    (sales.balance[8].balance) / 100,
                    (sales.balance[7].balance) / 100,
                    (sales.balance[6].balance) / 100,
                    (sales.balance[5].balance) / 100,
                    (sales.balance[4].balance) / 100,
                    (sales.balance[3].balance) / 100,
                    (sales.balance[2].balance) / 100,
                    (sales.balance[1].balance) / 100,
                    (sales.balance[0].balance) / 100
                ],
            }
        ],
    } : {
        options: {},
        series: [],
    }

    return (
        sales !== undefined ?
            <ContainerSales>
                <h1>Vendas</h1>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="100%"
                    height="100%"
                    className="chart"
                />
                <section className="uses">
                    <div className={`box numberSales ${sales.balance[1].numberSales > sales.balance[0].numberSales ? "red" : "green"}`}>
                        <p>N° de Vendas<br />neste mês</p>
                        <p>{sales.balance[0].numberSales}</p>
                        <p>{calculateDifference(sales.balance[1].numberSales, sales.balance[0].numberSales)}</p>
                    </div>
                    <div className={`box billing ${sales.balance[1].balance > sales.balance[0].balance ? "red" : "green" }`}>
                        <p>Faturamento<br />neste mês</p>
                        <p>{`${(sales.balance[0].balance)/100} R$`}</p>
                        <p>{calculateDifference(sales.balance[1].balance, sales.balance[0].balance)}</p>
                    </div>

                    <div className="box numberSales">
                        <p>Faturamento<br />total</p>
                        <p>{`${(sales.stats.sumBilling)/100} R$`}</p>
                    </div>
                    <div className="box billing">
                        <p>Média de<br />faturamento</p>
                        <p>{`${((+sales.stats.mediaBilling)/100).toFixed(2)} R$`}</p>
                    </div>
                </section>
            </ContainerSales>
            : null
    )
}

export default Sales
