function index() {
    fetch("./api/Menu.json", {
        headers: {
            Accept: "application/json"
        }
    }).then(res => res.json()).then(res => console.log(res))
    return (
        <div>
            <h1>
                Header
            </h1>
        </div>
    );
}

export default index;