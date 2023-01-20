import React, { useEffect, useState } from "react"
import Chart from "react-apexcharts"
import salesApi from "../../../api/salesApi"
import { Tsales } from "../../../interfaces"
import ContainerSales from "../../../styles/home/elevatedSection/containerSales"
import Loader from "../../../utils/Loader"
import showError from "../../../utils/showError"

function Sales() {

    const [sales, setSales] = useState<Tsales>()
    const [totalBilling, setTotalBilling] = useState(0)


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

    const state = sales !== undefined ? {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [
                    sales.balance[0].date,
                    sales.balance[1].date,
                    sales.balance[2].date,
                    sales.balance[3].date,
                    sales.balance[4].date,
                    sales.balance[5].date,
                    sales.balance[6].date,
                    sales.balance[7].date,
                    sales.balance[8].date,
                    sales.balance[9].date,
                    sales.balance[10].date,
                    sales.balance[11].date
                ]
            }
        },
        series: [
            {
                name: "Vendas",
                data: [
                    (sales.balance[0].balance) / 100,
                    (sales.balance[1].balance) / 100,
                    (sales.balance[2].balance) / 100,
                    (sales.balance[3].balance) / 100,
                    (sales.balance[4].balance) / 100,
                    (sales.balance[5].balance) / 100,
                    (sales.balance[6].balance) / 100,
                    (sales.balance[7].balance) / 100,
                    (sales.balance[8].balance) / 100,
                    (sales.balance[9].balance) / 100,
                    (sales.balance[10].balance) / 100,
                    (sales.balance[11].balance) / 100
                ]
            }
        ],
    } : {
        options: {},
        series: [],
    }

    return (
        sales !== undefined ?
            <ContainerSales>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="100%"
                    height="100%"
                    className="chart"
                />
                <section className="uses">
                    <div className="box numberSales">
                        <p>N° de Vendas<br />neste mês</p>
                        <p>{sales.balance[sales.balance.length - 1].numberSales}</p>
                    </div>
                    <div className="box billing">
                        <p>Faturamento<br />neste mês</p>
                        <p>{sales.balance[sales.balance.length - 1].balance}</p>
                    </div>

                    <div className="box numberSales">
                        <p>N° de Vendas<br />neste mês</p>
                        <p>{sales.balance[sales.balance.length - 1].numberSales}</p>
                    </div>
                    <div className="box billing">
                        <p>Faturamento<br />neste mês</p>
                        <p>{sales.balance[sales.balance.length - 1].balance}</p>
                    </div>

                </section>
            </ContainerSales>
            : null
    )
}

export default Sales
