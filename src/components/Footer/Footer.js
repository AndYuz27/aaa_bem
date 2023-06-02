import "./Footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer__copyright">
                <p className="footer__copyright_text">Techno Command &copy;2023</p>
            </div>
            <div className="footer__legal">
                <a className="footer__legal_link" href="#">Privacy policy</a>
                <a className="footer__legal_link" href="#">VK</a>
                <a className="footer__legal_link" href="#">Telegram</a>
                <a className="footer__legal_link" href="#">Licence</a>
            </div>
        </div>
    )
}