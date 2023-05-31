// import tech_logo from "../../Assets/logo.png"
import "./Landing.css"

export default function Landing(){

    return(
        <div className="landing">
            <div className="landing__background"/>
            <div className="landing__info">
                <p className="landing__info_header">Welcome to the Techno Project</p>
                <p className="landing__info_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <div className="landing__info_buttons">
                <button className="landing__info_button">Let's go</button>
                <button className="landing__info_button">Read this</button>
            </div>
            </div>

        </div>
    )
}