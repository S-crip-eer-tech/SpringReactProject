import NotificationButton from "../NotificationButton"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'
function SalesCard() {
    return (
        <div className="react-style-card">
            <h2 className="react-style-title">Vendas</h2>
            <div>
                <div className="react-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="react-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="react-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
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
                        <tr>
                            <td className="show-992">1</td>
                            <td className="show-576">01/02/2019</td>
                            <td>Anakin</td>
                            <td className="show-992">33</td>
                            <td className="show-992">30</td>
                            <td>R$ 553000.00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">1</td>
                            <td className="show-576">01/02/2019</td>
                            <td>Anakin</td>
                            <td className="show-992">33</td>
                            <td className="show-992">30</td>
                            <td>R$ 553000.00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">1</td>
                            <td className="show-576">01/02/2019</td>
                            <td>Anakin</td>
                            <td className="show-992">33</td>
                            <td className="show-992">30</td>
                            <td>R$ 553000.00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">1</td>
                            <td className="show-576">01/02/2019</td>
                            <td>Anakin</td>
                            <td className="show-992">33</td>
                            <td className="show-992">30</td>
                            <td>R$ 553000.00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SalesCard
