
function Banner(props) {
    return (
        <div className="container centerbanners">
            {props.text ? <h3>{props.text}</h3> : ""}
            <div className="container-centerbanners">
                <img alt="" src="https://i.postimg.cc/qRW3vSSC/Group-1210.png" width="100%" />
                <img alt="" src="https://i.postimg.cc/qRW3vSSC/Group-1210.png" width="100%" />
            </div>
        </div>
    )
}

export default Banner