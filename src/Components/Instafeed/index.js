import React from "react";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import Linkedin from "./Linkedin";
import Youtube from "./Youtube";
import Whatsapp from "./Whatsapp";
import Spotify from "./Spotify";
import "./instafeed.css"



function Instafeed(props) {
    return (
        <div className="container instafeed">
            {props.text ? <h3>{props.text}</h3> : ""}
            <div className="container-instafeed">
                <div className="socials">
                    <Instagram href="https://www.instagram.com/eliasgabe1/"/>
                    <Facebook href="https://www.instagram.com/eliasgabe1/" />
                    <Linkedin href="https://www.instagram.com/eliasgabe1/" />
                    <Youtube href="https://www.instagram.com/eliasgabe1/"/>
                    <Whatsapp href="https://www.instagram.com/eliasgabe1/" />
                    <Spotify href="https://www.instagram.com/eliasgabe1/"/>
                </div>
                <div className="container-feed">
                    <div className="image-feed">
                        <img alt="" src="https://i.postimg.cc/d08gqZ12/image-48.png" width="100%"/>
                    </div>
                    <div className="image-feed">
                        <img alt="" src="https://i.postimg.cc/RF4yqC6j/image-49.png" width="100%"/>
                    </div>
                    <div className="image-feed">
                        <img alt="" src="https://i.postimg.cc/d16XCMGD/image-50.png" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instafeed;