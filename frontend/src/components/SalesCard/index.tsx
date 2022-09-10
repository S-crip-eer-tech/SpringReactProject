import NotificationButton from "../NotificationButton"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './styles.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../util/request"
import { Sale } from "../../models/sale"



function SalesCard() {

    const max = new Date()
    const min = new Date(new Date().setDate(new Date().getDate() - 365))

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)

    const [sales, setSales] = useState<Sale[]>([])


    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => {
                setSales(response.data.content)
            })
    }, [])

    return (
        <div className="react-style-card">
            <div>
                <div className="react-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="react-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="react-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="react-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="react-sales-table">
                    <thead>
                        <tr>
                            <th className="show-992">ID</th>
                            <th className="show-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-992">Visitas</th>
                            <th className="show-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td className="show-992">{sale.id}</td>
                                        <td className="show-576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="show-992">{sale.visited}</td>
                                        <td className="show-992">{sale.deals}</td>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="btn-container">
                                                <NotificationButton />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SalesCard
