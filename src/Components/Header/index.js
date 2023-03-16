import MenuContent from "./Menu";
import {useRef, useState, useEffect } from "react";
import Loading from "../Loading";
import Logo from "../Logo";
import Researcher from "./Menu/Researcher";

function Menu(props) {
    const headerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const headerHeight = headerRef.current.clientHeight;
        const isScrollPastHeader = window.scrollY > headerHeight;
        setIsSticky(isScrollPastHeader);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

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
            <header ref={headerRef} className={isSticky ? "sticky" : ""}>
                {
                    <div className="container head">
                        <Logo/>
                        <Researcher data={props.data} loading={props.loading} error={props.error}/>
                    </div >
                    }
                {!loading === true ? <MenuContent api={data} /> : <Loading type="spinningBubbles" color="black" />}
            </header>
        );
    }
    return <></>
}

export default Menu;