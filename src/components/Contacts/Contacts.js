import "./Contacts.css"

export default function Contacts() {
    return(
    <div className="contacts">
        <p className="contacts__txt">Contact Us</p>
        <ul className="contacts__list">
            <li className="contacts__list_item">
                <a className="contacts__list_item-link" href="tel:+79174447722">+7(917)444-77-22</a> </li>
            <li className="contacts__list_item">
            <a className="contacts__list_item-link" href="tel:+79174447722">+7(495)444-45-23</a></li>
            <li className="contacts__list_item">
                <a className="contacts__list_item-link" href="mailto:info@techno-dev.ru">info@techno-dev.ru</a> </li>

        </ul>
    </div>
    )
}