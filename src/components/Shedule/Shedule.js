import "./Shedule.css"
import coding from '../../Assets/coding.png'
export default function Shedule(){

    return(
        <div className="shedule">
            <div className="shedule__descr">
            <h2>Расписание вебинара</h2>
            <p>Данный вебинар будет проводиться по адресу: Ногинск ул. 3го Интернационала д. 80</p>
            <img src={coding} alt="coding" style={{width: "380px"}}/>
            </div>
            <table className="shedule__table">

  <tr className="shedule__table_row">
    <td className="shedule__table_row-txt">9:00 - 10:00</td>
    <th className="shedule__table_row-bold">Регистрация</th>
    
  </tr>
  <tr className="shedule__table_row">
    <td className="shedule__table_row-txt">10:00 - 11:00</td>
    <th className="shedule__table_row-bold">Введение в TechnoCommand</th>
  </tr>
  <tr className="shedule__table_row">
    <td className="shedule__table_row-txt">11:00 - 12:00</td>
    <th className="shedule__table_row-bold">Вебинар по Font-end</th>
  </tr>
  <tr className="shedule__table-row">
    <td className="shedule__table_row-txt">12:00 - 13:00</td>
    <th className="shedule__table_row-bold">Вебинар по Back-end</th>
  </tr>
  <tr className="shedule__table-row">
    <td className="shedule__table_row-txt">13:00 - 14:00</td>
    <th className="shedule__table_row-bold">Вопросы и ответы</th>
  </tr>
  
            </table>
        </div>
    )
}