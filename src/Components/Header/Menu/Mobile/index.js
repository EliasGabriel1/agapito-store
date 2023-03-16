import { useState } from "react";
import ContentMobile from "./Content/Content";
import Button from "../ButtonMobile";
import Minicart from "../../../MiniCart";

function Menu2(props) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={open === true ? "mobile menu-open-father" : "mobile menu-close-father"}>
                <Button onClick={() => {
                    setOpen(!open)
                    document.querySelector(".mobile").classList.toggle('fixed');
                }} state={open} />
                <div className={open === true ? "menu-open" : "menu-close"}>
                    <ContentMobile api={props.api} />
                </div>
            </div>
            <Minicart />
        </>
    );
}

export default Menu2;
