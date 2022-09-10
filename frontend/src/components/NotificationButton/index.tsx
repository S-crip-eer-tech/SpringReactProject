import icon from '../../assets/img/notification-icon.svg'
import axios from 'axios';
import './styles.css'
import { BASE_URL } from '../../util/request';


type Props = {
    saleId : number;
}

function handleClick(id:number){
    axios(`${BASE_URL}/sales/${id}/notification`)
      .then(response =>{
        console.log("Sucesso")
      })
}

function NotificationButton( {saleId} : Props) {
  return (
      <div className="react-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
  )
}

export default NotificationButton
