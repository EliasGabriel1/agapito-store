
function MiniBanners(props) {
    return (
        <div className="container minibanners">
            {props.text ? <h3>{props.text}</h3> : ""}
            <div className="container-minibanners">
                <a href="/busca">
                    <img alt="" src="https://i.postimg.cc/3xk8mqD0/Group-1208.png"  width="100%"/>
                </a>
                <a href="/busca">
                    <img alt="" src="https://i.postimg.cc/3xk8mqD0/Group-1208.png"  width="100%"/>
                </a>
                <a href="/busca">
                    <img alt="" src="https://i.postimg.cc/3xk8mqD0/Group-1208.png"  width="100%"/>
                </a>
                <a href="/busca">
                    <img alt="" src="https://i.postimg.cc/3xk8mqD0/Group-1208.png"  width="100%"/>
                </a>
            </div>
        </div>
    )
}

export default MiniBanners