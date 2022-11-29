import MenuContent from "./Menu";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import Logo from "../Logo";
import Researcher from "./Menu/Researcher";

function Menu() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("./api/Menu.json", {
            headers: {
                Accept: "application/json"
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        }).then(data => {
            setData(data);
        }).catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
        }).finally(() => {
            setLoading(false)
        })

    }, [])
    console.log(error)
    if (!error) {
        return (
            <header>
                {
                    <div className="container head">
                        <Logo/>
                        <Researcher/>
                    </div >
                    }
                {!loading === true ? <MenuContent api={data} /> : <Loading type="spinningBubbles" color="black" />}
            </header>
        );
    }
    return <></>
}

export default Menu;