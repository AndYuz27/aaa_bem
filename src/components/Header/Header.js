import tech_logo from "../../Assets/logo.png"
import "./Header.css"

export default function Header(){

    return(
        <header className="header">
            <img src={tech_logo} alt="Techno" className="header__logo"/>
            <nav className="header__nav">
                <a className="header__nav_link" href="https://yandex.ru/search/?text=figma+community&lr=121695">About Us</a>
                <a className="header__nav_link" href="https://yandex.ru/search/?text=figma+community&lr=121695">Vacancy</a>
                <a className="header__nav_link" href="https://yandex.ru/search/?text=figma+community&lr=121695">Partners</a>
                <a className="header__nav_link" href="https://yandex.ru/search/?text=figma+community&lr=121695">Contacts</a>
                </nav>
        </header>
    )
}