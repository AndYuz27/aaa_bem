import "./Landing.css"

export default function Landing(){

    return(
        <div className="landing">
            <div className="landing__info">
                <p className="landing__info_header">Welcome to the Techno Project</p>
                <p className="landing__info_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <div className="landing__info_buttons">
                <button className="landing__info_buttons-item">Let's go</button>
                <button className="landing__info_buttons-item">Read this</button>
            </div>
            </div>

        </div>
    )
}