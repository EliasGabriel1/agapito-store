import { useState} from "react";
import ContentMobile from "./Content/Content";
import Button from "../ButtonMobile";

function Menu2(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mobile">
            <p>aaaaaaaaaaaaaaaaaaaaa</p>
            <Button onClick={()=> {
               setOpen(!open)
               document.querySelector(".mobile").classList.toggle('fixed');
            }} state={open}/>
            <div className={open===true?"menu-open":"menu-close"}>
                <ContentMobile api={props.api}/>
            </div>
        </div>
    );
  }
  
  export default Menu2;
  