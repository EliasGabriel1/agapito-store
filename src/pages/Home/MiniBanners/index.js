
function MiniBanners(props) {
    return (
        <div className="container minibanners">
            {props.text ? <h3>{props.text}</h3> : ""}
            <div className="container-minibanners">
                <a href="/busca">
                    <img alt="" src="https://i.postimg.cc/cJB44xWQ/mulherroupa.png"  width="100%"/>
                </a>
                <a href="/busca">
                    <img alt="" src="https://i.postimg.cc/cJB44xWQ/mulherroupa.png"  width="100%"/>
                </a>
                <a href="/busca">
                    <img alt="" src="https://i.postimg.cc/cJB44xWQ/mulherroupa.png"  width="100%"/>
                </a>
                <a href="/busca">
                    <img alt="" src="https://i.postimg.cc/cJB44xWQ/mulherroupa.png"  width="100%"/>
                </a>
            </div>
        </div>
    )
}

export default MiniBanners